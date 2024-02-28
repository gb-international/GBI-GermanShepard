<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Carbon\Carbon;
use App\PasswordReset;
use Validator;

class PasswordResetController extends Controller
{
          /**
       * Write code on Method
       *
       * @return response()
       */
    public function submitForgetPasswordForm($guard_name, Request $request)
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
            
            return response()->json(['success'=>'Please check your mail', "data"=>$data]);
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }

    } 
}
