<?php

namespace App\Model\Hotel;

use Illuminate\Database\Eloquent\Model;

class Hotel extends Model
{
    protected $fillable = ['type','name','state','city','address','phoneno','email','room','apai_single','apai_double','apai_triple','apai_squad','mapai_single','mapai_double','mapai_triple','mapai_squad','cpai_single','cpai_double','cpai_triple','cpai_squad','status','image','alt'];

    public function getImageAttribute($image)
    {
        if($image){
            return \Storage::disk('s3')->url(config('gbi.hotel_image').$image);
        }else{
            return '';
        }
    }

    public function setEmailAttribute($value){
        return $this->attributes['email'] = strtolower($value);
    }

    public function bookedhotels()
    {
    	return $this->hasMany('App\Model\Reservation\Bookedhotel');
    }
}
