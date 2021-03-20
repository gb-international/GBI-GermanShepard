<?php

/* 
Created by : Ajay yadav 
Purpose : Manage Gbi member 

*/

namespace App\Http\Controllers\Admin\GbiMember;
use App\Http\Controllers\Controller; 
use App\User;
use App\Model\User\Information;
use Validator;
use Spatie\Permission\Traits\HasRoles;
use Spatie\Permission\Models\Permission;
use Illuminate\Http\Request;

use App\Rules\EmailValidate;
use App\Rules\AlphaSpace;
use App\Rules\PhoneNubmerValidate;
class GBIMemberController extends Controller
{

    public function all($size)
    {
        return response()->json(User::select([
            'id','name','email','updated_at'
            ])
            ->where('user_role','1')
            ->with(['UserRole:role_id,model_id','UserRole.role:id,name'])
            ->latest('updated_at')
            ->paginate($size));
    }

	public function index()
	{
		return User::where('user_role','1')->get();
	}

    public function register(Request $request){ 

        $this->validate($request, [ 
            'name' => ['required',new AlphaSpace],
            'address' => 'required|min:3',
            'email' => ['required','email',new EmailValidate],
            'phone_no' => ['required','numeric',new PhoneNubmerValidate],
            'password' => 'required', 
            'c_password' => 'required|same:password', 
            'role_name' => 'required',
            'department_id' => 'required',
        ]);

        // if ($validator->fails()) { 
        //     return response()->json(['error'=>$validator->errors()], 401);            
        // }

        $input = $request->all(); 
        $input['password'] = bcrypt($input['password']); 
        $user = User::create($input);

        $user->user_role = '1';
        $user->department_id = $request->department_id;
        $user->user_type = $request->role_name;

        $user->save();

        $user->assignRole($request->role_name);

        // Add more information to the informations table
        
        $more  = new Information();
        $more->user_id = $user->id;
        $more->phone_no = $request->phone_no;
        $more->dob = $request->dob;
        $more->address = $request->address;
        $more->varified = '1';
        $more->photo = 'user.png';
        $more->gender = '';
        $more->save();
        // End more information 
        return response()->json('Successfully Registered !!!');

    }

    public function destroy($id){
        $user = User::where('id',$id)->first();
        $user->delete();
        return response()->json('successfully deleted');
    }

    // Sales man list
    
    public function memberType($type = 'salesman')
    {
        return User::select('id','name','email')->where('user_type',$type)->get();
    }
}
