<?php

namespace App\Model\RoleAndPermission;

use Illuminate\Database\Eloquent\Model;

class RoleCategory extends Model
{
    public $table = 'role_categories';

    protected $fillable = ['name'];
}
