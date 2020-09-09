<?php

namespace App\Http\Controllers\Admin\Reservation;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Tour\Userpayment;

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

}
