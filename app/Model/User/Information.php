<?php

namespace App\Model\User;

use Illuminate\Database\Eloquent\Model;


class Information extends Model
{
    protected $table = 'informations';
    protected $fillable = [
        'user_profession',
        'school_id',
        'institution_code',
        'phone_no',
        'dob',
        'address',
        'user_id'
    ];

    public function getPhotoAttribute($image)
    {
        if($image){
            return \Storage::disk('s3')->url(config('gbi.user_image').$image);
        }else{
            return '';
        }
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }
    
    public function school(){
        return $this->belongsTo('App\Model\School\School');
    }
}
