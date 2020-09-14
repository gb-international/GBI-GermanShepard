<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Softon\Indipay\Facades\Indipay; 


class PaymentController extends Controller
{
    public function payment(Request $request){

      dd($request);
      $parameters = [
        'merchant_id' => 206523,
        'order_id' => '1',
        'billing_name' => ' ',
        'billing_address' => ' ',
        'billing_city' => ' ',
        'billing_state'=> ' ',
        'billing_zip'=> ' ',
        'billing_country'=> ' ',
        'billing_tel'=> ' ',
        'billing_email'=>' ',
        'amount' => 45,
      ];
      
      $order = Indipay::prepare($parameters);
      // dd($order);
      $result = Indipay::process($order);
      // dd($result);
      return $result;
    }

    public function cancel(Request $request){
      dd($request);
        header("Location: /payment-cancel");
    }

    public function response(Request $request){
        $response = Indipay::response($request);        
        // For Otherthan Default Gateway
        // $response = Indipay::gateway('ccavenue')->response($request);

        dd($response);
        header("Location: /payment-success");
    }
    
}
