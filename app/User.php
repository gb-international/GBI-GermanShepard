<?php

namespace App;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use Spatie\Permission\Models\Permission;
use Illuminate\Support\Facades\Auth;


class User extends Authenticatable
{
    use HasApiTokens,Notifiable;
    use HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];
      /**
     * Add a mutator to ensure hashed passwords
     */

    public function information()
    {
        return $this->hasOne('App\Model\User\Information');    
    }

    public function search()
    {
        return $this->hasMany('App\Search');    
    }

    public function encyclopediacomments(){
        return $this->hasMany('App\Model\Encyclopedia\Encyclopediacomment');
    }

    public function getAllPermissionsAttribute() {
      $permissions = [];
        foreach (Permission::all() as $permission) {
          if (Auth::user()->can($permission->name)) {
            $permissions[] = $permission->name;
          }
        }
        return $permissions;
    }
}
