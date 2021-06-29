<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Model\RoleAndPermission\Roles as Role;
use DB;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    //-------------------------------------------------------------------------

    // public function login(Request $request)
    // {
    //        //  $user  = User::where([['email','=',request('email')],['name','=','GBI Admin']])->first();
    //        //  if( $user){
    //        //      Auth::login($user);
    //        //      dd('hey');
    //        //      //User::where('email','=',$request->email)->update(['otp' => null]);
    //        //      //return view('home');
    //        //  }
    //        // dd('hyy');
    // }


    //-------------------------------------------------------------------------

    /**
     * The user has been authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  mixed  $user
     * @return mixed
     */
    protected function authenticated(Request $request, $user)
    {  
        $roles = ['student','teacher','corporate incharge','corporate employee'];
        $roleIds = Role::whereIn(DB::raw("LOWER(name)"),$roles)->pluck('id');
        $roleIdsArr = (count($roleIds) > 0) ? $roleIds->toArray() : [];
        if(in_array($user->user_role, $roleIdsArr)){
            $request->session()->invalidate();

            return redirect()->route('login');
        }
    }
}
