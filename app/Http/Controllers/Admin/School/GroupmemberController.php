<?php

namespace App\Http\Controllers\Admin\School;

use App\Model\School\EducationInstitute as EduInstitute; 
use App\Http\Controllers\Admin\BaseController;
use Illuminate\Support\Facades\Mail;
use App\Rules\PhoneNubmerValidate;
use App\Mail\AccountRegistered;
use App\Model\User\Subscriber;
use App\Rules\EmailValidate;
use App\Model\Tour\TourUser;
use App\Model\Tour\Tour;
use App\Helpers\SendSms;
use App\CompanyUser;
use App\Http\Requests\Admin\GroupMemberRequest;
use App\Model\School\Groupmember;
use Carbon\Carbon;
use Validator; 
use Illuminate\Http\Request;


class GroupmemberController extends BaseController
{
    public function getMember($tour_type, $tour_code,$user_type){
        try{
            $where = ['tour_id'=>$tour_code,'user_type'=>$user_type, 'tour_type'=>$tour_type];
            $groupmember = Groupmember::where($where)->get();
            if($groupmember->count() > 0){
                return response()->json($groupmember);
            }
            else{
                return $this->sendError("Data not found!", 404);
            }
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }
    public function getMemberPending($tour_type, $tour_code,$user_type, $pending){
        try{
            $where = ['tour_id'=>$tour_code,'user_type'=>$user_type,'payment_status'=>$pending, 'tour_type'=>$tour_type];
            $groupmember = Groupmember::where($where)->get();
            if($groupmember->count() > 0){
                return response()->json($groupmember);
            }
            else{
                return $this->sendError("Data not found!", 404);
            }

        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }
    public function updateMember($tour_type, Request $request){
        try{
            $validator = Validator::make($request->all(), [ 
                'id'=>'required|exists:groupmembers,id', 
            ]);
    
            if ($validator->fails()) { 
                return response()->json(['error'=>$validator->errors()], 401);            
            }

            $group_member = Groupmember::where('id',$request->id)->firstOrFail();
            $group_member->first_name = $request->first_name??$group_member->first_name;
            $group_member->last_name = $request->last_name??$group_member->last_name;
            $group_member->email = $request->email??$group_member->email;
            $group_member->gender = $request->gender??$group_member->gender;
            $group_member->age = $request->age??$group_member->age;
            $group_member->mobile = $request->mobile??$group_member->mobile;
            $group_member->is_paid = $request->is_paid??$group_member->is_paid;
            $group_member->payment_status = $request->payment_status??$group_member->payment_status;
            $group_member->mobile = $request->mobile??$group_member->mobile;
            $group_member->save();
            return response()->json('successfull updated');
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }
    public function destroyMember($tour_type, Request $request){
        $validator = Validator::make($request->all(), [ 
            'id'=>'required|exists:groupmembers,id', 
        ]);

        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }
        $groupmember = Groupmember::where('id',$request->id)->firstOrFail();
        $groupmember->delete();
        return response()->json('successfully deleted');
    }
    public function addMember($tour_type, GroupMemberRequest $request){
        try{
            $data = array();
            if($tour_type == "school"){
                $edu_institute = EduInstitute::where('school_id', $request->school_id??NULL)->first();
                if(!$edu_institute){
                    return $this->sendError("Invalid user", 404);
                }
                $data['edu_institute_id'] = $edu_institute->id??NULL;
                $data['school_id'] = $request->school_id??NULL;
            }
            else if($tour_type == "corporate"){
                $company_user = CompanyUser::where('company_id', $request->company_id??NULL)->first();
                if(!$company_user){
                    return $this->sendError("Invalid user", 404);
                }
                $data['company_user_id'] = $company_user->id??NULL;
                $data['company_id'] = $request->company_id??NULL;
            }
            else{
                $data['family_user_id'] = $request->family_user_id??NULL;
            }     
            $data['user_type'] = $request->user_type??NULL;
            $data['tour_type'] = $tour_type;
            $data['tour_id'] = $request->tour_id??'';
            if($request->details){
                foreach ($request->details as $detail) {
                    $data['first_name'] = $detail['first_name']??NULL;
                    $data['last_name'] = $detail['last_name']??NULL;
                    $data['email'] = $detail['email']??NULL;
                    $data['gender'] = $detail['gender']??NULL;
                    $data['age'] = $detail['age']??NULL;
                    $data['mobile'] = $detail['mobile']??NULL;
                    $data['is_paid']= $detail['is_paid']??NULL;
                    $data['payment_status'] = $detail['payment_status']??'pending';
                    Groupmember::create($data);
                }
            }
            return response()->json('succesfully added');
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }
    public function addlogindetail($tour_type, GroupMemberRequest $request){
        try{
            $travel_code = Tour::select('travel_code','id','tour_id')->where('tour_id',$request->tour_id)->first();
            foreach ($request->details as $groupmember) {
                // validate if user email is already registered
                $edu_institute = EduInstitute::where('email',$groupmember['email'])->first();
                if(!$edu_institute){
                    $edu_institute  = $this->createEduInstitute($groupmember, $request->school_id);
                    $message = 'Welcome in GBI-International Please login  to GBI panel with credentials Email Id : '. $groupmember['email']. ' And password : '. $groupmember['email'].' Thank you.';
    
                    // subscribe for newsletter
                    if(!$subscriber = Subscriber::where(array('email'=>$edu_institute->email, 'client_type'=>$tour_type))->first()){
                        $data['email'] = $edu_institute->email;
                        $data['edu_institute_id'] = $edu_institute->id;
                        $data['name'] = $edu_institute->name;
                        $data['client_type'] = $request->tour_type;
                        Subscriber::create($data);
                    }
                }else{
                    $message = 'Welcome in GBI-International Please login to GBI panel with your existing Account Thank you.';
                }
                // $user_type =($request->role_type == 0)?'student':'teacher';
                // validate if user id is already registered for the tour
                $tour = [
                    'travel_code'=>$travel_code->travel_code,
                    'edu_institute_id'=>$edu_institute->id,
                    'tour_code'=>$request->tour_id,
                    'user_type' => $request->tour_type,
                    'is_paid' => $groupmember['is_paid']??0
                ];
                $tour_user = TourUser::where($tour)->first();
                if(!$tour_user){
                    $tour_user = TourUser::create($tour);
                }
                
                // send notification to each user
                $sendsms = new SendSms;
                $sendsms->sendLoginDetails($groupmember['mobile'],$message);
            }
            return response()->json('succesfully added');
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }

    protected function createEduInstitute($groupmember, $school_id){
        $edu_institute = new EduInstitute();
        $edu_institute->name = trim($groupmember['first_name'].' '.$groupmember['last_name']);
        $edu_institute->email = $groupmember['email']??'';
        $edu_institute->password = bcrypt($groupmember['email']);
        $edu_institute->status = 1;
        $edu_institute->school_id = $school_id;
        $edu_institute->role_type = 0;
        $edu_institute->phone_no = $groupmember['mobile']??'';
        $edu_institute->varified = '1';
        $edu_institute->photo = 'user.png';
        $edu_institute->gender = $groupmember['gender']??'';
        $edu_institute->change_password = 0;
        $edu_institute->save();
        return $edu_institute;
    }

    public function sendMemberLogin($tour_type, Request $request){
        $validator = Validator::make($request->all(), [ 
            'first_name' => 'required',  
            'mobile' => ['required',new PhoneNubmerValidate, 'unique:edu_institutes,phone_no'],
            'email' => ['required', 'email',new EmailValidate, 'unique:edu_institutes,email'],
            'school_id' => 'required|exists:schools,id',
        ]);
       
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 422);            
        }

        $eduInstitute = EduInstitute::where('email',$request->email)->first();
        if($eduInstitute === null){
            $permitted_chars = '0123456789abcdefghijklmnopqrstuvwxyz@#%^&*()-';
            $pass = substr(str_shuffle($permitted_chars), 0, 15);
            $eduInstitute = new EduInstitute;
            $eduInstitute->name = trim($request->first_name.' '.$request->last_name);
            $eduInstitute->email = $request->email;
            $eduInstitute->password = bcrypt($pass);
            $eduInstitute->role_type = '2';
            $eduInstitute->phone_no = $request->mobile;
            $eduInstitute->gender = $request->gender;
            $eduInstitute->school_id = $request->school_id;
            $eduInstitute->save();
            if(!$subscriber = Subscriber::where(array('email'=>$eduInstitute->email, 'client_type'=>$tour_type))->first()){
                $data['email'] = $eduInstitute->email;
                $data['edu_institute_id'] = $eduInstitute->id;
                $data['name'] = $eduInstitute->name;
                $data['client_type'] = $tour_type;
                Subscriber::create($data);
            }
            $eduInstitute->password = $pass;
            Mail::send(new AccountRegistered($eduInstitute));  
        }
        else{
            return $this->sendError("Already exist!", 409);
        }
        return response()->json('Credentials Sent');
    }
}
