<?php
/* 
Created by : Ajay yadav 
Purpose : Manage otp 

*/
namespace App\Http\Controllers\Front;
use App\Http\Controllers\Controller; 
use Illuminate\Http\Request;
use App\jobs\SendEmailJob;
use Carbon\Carbon;
use App\Model\User\UserMoreInfo;
use App\Otp;
use Session,DB,Hash,Redirect,Mail;
use GuzzleHttp\Client;

class OtpController extends Controller
{
    private $id = 'csrikhi@gbinternational.in';
    private $pwd = 'Roger224225g32@';

   // Send Otp to the user
    public function send_otp(Request $request){
    	$validatedData = $request->validate([
	        'phone_no' => 'required|unique:user_more_infos'
	    ]);
    	$mobile_number = $request->phone_no;
    	$response = [];
    	$today = date("Y-m-d");
    	$where = ['phone_no'=>$mobile_number,'otp_date'=>$today];
        $data = Otp::where($where)
                ->orderBy('created_at', 'DESC')
                ->get();
       if(count($data) == 3){
       	    $response['error'] = 'You have already Entered 3 times today ! Try Tomorrow now';
       	    return $response;
        }
        $mobile_number = $mobile_number;  
	    $sender = 'PHPPOT';
        $otp = rand(1000, 9999);
        Session::put('session_otp', $otp);
        $message = $otp." is your OTP for GBInternational. Do not share this OTP with anyone."; 
        try{
			$otp_add = new Otp();
			$otp_add->phone_no = $mobile_number;
			$otp_add->otp_send = $otp;
			$otp_add->otp_date = $today;
			if($otp_add->save()){
                $response['otp_id'] = $otp_add->id;
                $this->send_sms($mobile_number,$message);
                $response['success'] = 'success';
             }
             return $response;
        }catch(Exception $e){
            $response['error'] = 'Try again !!!!';
        }
        return $response;
    }
//
    // Send message to the phone_no
    public function send_sms($phone, $message){
        $phone = '91'.$phone;

    	$ApiUrl ="https://www.businesssms.co.in/smsaspx?Id=".$this->id."&Pwd=".urlencode($this->pwd)."&PhNo=".$phone."&text=".urlencode($message);                

        $client = new \GuzzleHttp\Client(['verify' => false ]);
        $request = $client->get($ApiUrl);
        return $response = $request->getBody();


    }

    //Otp Verif

    public function otp_verify(Request $request){
    	$otp = $request->otp;
        $id = $request->id;
        $where = ['id'=>$id,'otp_send'=>$otp];
        $data = Otp::where($where)->get();
        if(count($data)>0){
            return response()->json(["type"=>"success", "message"=>"Your mobile number is verified!"]);
        }else{
            return response()->json(["type"=>"error", "message"=>"Mobile number verification failed"]);
        }
    }





}
