<?php

namespace App\Model\Tour;

use Illuminate\Database\Eloquent\Model;

class Frontbooking extends Model
{
    protected $fillable = ['user_id','itinerary_id','start_date','end_date','person','room','occupancy_type','noofday','accomodation'];

    public function cities(){
        return $this->hasMany('App\Model\Tour\CityFrontbooking');
    }
}
