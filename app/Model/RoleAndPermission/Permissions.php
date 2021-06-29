<?php

namespace App\Model\RoleAndPermission;

use Illuminate\Database\Eloquent\Model;
use Spatie\Permission\Models\Permission;

class Permissions extends Permission
{
    public $table = 'permissions';

    protected $fillable = array('name','controller','method','key');
}
