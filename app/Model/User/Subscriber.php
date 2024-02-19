<?php

namespace App\Model\User;

use Illuminate\Database\Eloquent\Model;

class Subscriber extends Model
{
    protected $fillable = ['email', 'name', 'client_type', 'user_id', 'edu_institute_id', 'company_user_id', 'family_user_id', 'status', 'promotion_notification', 'posts_notification', 'travel_notification', 'website_notification', 'deleted_at',];

    public function user(){
        return $this->belongsTo('App\User');
    }

    public function edu_institute(){
        return $this->belongsTo('App\Model\School\EducationInstitute');
    }

    public function company_user(){
        return $this->belongsTo('App\CompanyUser');
    }
    
    public function family_user(){
        return $this->belongsTo('App\FamilyUser');
    }

    public function notification(){
        return $this->hasMany('App\Model\User\Notification');
    }

    public function setEmailAttribute($value){
        return $this->attributes['email'] = strtolower($value);
    }

}
