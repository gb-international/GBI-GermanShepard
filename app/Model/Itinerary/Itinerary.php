<?php

namespace App\Model\Itinerary;

use Illuminate\Database\Eloquent\Model;

class Itinerary extends Model
{

    
	// public function itineraryday()
	// {
	// 	return $this->hasOne('App\Itineraryday');
	// }

	public function itinerarydays()
	{
		return $this->hasMany('App\Model\Itinerary\Itineraryday');
	}

	public function tours()
	{
		return $this->hasMany('App\Model\Tour\Tour');
	}
}
