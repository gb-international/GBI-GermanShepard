<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Carbon\Carbon;
use App\User;
use App\Model\RoleAndPermission\Permission;
use App\Model\RoleAndPermission\UserRole;
use App\Model\RoleAndPermission\Department;
use App\Model\RoleAndPermission\Roles;

class MemberResource extends JsonResource
{

    public function toArray($request)
    {   
        
        $department_id = 'N/A';
        $role_id = 'N/A';
        $role_name = 'N/A';
        $department_name = 'N/A';
        $parent_name = 'N/A';

        if($this->user_role_id){
            $userRole = UserRole::find($this->user_role_id);
            $department = Department::find($userRole->department_id);
            $role = Roles::find($userRole->role_id);
            $department_id = $userRole->department_id;
            $role_id = $userRole->role_id;
            $role_name = $role->name;
            $department_name = $department->name;
        }
        if($this->parent_user){
            $parent = User::find($this->parent_user);
            $parent_name = $parent->name;
        }
        
        return [
            'id' => $this->id,
            'name' => $this->name,
            'dob' => $this->information->dob,
            'email' => $this->email,
            'department' => $department_id,
            'department_name' => $department_name,
            'address' => $this->information->address,
            'phone_no' => $this->information->phone_no,
            'role' => $role_id,
            'user_role_id' => $this->user_role_id,
            'role_name' => $role_name,
            'parent_user' => $this->parent_user,
            'parent_name' => $parent_name,
            'created_at' => date('d-m-Y', strtotime($this->created_at)),
            'updated_at' => date('d-m-Y', strtotime($this->updated_at)),
        ];
    }
}
