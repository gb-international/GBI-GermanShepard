<?php

namespace App\Helpers;

class SendSms{
    public $successStatus = 200;
    
    public static function send($mobile,$message){
        $id = 'csrikhi@gbinternational.in';
        $pwd = 'Roger224225g32@';

        $phone = '91'.$mobile;
        $ApiUrl ="https://www.businesssms.co.in/smsaspx?Id=".$id."&Pwd=".urlencode($pwd)."&PhNo=".$phone."&text=".urlencode($message);                

        $client = new \GuzzleHttp\Client(['verify' => false ]);
        $request = $client->get($ApiUrl);

    }
}