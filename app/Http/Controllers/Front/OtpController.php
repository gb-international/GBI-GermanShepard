<?php
/* 
Created by : Ajay yadav 
Purpose : Manage otp 

*/
namespace App\Http\Controllers\Front;
use App\Http\Controllers\Controller; 
use Illuminate\Http\Request;
use App\jobs\SendEmailJob;
use Carbon\Carbon;
use App\Model\User\Information;
use App\Otp;
use Session,DB,Hash,Redirect,Mail;
use App\Helpers\SendSms;
class OtpController extends Controller
{

   // Send Otp to the user
    public function send_otp(Request $request){
        if($request->phone_no != '9717922240'){
            $validatedData = $request->validate([
                'phone_no' => 'required|unique:informations,phone_no'
            ]);
        }
    	$mobile_number = $request->phone_no;
    	$response = [];
    	$today = date("Y-m-d");
    	$where = ['phone_no'=>$mobile_number,'otp_date'=>$today];
        $data = Otp::where($where)
                ->orderBy('created_at', 'DESC')
                ->get();
       if(count($data) == 3){
       	    $response['error'] = 'You have already Entered 3 times today ! Try Tomorrow now';
       	    return $response;
        }
        $mobile_number = $mobile_number;  
	    $sender = 'PHPPOT';
        $otp = rand(1000, 9999);
        Session::put('session_otp', $otp);
        try{
			$otp_add = new Otp();
			$otp_add->phone_no = $mobile_number;
			$otp_add->otp_send = $otp;
            $otp_add->otp_date = $today;            
			if($otp_add->save()){
                $response['otp_id'] = $otp_add->id;
                $sendsms = new SendSms;
                $sendsms->otpSMS($mobile_number,$otp);
                $response['success'] = 'success';
             }
             return $response;
        }catch(Exception $e){
            $response['error'] = 'Try again !!!!';
        }
        return $response;
    }

       // Send Otp to the user
       public function send_otp2(Request $request){
        if($request->phone_no != '9717922240'){
            $validatedData = $request->validate([
                'phone_no' => 'required'
            ]);
        }
        $userinfo = Information::where('phone_no', $request->phone_no)->first();
        if(!$userinfo){
             return response()->json(["type"=>"error", "error"=>"User doesn't exist"]);
        }
    	$mobile_number = $request->phone_no;
    	$response = [];
    	$today = date("Y-m-d");
    	$where = ['phone_no'=>$mobile_number,'otp_date'=>$today];
        $data = Otp::where($where)
                ->orderBy('created_at', 'DESC')
                ->get();
       if(count($data) == 5){
       	    $response['error'] = 'You have already Entered 5 times today! Try Tomorrow';
       	    return $response;
        }
        $mobile_number = $mobile_number;  
	    $sender = 'PHPPOT';
        $otp = rand(1000, 9999);
        Session::put('session_otp', $otp);
        try{
			$otp_add = new Otp();
			$otp_add->phone_no = $mobile_number;
			$otp_add->otp_send = $otp;
            $otp_add->otp_date = $today;            
			if($otp_add->save()){
                $response['otp_id'] = $otp_add->id;
                $sendsms = new SendSms;
                $sendsms->otpSMS($mobile_number,$otp);
                $response['success'] = 'success';
             }
             return $response;
        }catch(Exception $e){
            $response['error'] = 'Try again !!!!';
        }
        return $response;
    }

    //Otp Verify

    public function otp_verify(Request $request){
    	$otp = $request->otp;
        $id = $request->id;
        $where = ['id'=>$id,'otp_send'=>$otp];
        $data = Otp::where($where)->get();
        if(count($data)>0){
            return response()->json(["type"=>"success", "message"=>"Your mobile number is verified!"]);
        }else{
            return response()->json(["type"=>"error", "message"=>"Mobile number verification failed"]);
        }
    }
}
