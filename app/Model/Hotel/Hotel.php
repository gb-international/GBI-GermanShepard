<?php

namespace App\Model\Hotel;

use Illuminate\Database\Eloquent\Model;

class Hotel extends Model
{
    protected $guarded = [];
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

    public function bookedrooms()
    {
    	return $this->hasMany('App\Model\Hotel\BookedRooms');
    }
}
