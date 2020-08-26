<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Softon\Indipay\Facades\Indipay;


class PaymentController extends Controller
{
    public function payment(){

        $parameters = [
        'transaction_no' => '1233221223322',
        'amount' => '1200.00',
        'name' => 'Jon Doe',
        'email' => 'jon@doe.com'
      ];
      
      $order = Indipay::prepare($parameters);
      dd('hi');
      return Indipay::process($order);
    }

    public function cancel(){
         echo 'Payment canceled';
    }

    public function response(Request $request){
        $response = Indipay::response($request);
        
        // For Otherthan Default Gateway
        // $response = Indipay::gateway('ccavenue')->response($request);

        dd($response);
    }
    
}
