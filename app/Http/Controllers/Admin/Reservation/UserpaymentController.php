<?php

namespace App\Http\Controllers\Admin\Reservation;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Tour\Userpayment;
use App\Model\User\Information;
class UserpaymentController extends Controller
{
    public function paymentList(Request $request){
        // get school payment mode
                    
        if($request->added_by == 'student'){
            $userpayment = Userpayment::where([
                'school_id'=>$request->school_id,
                'tour_code'=>$request->tour_code,
                'added_by'=> $request->added_by
            ])->with('user')->get();
        }else{
            $userpayment = Userpayment::where([
                'school_id'=>$request->school_id,
                'tour_code'=>$request->tour_code,
                'added_by'=> $request->added_by
            ])->firstOrFail()->adminFormat();
        }
        return response()->json($userpayment);
    }

    
    public function paymenStudent(Request $request){
        // get school payment mode
        $userpayment = Userpayment::where([
            'school_id'=>$request->school_id,
            'tour_code'=>$request->tour_code,
            'added_by'=>'teacher'
        ])->firstOrFail()->adminFormat();

        return response()->json($userpayment);
    }



    public function createpayment(Request $request){

        $payment = Userpayment::where('id',$request->id)->first();
        $payment->update($request->all());
        return $payment->adminFormat();
    }

    public function addtourpayment(Request $request){
        $this->validate($request, [ 
            'tour_code' => 'required',
            'payment_mode' => 'required',
            'amount' => 'required'
        ]);
        $checkDuplicate = Userpayment::where(['user_id'=>$request->user_id,'tour_code'=>$request->tour_code])->get();

        if($checkDuplicate->count()){
            return response()->json(['error'=>'You have already made payment']);
        }

        Userpayment::create($request->all());
        return response()->json('successfully paid');
    }
    
    public function getUserpayments(Request $request){
        
        $data = Userpayment::where(['school_id'=>$request->school_id,'tour_code'=>$request->tour_code])->first();
        return response()->json($data);
    }

    public function updatetourpayment(Request $request){
        $this->validate($request, [ 
            'tour_code' => 'required',
            'payment_mode' => 'required',
            'amount' => 'required'
        ]);
        $userpayment = Userpayment::where(['user_id'=>$request->user_id,'tour_code'=>$request->tour_code])->first();
        $data = [
            'payment_mode' => $request->payment_mode,
            'payment_type' => $request->payment_type,
            'tour_code' =>$request->tour_code,
            'schoolbankdetail_id' => $request->schoolbankdetail_id,
            'amount' => $request->amount,
            'user_id' => $request->user_id,
            'school_id' => $request->school_id,
            'cheque_bank_name' => $request->cheque_bank_name,
            'date_of_issue'=> $request->date_of_issue,
            'ifsc_code'=> $request->ifsc_code,
            'cheque_number'=> $request->cheque_number,
            'added_by' => $request->added_by,
        ];
        $userpayment->update($data);
        return response()->json('successfully paid');
    }


    public function getSchoolUser(Request $request){
        $info = Information::with(['user' => function($q){
                 $q->select('id','name');
                }])
                ->where('school_id',$request->school_id)
                ->select('informations.user_id','informations.user_profession')
                ->get();
        return response()->json($info);

    }

}
