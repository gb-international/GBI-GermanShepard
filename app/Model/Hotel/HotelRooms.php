<?php

namespace App\Model\Hotel;

use Illuminate\Database\Eloquent\Model;

class HotelRooms extends Model
{
    protected $guarded = [];

    protected $table = "hotel-rooms";

    public function getImageAttribute($image)
    {
        if($image){
            return \Storage::disk('s3')->url(config('gbi.hotel_image').$image);
        }else{
            return '';
        }
    }

    public function hotel(){
        return $this->belongsTo('App\Model\Hotel\HotelNew');
    }

    public function category(){
        return $this->hasMany('App\Model\Hotel\RoomCategory');
    }

    public function amenities(){
        return $this->hasMany('App\Model\Hotel\Amenities');
    }
}
