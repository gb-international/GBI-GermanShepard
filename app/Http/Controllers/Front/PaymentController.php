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
    // add gst and internet charge amount here
    $amount = $data->tour_price;
    if($user->information->user_profession =='teacher'){
      $amount = $amount * $data->no_of_person;
    }
    $fee = ($amount * 3) /100; // internet charge
    $internet_charge = $fee + ($fee * 18 )/ 100; // gst on internet fee
    $amount = $amount + $internet_charge;       

    $track = Trackpayment::create([
      'user_id'=>$request->user_id,
      'travel_code'=>$request->travel_code,
      'tour_id'=>$request->tour_id,
      'school_id'=>$request->school_id,
      'amount'=>$amount,
      'added_by'=>$request->added_by
    ]);
    $form_data =  $request->all();
    $form_data['merchant_id'] = 206523;
    $form_data['order_id'] = $track->id;
    $form_data['amount'] = (int)$amount;
    $order = Indipay::prepare($form_data);
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
