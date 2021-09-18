<?php

namespace App\Model\Hotel;

use Illuminate\Database\Eloquent\Model;

class Amenities extends Model
{
    protected $guarded = [];

    protected $table = "amenities";


    public function hotel(){
        return $this->hasMany('App\Model\Hotel\HotelNew');
    }

    public function rooms(){
        return $this->hasMany('App\Model\Hotel\HotelNew');
    }

}
