<?php

namespace App\Http\Controllers\Front;
use App\Http\Controllers\Controller; 
use Illuminate\Http\Request;
use App\Model\Tour\Userpayment;

class UserpaymentController extends Controller
{
    public function store(Request $request){
        $this->validate($request, [ 
            'tour_code' => 'required',
            'amount' => 'required',
            'payment_mode' => 'required',
            'user_id' => 'required',
        ]);
        $checkDuplicate = Userpayment::where(['user_id'=>$request->user_id,'tour_code'=>$request->tour_code])->get();

        if($checkDuplicate->count()){
            return response()->json(['error'=>'You have already made payment']);
        }

        Userpayment::create($request->all());
        return response()->json('successfully paid');
        
    }

    public function tourPayStatus(Request $request){
        // check if teacher has paid 
        $data = Userpayment::select('status')->where(['tour_code'=>$request->tour_code,'added_by'=>'teacher','payment_mode'=>'self'])->first();
        // if teacher has not paid then check if student has paid
        if(!$data){
            // if teacher not paid then check if student has paid
            $data = Userpayment::select('status')->where(['tour_code'=>$request->tour_code,'user_id'=>$request->user_id])->first();
        }

        return response()->json($data);
    }
}
