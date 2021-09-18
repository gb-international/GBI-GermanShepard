<?php

namespace App\Model\Hotel;

use Illuminate\Database\Eloquent\Model;

class RoomCategory extends Model
{
    protected $guarded = [];

    protected $table = "room-categories";


    public function hotel(){
        return $this->hasMany('App\Model\Hotel\HotelNew');
    }

    public function rooms(){
        return $this->hasMany('App\Model\Hotel\HotelNew');
    }

}
