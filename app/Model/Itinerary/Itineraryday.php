<?php

namespace App\Model\Itinerary;

use Illuminate\Database\Eloquent\Model;

class Itineraryday extends Model
{
	protected $fillable = ['itinerary_id','day','day_source','day_destination','day_description', 'source_latitude', 'source_longitude', 'destination_latitude', 'destination_longitude'];

	public function itinerary()
    {
        return $this->belongsTo('App\Model\Itinerary\Itinerary');
    }
}
