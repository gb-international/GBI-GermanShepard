<?php
/* 
Created by : Ajay yadav 
Purpose : Manage Contact 

*/
namespace App\Http\Controllers\Front;
use App\Http\Controllers\Controller; 
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\mail\sendMail;
use Mail;

class ContactMassageController extends Controller
{
    public function contact()
    {
      return view('front.contact-us');
    }
    public function store(Request $request)
    {
    	$this->validate($request, [
    		'name' => 'required',
    		'email' => 'required|email',
    		'mobile' => 'required|numeric|min:10',
    		'messagecon' => 'required',

    	]);
    	$data = array(
    			'email'=>$request->email,
    			'name'=>$request->name,
    			'mobile'=>$request->mobile,
    			'messagecon'=>$request->messagecon
    			);

    		//Mail::send('email.contactmail', $data, function($message) use ($data){
    		//	$message->from($data['email']);
    		//	$message->to('jyoti_shaw@gbinternational.in');
    		//	$message->subject($data['name']);

    		//});
    	Mail::to($data['email'])->send( new SendMail($data['messagecon'], $data['mobile'], $data['name'], $data['email']));
    
    }
}
