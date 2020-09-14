<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Softon\Indipay\Facades\Indipay; 
use App\Model\Tour\TourUser;
use App\Model\Tour\Trackpayment;
use App\Model\Tour\Userpayment;

class PaymentController extends Controller
{
    public function payment(Request $request){
      $data = TourUser::where(['travel_code'=>$request->travel_code,'user_id'=>$request->user_id])
        ->FirstOrFail();
      $track = Trackpayment::create([
          'user_id'=>$request->user_id,
          'travel_code'=>$request->travel_code,
          'tour_id'=>$request->tour_id,
          'school_id'=>$request->school_id,
          'amount'=>$data->amount
        ]);

        $parameters = [
          'merchant_id' => 206523,
          'order_id' => $track->id,
          'billing_name' => $data->user->name,
          'billing_address' => $data->user->information->address,
          'billing_city' => $data->user->information->city,
          'billing_state'=> $data->user->information->state,
          'billing_zip'=> $data->user->information->zip_code,
          'billing_country'=> $data->user->information->country,
          'billing_tel'=> $data->user->information->phone_no,
          'billing_email'=> $data->user->email,
          'amount' => (int)$data->amount,
        ];
        
      $order = Indipay::prepare($parameters);
      // dd($order);
      $result = Indipay::process($order);
      return $result;
    }

    public function cancel(Request $request){
      $track = Trackpayment::where('id',(int)$request->orderNo)->first();
      $track->delete();
      header("Location: /payment-cancel");
      dd($track);
    }

    public function response(Request $request){
        $response = Indipay::response($request);
        $track = Trackpayment::where('id',$response['order_id'])->first();
        
        Userpayment::create([
          'user_id' => $track->user_id,
          'school_id'=>$track->school_id,
          'tour_code' => $track->tour_id,
          'payment_mode' => 'self',
          'payment_type'=>'net',
          'amount' => $track->amount,
          'status' => strtolower($response['order_status']),
          'payment_data' => json_encode($response),
        ]);
         $track->delete();
        header("Location:/payment-success");
        dd($response);
    }
    
}
