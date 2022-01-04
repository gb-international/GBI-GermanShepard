<?php

namespace App\Model\Hotel;

use Illuminate\Database\Eloquent\Model;

class BookedRooms extends Model
{
    protected $guarded = [];

    protected $table = "booked_rooms";

    public function hotel(){
        return $this->belongsTo('App\Model\Hotel\HotelNew');
    }

}