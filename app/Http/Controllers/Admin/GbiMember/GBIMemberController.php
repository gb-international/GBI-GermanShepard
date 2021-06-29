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
use Illuminate\Validation\Rule;
use App\Jobs\GbiNewMemberWelcomeMailJob;
use App\Model\RoleAndPermission\Roles as Role;

class GBIMemberController extends Controller
{

    public function all($size)
    {
        return response()->json(User::select([
            'id','name','email','updated_at','user_role'
            ])
            ->where('user_role','1')
            ->with(['UserRole:role_id,model_id','UserRole.role:id,name','role:id,name,role_category_id','role.roleCategory:id,name'])
            ->latest('updated_at')
            ->paginate($size));
    }

    public function index()
    {
        return User::whereHas('role', function($query){$query->where('user_role',1);})->get();
    }

    public function register(Request $request){ 
        $this->validate($request, [ 
            'name' => ['required',new AlphaSpace],
            'address' => 'required|min:3',
            'email' => ['required','email',new EmailValidate],
            'phone_no' => ['required','numeric',new PhoneNubmerValidate],
            'password' => 'required', 
            'c_password' => 'required|same:password', 
            //'role_name' => 'required',
            'role_id' => 'required',
            'parent_role_id' => 'sometimes',
            'department_id' => 'required',
        ]);

        // if ($validator->fails()) { 
        //     return response()->json(['error'=>$validator->errors()], 401);            
        // }
        $role_name = Role::where('id',$request->role_id)->value('name');
        $input = $request->all(); 
        $input['password'] = bcrypt($input['password']); 
        $user = User::create($input);

        $user->user_role = $request->role_id;
        $user->parent_role_id = isset($request->parent_role_id) ? $request->parent_role_id : 0;
        $user->department_id = $request->department_id;
        $user->user_type = $role_name;

        $user->save();

        $user->assignRole($role_name);

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
        // send mail 
        $data = ['name'=>$user->name,'email'=>$user->email ];
            
       // GbiNewMemberWelcomeMailJob::dispatch($data);
        // End more information 
        return response()->json('Successfully Registered !!!');

    }

    public function edit($id){
        $user = User::select(['name','email','id','department_id','parent_role_id'])
            ->with([
                'UserRole:role_id,model_id',
                'UserRole.role:id,name',
                'role:id,name,role_category_id',
                'role.roleCategory:id,name',
                'information:user_id,phone_no,address,dob',
            ])->where('id',$id)
            ->first();
        return response()->json($user);
    }

   public function update(Request $request,$id){ 
       $user = User::where('id',$id)->first();
       $role_name = Role::where('id',$request->role_id)->value('name');
       $this->validate($request, [ 
            'name' => ['required',new AlphaSpace],
            'address' => 'required|min:3',
            'email' => [
                'required','email',new EmailValidate,
                Rule::unique('users')->ignore($user->id)
            ],
            'phone_no' => ['required','numeric',new PhoneNubmerValidate],
            'role_name' => 'required',
            'department_id' => 'required',
            'dob'=> 'required',
            'role_id'=> 'required',
            'parent_role_id'=> 'sometimes',
            ]);
        
        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'department_id' => $request->department_id,
            'user_role'=>$request->role_id,
            'parent_role_id'=>isset($request->parent_role_id) ? $request->parent_role_id : 0
        ]);

        $info = [
            'user_id' => $user->id,
            'phone_no' => $request->phone_no,
            'address' => $request->address,
            'dob' => $request->dob
        ];
        if($user->information){
            $user->information->update($info);
        }else{
            Information::create($info);
        }

        //if($request->old_role != $request->role_name){
        if($request->old_role != $role_name){
            if($request->old_role != ''){
                $user->removeRole($request->old_role);
            }
            $user->assignRole($role_name);
        }

        return $user;
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
