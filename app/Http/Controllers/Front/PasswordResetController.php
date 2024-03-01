<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Carbon\Carbon;
use App\PasswordReset;
use Validator;
use App\Model\School\EducationInstitute as EduInstitute;
use App\CompanyUser;
use App\FamilyUser;
use App\Jobs\SendResetPasswordLink;
use App\Jobs\ChangePasswordJob;
use App\User;

class PasswordResetController extends Controller
{
    /**
       * Write code on Method
       *
       * @return response()
       */
    public function forgetPassword($guard_name, Request $request)
    { 
        try{
            if($guard_name == "user"){
                $validator = Validator::make($request->all(), [ 
                    'email' => 'required|email|exists:users',
                ]);
            }
            else if($guard_name == "company"){
                $validator = Validator::make($request->all(), [ 
                    'email' => 'required|email|exists:company_users',
                ]);
            }
            else if($guard_name == "school"){
                $validator = Validator::make($request->all(), [ 
                    'email' => 'required|email|exists:edu_institutes',
                ]);
            }
            else if($guard_name == "family"){
                $validator = Validator::make($request->all(), [ 
                    'email' => 'required|email|exists:family_users',
                ]);
            }
            if ($validator->fails()) { 
                return response()->json(['error'=>$validator->errors()], 422);            
            }
    
            $token = Str::random(64);
            $data = PasswordReset::create([
                'email' => $request->email, 
                'client_type' => $guard_name, 
                'token' => $token, 
                'created_at' => Carbon::now()
            ]);

            $link = "link_url";
            $data['link'] = $link;
            SendResetPasswordLink::dispatchNow($data);
            return response()->json(['success'=>'Please check your mail']);
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    } 

    /**
     * Write code on Method
     *
     * @return response()
     */
    public function resetPassword($guard_name, Request $request)
    {
        try{
            if($guard_name == "user"){
                $validator = Validator::make($request->all(), [ 
                    'email' => 'required|email|exists:users',
                    'password' => 'required|string|min:6|confirmed',
                    'password_confirmation' => 'required'
                ]);
            }
            else if($guard_name == "company"){
                $validator = Validator::make($request->all(), [ 
                    'email' => 'required|email|exists:company_users',
                    'password' => 'required|string|min:6|confirmed',
                    'password_confirmation' => 'required'
                ]);
            }
            else if($guard_name == "school"){
                $validator = Validator::make($request->all(), [ 
                    'email' => 'required|email|exists:edu_institutes',
                    'password' => 'required|string|min:6|confirmed',
                    'password_confirmation' => 'required'
                ]);
            }
            else if($guard_name == "family"){
                $validator = Validator::make($request->all(), [ 
                    'email' => 'required|email|exists:family_users',
                    'password' => 'required|string|min:6|confirmed',
                    'password_confirmation' => 'required'
                ]);
            }
            if ($validator->fails()) { 
                return response()->json(['error'=>$validator->errors()], 422);            
            }
    
            $updatePassword = PasswordReset::where([
                'email' => $request->email, 
                'token' => $request->token,
                'client_type' => $guard_name])->first();
                
            if(!$updatePassword){
                return response()->json([
                    'message' => 'Invalid token',
                    'status' => 422
                ], 422);

            }
            if($guard_name == "user"){
                $data = User::where('email', $request->email)->first();
            }
            else if($guard_name == "company"){
                $data = CompanyUser::where('email', $request->email)->first();
                
            }
            else if($guard_name == "school"){
                $data = EduInstitute::where('email', $request->email)->first();
            }
            else if($guard_name == "family"){
                $data = FamilyUser::where('email', $request->email)->first();
            }
            $data->update(['password' => bcrypt($request->password)]);
            PasswordReset::where(['email'=> $request->email, 'client_type'=> $guard_name])->delete();
            ChangePasswordJob::dispatchNow($data);
            return response()->json([
                'message' => 'Your password has been changed!',
                'status' => 200
            ], 200);
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }
}
