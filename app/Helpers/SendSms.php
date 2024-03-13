<?php

namespace App\Helpers;

class SendSms{
    private $id = 'csrikhi@gbinternational.in';
    private $pwd = 'DesiDaru26015@';
    
    public static function send($mobile,$template_id,$message){
        $phone = '91'.$mobile;
        $id = 'csrikhi@gbinternational.in';
        $pwd = 'DesiDaru26015@';
        $ApiUrl = "https://www.businesssms.co.in/smsaspx?Id=".$id."&Pwd=".urlencode($pwd)."&PhNo=".$phone."&TemplateID=".$template_id."&TEXT=".urldecode($message);
        $client = new \GuzzleHttp\Client(['verify' => false ]);
        $request = $client->get($ApiUrl);
    }


    public function signUpSMS($mobile,$user){
        $phone = '91'.$mobile;
        $message = "Dear ".ucfirst($user->name).".Thank you for registering your self with Go With GBI.Now you can start your journey with us by selecting the destinations of your choice.";
        $template_id = 1007302686286761362;
        
        $ApiUrl = "https://www.businesssms.co.in/smsaspx?Id=".$this->id."&Pwd=".urlencode($this->pwd)."&PhNo=".$phone."&TemplateID=".$template_id."&TEXT=".urldecode($message);
        $client = new \GuzzleHttp\Client(['verify' => false ]);
        $request = $client->get($ApiUrl);
    }

    public function  otpSMS($mobile,$otp){
        $phone = '91'.$mobile;
        $message = "Dear Customer Your One Time Password is $otp .This OTP will remain valid for 90 seconds";
        $template_id = 1007633512302840127;
        
        $ApiUrl = "https://www.businesssms.co.in/smsaspx?Id=".$this->id."&Pwd=".urlencode($this->pwd)."&PhNo=".$phone."&TemplateID=".$template_id."&TEXT=".urldecode($message);
        $client = new \GuzzleHttp\Client(['verify' => false ]);
        $request = $client->get($ApiUrl);
    }

    public function sendLoginDetails($mobile,$message){
        $phone = '91'.$mobile;
        $ApiUrl = "https://www.businesssms.co.in/smsaspx?Id=".$this->id."&Pwd=".urlencode($this->pwd)."&PhNo=".$phone."&TEXT=".urldecode($message);
        $client = new \GuzzleHttp\Client(['verify' => false ]);
        $request = $client->get($ApiUrl);
    }

    public function frontBookingUserSms($user,$itinerary){
        $phone = '91'.$user->phone_no;
        $message = "Dear ".ucfirst($user->name)." Thanks for booking Itinerary : ".$itinerary." . Our Agent will Contact you soon.";
        $ApiUrl = "https://www.businesssms.co.in/smsaspx?Id=".$this->id."&Pwd=".urlencode($this->pwd)."&PhNo=".$phone."&TEXT=".urldecode($message);
        $client = new \GuzzleHttp\Client(['verify' => false ]);
        $request = $client->get($ApiUrl);
    }

    public function successPaymentSMS($user){
        $phone = '91'.$user['phone_no'];
        $message = "Dear ".ucfirst($user['name'])." Payment successfully completed now you can open your tour Dashboard.";
        $ApiUrl = "https://www.businesssms.co.in/smsaspx?Id=".$this->id."&Pwd=".urlencode($this->pwd)."&PhNo=".$phone."&TEXT=".urldecode($message);
        $client = new \GuzzleHttp\Client(['verify' => false ]);
        $request = $client->get($ApiUrl);
    }

    
    public function escortLoginLink($phoneno,$name){
        $phone = '91'.$phoneno;
        $link = \config('gbi.escort_login_link');
        $message = "Dear ".ucfirst($name)." Please click on this link $link and login with your registerd mobile number with GBI.";
        $ApiUrl = "https://www.businesssms.co.in/smsaspx?Id=".$this->id."&Pwd=".urlencode($this->pwd)."&PhNo=".$phone."&TEXT=".urldecode($message);
        $client = new \GuzzleHttp\Client(['verify' => false ]);
        $request = $client->get($ApiUrl);
    }
    public function feedbackLink($ph_no, $link, $name){
        $phone = '91'.$ph_no;
        $message =  "Dear ".$name.". Thank you for choosing GBI .Please provide us your valuable feedback on your journey with GB International .Please click the following feedback link ".$link;
        
        /*"Dear ".$name.". Thank you for choosing GBI. Please provide us your valuable feedback on your journey with GB International .Please click the following feedback link <a href=".$link.">Give Feedback</a>";*/

        $template_id = 1007330159345850888;
        $ApiUrl = "https://www.businesssms.co.in/smsaspx?Id=".$this->id."&Pwd=".urlencode($this->pwd)."&PhNo=".$phone."&TemplateID=".$template_id."&TEXT=".urldecode($message);
        $client = new \GuzzleHttp\Client(['verify' => false ]);
        $request = $client->get($ApiUrl);
    }
    public function feedbackReceived($user, $ph_no){
        $phone = '91'.$ph_no;
        $message = "Dear ".$user->name." Thank you for sharing your valuable feedback with GBI. We really appreciate your time. We are constantly working towards making your journey better. Regards GBI Team.";
        $template_id = 1007563217285792615;
        $ApiUrl = "https://www.businesssms.co.in/smsaspx?Id=".$this->id."&Pwd=".urlencode($this->pwd)."&PhNo=".$phone."&TemplateID=".$template_id."&TEXT=".urldecode($message);
        $client = new \GuzzleHttp\Client(['verify' => false ]);
        $request = $client->get($ApiUrl);
    }
    public function finalProgram($ph_no, $it_name, $start_date, $link){
        $phone = '91'.$ph_no;
        $message =  "Dear Passenger, GBI is happy to welcome you aboard on an educational trip to ".$it_name.". Click on the link ".$link." to view the detailed itinerary program. 
        Your Journey start date is ".$start_date.".";
        $template_id = 1007522621070617124;
        $ApiUrl = "https://www.businesssms.co.in/smsaspx?Id=".$this->id."&Pwd=".urlencode($this->pwd)."&PhNo=".$phone."&TemplateID=".$template_id."&TEXT=".urldecode($message);
        $client = new \GuzzleHttp\Client(['verify' => false ]);
        $request = $client->get($ApiUrl);
    }
    public function accountRegistered($user, $ph_no){
        $phone = '91'.$ph_no;
        $message = "Dear ".$user->name.", you are now successfully registered with GB International. Let us be your guiding partner for your upcoming journeys. Email: ".$user->email." Password: ".$user->password;
        $template_id = 1007301681061752597;
        $ApiUrl = "https://www.businesssms.co.in/smsaspx?Id=".$this->id."&Pwd=".urlencode($this->pwd)."&PhNo=".$phone."&TemplateID=".$template_id."&TEXT=".urldecode($message);
        $client = new \GuzzleHttp\Client(['verify' => false ]);
        $request = $client->get($ApiUrl);
    }
    public function paymentLink($ph_no, $link, $name){
        $phone = '91'.$ph_no;
        $message = "Dear ".$name.", in order to assist your payment with GB International, we have created a customised link for you, please click on it to make your payment. ".$link;
        $template_id = 1007330159345850888; //change template
        $ApiUrl = "https://www.businesssms.co.in/smsaspx?Id=".$this->id."&Pwd=".urlencode($this->pwd)."&PhNo=".$phone."&TemplateID=".$template_id."&TEXT=".urldecode($message);
        $client = new \GuzzleHttp\Client(['verify' => false ]);
        $request = $client->get($ApiUrl);
    }
    public function  otpSMSNew($mobile,$otp){
        $phone = '91'.$mobile;
        $message = "Dear GBI Holidays Customer ,Web Application Login One Time Password is ".$otp;
        $template_id = 1007088805013554651;
        $sender_id = 'GBIHOL';
        $ApiUrl = "https://www.businesssms.co.in/smsaspx?Id=".$this->id."&Pwd=".urlencode($this->pwd)."&PhNo=".$phone."&TemplateID=".$template_id."&TEXT=".urldecode($message)."&SenderID=".$sender_id;
        $client = new \GuzzleHttp\Client(['verify' => false ]);
        $request = $client->get($ApiUrl);
    }
//https://www.businesssms.co.in/smsaspx?Id=csrikhi@gbinternational.in&Pwd=Roger224225g32@&PhNo=918920397458&TEXT=hello





}