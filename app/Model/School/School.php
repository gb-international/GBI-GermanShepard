<?php
 /* 
Edited by : Rahul Rawat created edu_institute function
Purpose :  modify incharge function
*/

namespace App\Model\School;

use Illuminate\Database\Eloquent\Model;
// use Illuminate\Database\Eloquent\SoftDeletes;
class School extends Model
{
	// use SoftDeletes;
    protected $fillable = [
        'id', 'surname', 'school_name', 'street', 'city_name','state_name','country_name','pincode','finance_email_id','principal_email_id','mobile','address','principal_name','principal_mobile_number','user_id', 'edu_institute_id'
    ];

    public function setFinanceEmailIdEmailAttribute($value){
        return $this->attributes['finance_email_id'] = strtolower($value);
    }
    
    public function setPrincipalEmailIdEmailAttribute($value){
        return $this->attributes['principal_email_id'] = strtolower($value);
    }


    public function students()
    {
    	return $this->hasMany('App\Model\School\Student');
    }
    public function tours()
    {
    	return $this->hasMany('App\Model\Tour\Tour');
    }
    public function informations(){
        return $this->hasMany('App\Model\User\Information');
    }

    // public function incharge(){
    //     return $this->hasOne('App\User','id','user_id');
    // }

    public function incharge()
    {
        return $this->belongsTo('App\Model\School\EducationInstitute','edu_institute_id', 'id');
    }
    
    public function education_institute(){
        return $this->hasOne('App\Model\School\EducationInstitute');
    }
}
