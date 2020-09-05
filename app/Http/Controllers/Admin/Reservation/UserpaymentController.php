<?php

namespace App\Http\Controllers\Admin\Reservation;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Tour\Userpayment;

class UserpaymentController extends Controller
{
    public function paymentList(Request $request){
        // get school payment mode
        $userpayment = Userpayment::where([
            'school_id'=>$request->school_id,
            'tour_code'=>$request->tour_code,
            'added_by'=>'teacher'
        ])->firstOrFail()->adminFormat();
        return $userpayment;
        if($userpayment['payment_mode'] == 'student'){
            // fetch all the users who are going on this tour
            
        }
        return response()->json($userpayment);
    }
}
