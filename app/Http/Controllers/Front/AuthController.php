<?php
namespace App\Http\Controllers\Front;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller; 
use App\User;
use App\Otp;
use App\Model\User\Information;
use App\Model\Tour\TourUser;
use App\Model\Tour\Tour;
use App\Model\School\School;
use Illuminate\Support\Facades\Auth;
use Validator;
use App\Model\School\EducationInstitute as EduInstitute;
use App\CompanyUser;
use App\FamilyUser;
use DB;
use Image;
use GuzzleHttp\Client;
use App\Rules\MatchOldPassword;
use Illuminate\Support\Facades\Hash;
use App\Helpers\SendSms;
use App\Jobs\ChangePasswordJob;
use App\Rules\EmailValidate;
use App\Model\User\Subscriber;
use App\Model\Notification\Notifier;
use App\Rules\PhoneNubmerValidate;

class AuthController extends Controller{
    public function login(Request $request){ 
        $validator = Validator::make($request->all(), [ 
            'phone_no' => ['required','numeric',new PhoneNubmerValidate],
            'login_type'=>'required|in:user,school,company,family'
        ]);
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 422);            
        }
        $userinfo;
        if($request->login_type == "user"){
            $userinfo = User::where('phone_no', $request->phone_no)->first();
            if (!$userinfo) {
                return response()->json([
                    'message' => 'Invalid phone number',
                    'status' => 422
                ], 422);
            }
        }
        else if($request->login_type == "school"){
            $userinfo = EduInstitute::where('phone_no', $request->phone_no)->first();
            if (!$userinfo) {
                return response()->json([
                    'message' => 'Invalid phone number',
                    'status' => 422
                ], 422);
            }
        }
        else if($request->login_type == "company"){
            // Check if a user with the specified number exists
            $userinfo = CompanyUser::where('phone_no', $request->phone_no)->first();
            if (!$userinfo) {
                return response()->json([
                    'message' => 'Invalid phone number',
                    'status' => 422
                ], 422);
            }
        }
        else if($request->login_type == "family"){
            // Check if a user with the specified number exists
            $userinfo = FamilyUser::where('phone_no', $request->phone_no)->first();
            if (!$userinfo) {
                return response()->json([
                    'message' => 'Invalid phone number',
                    'status' => 422
                ], 422);
            }
        }


        // Check if otp is valid
        $otpVerify = Otp::where('otp_send', $request->otp)->where('phone_no', $request->phone_no)->first();
        if (!$otpVerify) {
            return response()->json([
                'message' => 'Invalid OTP',
                'status' => 422
            ], 422);
        }

        
        // If a user with the email was found - check if the specified password
        
       /* if (!Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => 'Wrong email or password',
                'status' => 422
            ], 422);
        } 

        // If a user with the email was found after otp validation then login user

        if ($request->phone_no != $user->information->phone_no) {
            return response()->json([
                'message' => 'Wrong email or phone number',
                'status' => 422
            ], 422);
        } */
        
        
        $client = DB::table('oauth_clients')
        ->where(['password_client'=> true, 'provider'=>$request->login_type])
        ->first();
        // return $client;
        // Make sure a Password Client exists in the DB
        if (!$client) {
            return response()->json([
                'message' => 'Laravel Passport is not setup properly.',
                'status' => 500
            ], 500);
        }

        $data = [
            'grant_type' => 'password',
            'client_id' => $client->id,
            'client_secret' => $client->secret,
            'username' => $userinfo->email,
            'password' => $userinfo->password,
            'scope' => $request->login_type,
            'provider' => $request->login_type,
        ];
        $request = Request::create('/oauth/token', 'POST', $data);
    
        $response = app()->handle($request);
        // Check if the request was successful
        if ($response->getStatusCode() != 200) {
            return response()->json([
                'message' => 'Wrong details, please try again',
                //'response' => $response,
                'status' => 422
            ], 422);
        } 

        $data = json_decode($response->getContent());

        // Format the final response in a desirable format
        return response()->json([
            "token_type" => $data->token_type,
            "expires_in" => $data->expires_in,
            'token' => $data->access_token,
            'refresh_token' => $data->refresh_token,
            'status' => 200
        ], 200);

        // $sub_id = null;
        // $sub = Subscriber::where('user_id', $user->id)->first();
        // if($sub){
        //     $sub_id = $sub->id;
        // }
    }
    /** 
     * Register api 
     * 
     * @return \Illuminate\Http\Response 
     */ 
    public function register(Request $request) 
    { 
        if($request->email != 'csrikhi@gbinternational.in'){
            $validator = Validator::make($request->all(), [ 
                'name' => 'required', 
                'email' => ['required','email',new EmailValidate],
                'password' => 'required', 
                'c_password' => 'required|same:password', 
            ]);
        } else {
            $validator = Validator::make($request->all(), [ 
                'name' => 'required', 
                'password' => 'required', 
                'c_password' => 'required|same:password', 
            ]);
        }
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }
        $input = $request->all(); 
        $input['password'] = bcrypt($input['password']); 
        $user = User::create($input);

        // Add more information to the informations table
        $more  = new Information();
        $more->user_id = $user->id;
        $more->gbi_link = $request->gbi_link;
        $more->phone_no = $request->phone_no;
        $more->otp = $request->otp;
        $more->varified = '1';
        $more->photo = 'user.png';
        $more->gender = '';
        $more->save();
        $sendsms = new SendSms; // send welcome sms
        $sendsms->signUpSMS($request->phone_no,$user);
        return response()->json('Successfully Registered !!!');
    }

    public function logout(Request $request){

        $accessToken = auth()->user()->token();
        Auth::user()->tokens->each(function($token,$key){
            $token->delete();
        });

        $refreshToken = DB::table('oauth_refresh_tokens')
            ->where('access_token_id', $accessToken->id)
            ->update([
                'revoked' => true
            ]);

        $accessToken->revoke();

        return response()->json('Logged out successfully');
    }

    public function refresh(Request $request){

        $client = DB::table('oauth_clients')
                    ->where('password_client',true)
                    ->first();
        $data = [
            'grant_type' => 'refresh_token',
            'refresh_token' => $request->refresh_token,
            'client_id' => $client->id,
            'client_secret' =>  $client->secret,
            'scope' => '',
        ];

        $request = Request::create('/oauth/token', 'POST', $data);
        $response = app()->handle($request);

        // Check if the request was successful
        if ($response->getStatusCode() != 200) {
            return response()->json([
                'message' => 'Try again',
                'status' => 422
            ], 422);
        }

        // Get the data from the response
        $data = json_decode($response->getContent());
        
        return response()->json([
            'token' => $data->access_token,
            'refresh_token' => $data->refresh_token,
            'user' => '',
            'status' => 200
        ]);
    }
}
