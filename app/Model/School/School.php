<?php

namespace App\Model\School;

use Illuminate\Database\Eloquent\Model;
// use Illuminate\Database\Eloquent\SoftDeletes;
class School extends Model
{
	// use SoftDeletes;
    protected $fillable = [
        'school_name', 'street', 'city_name','state_name','country_name','pincode','finance_email_id','principle_email_id','mobile','address',
    ];

    public function students()
    {
    	return $this->hasMany('App\Model\School\student');
    }
    public function tours()
    {
    	return $this->hasMany('App\Model\Tour\Tour');
    }
    
}
