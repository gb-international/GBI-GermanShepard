<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Softon\Indipay\Facades\Indipay; 


class PaymentController extends Controller
{
    public function payment(){

        $parameters = [
        'merchant_id' => 206523,
        'order_id' => 'asdfasdfasadfsdfsdf4444444',
        'amount' => 45,
      ];
      
      $order = Indipay::prepare($parameters);
    //   dd($order);
      $result = Indipay::process($order);
      // dd($result);
      return $result;
    }

    public function cancel(){
         echo 'Payment canceled';
    }

    public function response(Request $request){
        // dd($request);
        $response = Indipay::response($request);
        
        // For Otherthan Default Gateway
        // $response = Indipay::gateway('ccavenue')->response($request);

        dd($response);
    }
    
}
