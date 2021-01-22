<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Softon\Indipay\Facades\Indipay; 
use App\Model\Tour\Tour;
use App\Model\Tour\Trackpayment;
use App\Model\Tour\Userpayment;
use App\User;
use App\Helpers\SendSms;
use App\Helpers\Crypto;
use App\Jobs\PaymentSuccessJob;

class PaymentController extends Controller
{

  public function test(Request $request){
    $requests = $request->all();
    unset($requests['_token']);
    $requests['user_id'] = 2;
    $order = Indipay::prepare($requests);
    $result = Indipay::process($order);
    return $result;
  }
    public function payment(Request $request){      
      $check = Userpayment::where(['user_id'=>$request->user_id,'tour_code'=>$request->tour_id])->first();
      
      if($check){
        header("Location: /payment-cancel");
        dd();
      }
      
      $data = Tour::where('travel_code',$request->travel_code)->first();
      $user = User::where('id',$request->user_id)->first();

      $amount = $data->tour_price;
      if($user->information->user_profession =='teacher'){
        $amount = $amount * $data->no_of_person;
      }

      $track = Trackpayment::create([
          'user_id'=>$request->user_id,
          'travel_code'=>$request->travel_code,
          'tour_id'=>$request->tour_id,
          'school_id'=>$request->school_id,
          'amount'=>$amount,
          'added_by'=>$request->added_by
        ]);

        $parameters = [
          'merchant_id' => 206523,
          'order_id' => $track->id,
          'billing_name' => $user->name,
          'billing_address' => $user->information->address,
          'billing_city' => $user->information->city,
          'billing_state'=> $user->information->state,
          'billing_zip'=> $user->information->zip_code,
          'billing_country'=> $user->information->country,
          'billing_tel'=> $user->information->phone_no,
          'billing_email'=> $user->email,
          'amount' => (int)$amount,
        ];
        
      $order = Indipay::prepare($parameters);
      $result = Indipay::process($order);
      return $result;
    }

    public function cancel(Request $request){
      dd($request);
      $track = Trackpayment::where('id',(int)$request->orderNo)->first();
      $track->delete();
      header("Location: /payment-cancel");
      dd($track);
    }

    public function response(Request $request){
      $response = Indipay::response($request);
      dd($response);
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
          'added_by'=>$track->added_by
        ]);
        
        $user = [
          'name'=>$response['billing_name'],
          'phone_no'=>$response['billing_tel']
        ];
        $sendsms = new SendSms;
        $sendsms->successPaymentSMS($user);
        $email_data['emailto'] = $response['billing_email'];
        // pass data to send the email here ($user is just dummy)
        PaymentSuccessJob::dispatch($email_data);
        $track->delete();
        header("Location:/payment-success");
        dd($response);
    }
    
}
