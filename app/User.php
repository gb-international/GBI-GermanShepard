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
        'name', 'email', 'user_role', 'password','department_id','parent_role_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function setEmailAttribute($value){
        return $this->attributes['email'] = strtolower($value);
    }

    
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
    // now we can delete usertravel because 'bookedusers' is working now
    public function UserTravel(){
        return $this->hasMany('App\Model\Tour\TourUser','user_id')->orderBy('created_at','DESC');
    }

    public function bookedusers(){
        return $this->hasMany('App\Model\Reservation\Bookeduser','user_id')->orderBy('created_at','DESC');
    }
    public function frontbooking()
	{
		return $this->hasMany('App\Model\Tour\Frontbooking');
    }
    
    
    public function AauthAccessToken(){
        return $this->hasMany('App\Model\User\OauthAccessToken');
    }
    
    public function subscribe(){
        return $this->hasOne('App\Model\User\Subscriber');
    }

    public function UserRole(){
        return $this->hasOne('App\Model\RoleAndPermission\RoleUser','model_id','id');
    }

    public function scopeIncharge($query)
    {
        return $query->where('is_incharge', 1);
    }

    public function department(){
        return $this->hasOne('App\Model\User\Department');
    }

    /**
     * Map with roles table through one  to one relation
     * 
     */
    public function role(){
        return $this->belongsTo('App\Model\RoleAndPermission\Roles','user_role','id');
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

    //-------------------------------------------------------------------------

    public function getUserAllPermissionsAttribute() {
        $permissions = [];
        foreach (Permission::all() as $permission) {
            if (Auth::user()->can($permission->name)) {
                $permissions[] = $permission->name;
            }
        }
        //Assign child role permission
        $childRoles = $this->distinct()->select('user_role')
                         ->where('parent_role_id',(Auth::user()->user_role))
                         ->get();
        foreach($childRoles as $role){
            if(isset($role->permissions)){
                foreach($role->permissions as $permission){
                    if(!in_array($permission->name, $permissions)){
                       $permissions[] = $permission->name;
                    }
                }
            }
        }
        return $permissions;
    }
}
