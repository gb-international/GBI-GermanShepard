<?php

namespace App\Model\RoleAndPermission;

use Illuminate\Database\Eloquent\Model;
use Spatie\Permission\Models\Role;

class Roles extends Role
{
    public $table = 'roles';
    
    //-------------------------------------------------------------------------

    public function roleCategory(){
        return $this->belongsTo('App\Model\RoleAndPermission\RoleCategory','role_category_id','id');
    }
}
