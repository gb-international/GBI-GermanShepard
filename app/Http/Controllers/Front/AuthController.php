<?php
namespace App\Http\Controllers\Front;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller; 
use App\Otp;
use App\Model\User\Information;
use App\Model\Tour\TourUser;
use App\Model\Tour\Tour;
use App\Model\School\School;
// use Illuminate\Support\Facades\Auth;
use Auth;
use Validator;
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
use App\Model\School\EducationInstitute as EduInstitute;
use App\CompanyUser;
use App\FamilyUser;
use App\Rules\PhoneNubmerValidate;
use App\User;
use App\Http\Controllers\API\BaseController;
use Laravel\Passport\RefreshToken;
use Laravel\Passport\Token;

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
        $sub_id = null;
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
            $sub = Subscriber::where('edu_institute_id', $userinfo->id)->first();
            $userinfo->subscription_id = $sub->id??null;
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
            $sub = Subscriber::where('company_user_id', $userinfo->id)->first();
            $userinfo->subscription_id = $sub->id??null;
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
            $sub = Subscriber::where('family_user_id', $userinfo->id)->first();
            $userinfo->subscription_id = $sub->id??null;
        }
        
        
        // Check if otp is valid
        $otpVerify = Otp::where('otp_send', $request->otp)->where('phone_no', $request->phone_no)->first();
        if (!$otpVerify) {
            return response()->json([
                'message' => 'Invalid OTP',
                'status' => 422
            ], 422);
        }
  
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
            'user' => $userinfo,
            'status' => 200
        ], 200);
    }
    /** 
     * Register api 
     * 
     * @return \Illuminate\Http\Response 
     */ 
    public function register($client_type, Request $request) 
    { 
        $validator = Validator::make($request->all(), [ 
            'client_type' =>  'required|in:family,company,school',
            'name' => 'required',  
            'email' => ['required_if:client_type,school', 'email',new EmailValidate, 'unique:edu_institutes,email'],
            'company_email' => ['required_if:client_type,company', 'email',new EmailValidate, 'unique:company_users,email'],
            'family_email' => ['required_if:client_type,family', 'email',new EmailValidate, 'unique:family_users,email'],
            'password' => 'required', 
            'c_password' => 'required|same:password', 
        ]);
       
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 422);            
        }
        $client = DB::table('oauth_clients')
        ->where(['password_client'=> true, 'provider'=>$request->client_type])
        ->first();
        // return $client;
        // Make sure a Password Client exists in the DB
        if (!$client) {
            return response()->json([
                'message' => 'Laravel Passport is not setup properly.',
                'status' => 500
            ], 500);
        }
        $password = bcrypt($request->password);
        $data = [
            'grant_type' => 'password',
            'client_id' => $client->id,
            'client_secret' => $client->secret,
            'password' => $password,
            'scope' => $request->client_type,
            'provider' => $request->client_type,
        ];
        
        if($request->client_type == "family"){
            $family_user = new FamilyUser();
            $family_user->name = $request->name??null;
            $family_user->email = $request->family_email??null;
            $family_user->password = $password;
            $family_user->varified = '1';
            $family_user->photo = 'user.png';
            $family_user->gender = '';
            $family_user->save();
            $data['username'] = $request->family_email??null;
            // $sendsms = new SendSms; // send welcome sms
            // $sendsms->signUpSMS($request->phone_no, $family_user);
        }
        else if($request->client_type == "school"){
            $eduInstitute = new EduInstitute();
            $eduInstitute->name = $request->name??null;
            $eduInstitute->email = $request->email??null;
            $eduInstitute->password = $password;
            $eduInstitute->varified = '1';
            $eduInstitute->photo = 'user.png';
            $eduInstitute->gender = '';
            $eduInstitute->save();
            $data['username'] = $request->email??null;
            // $sendsms = new SendSms; // send welcome sms
            // $sendsms->signUpSMS($request->phone_no,$eduInstitute);
        }
        else if($request->client_type == "company"){
            $company_user = new CompanyUser();
            $company_user->name = $request->name??null;
            $company_user->email = $request->company_email??null;
            $company_user->password = $password;
            $company_user->varified = '1';
            $company_user->photo = 'user.png';
            $company_user->gender = '';
            $company_user->save();
            $data['username'] = $request->company_email??null;
            // $sendsms = new SendSms; // send welcome sms
            // $sendsms->signUpSMS($request->phone_no,$company_user);
        }
        $guard_name = $request->client_type."-api";
        $request = Request::create('/oauth/token', 'POST', $data);        
        $response = app()->handle($request);
        // Check if the request was successful
        if ($response->getStatusCode() != 200) {
            return response()->json([
                'message' => 'Wrong details, please try again',
                'response' => $response,
                'status' => 422
            ], 422);
        } 
        $data = json_decode($response->getContent());
        // Format the final response in a desirable format
        return response()->json([
            'message' => 'Successfully Registered !!!', 
            "token_type" => $data->token_type,
            "expires_in" => $data->expires_in,
            'token' => $data->access_token,
            'refresh_token' => $data->refresh_token,
            'status' => 200
        ], 200);
    }

    public function logout($guard_name, Request $request){

        try{
            /** 
            *  If you want to log out from all the devices where he's logged in. Then do this instead
            */
             $tokens = Auth::guard($guard_name."-api")->user()->tokens->pluck('id');
             Token::whereIn('id', $tokens)->update(['revoked'=> true]);
              RefreshToken::whereIn('access_token_id', $tokens)->update(['revoked' => true]);
            /** 
             * This will log the user out from the current device where he requested to log out.
            */
            // $user = Auth::guard($guard_name."-api")->user()->token();
            // $user->revoke();
            return response()->json('Logged out successfully');
        } 
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);      
        }
    }

    public function refresh($guard_name, Request $request){
        $client = DB::table('oauth_clients')
            ->where(['password_client'=> true, 'provider'=>$guard_name])
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
            'grant_type' => 'refresh_token',
            'refresh_token' => $request->refresh_token,
            'client_id' => $client->id,
            'client_secret' => $client->secret,
            'scope' => $guard_name,
            'provider' => $guard_name,
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
            "token_type" => $data->token_type,
            "expires_in" => $data->expires_in,
            'token' => $data->access_token,
            'refresh_token' => $data->refresh_token,
            'status' => 200
        ]);
    }
}
