<?php

namespace App\Model\Reservation;

use Illuminate\Database\Eloquent\Model;

class Bookedrestaurant extends Model
{
    protected $fillable = ['tour_id','tour_code','restaurant_id','check_in','check_out','price'];
    public function tour()
    {
    	return $this->belongsTo('App\Model\Tour\Tour');
    }

    public function restaurant()
    {
    	return $this->belongsTo('App\Model\Restaurant\Restaurant');
    }
}
