<?php

namespace App\Model\Itinerary;

use Illuminate\Database\Eloquent\Model;

class Itinerary extends Model
{

	public function itinerarydays()
	{
		return $this->hasMany('App\Model\Itinerary\Itineraryday');
	}

	public function tours()
	{
		return $this->hasMany('App\Model\Tour\Tour');
	}

	public function tourtypes(){
    	return $this->belongsToMany('App\Model\Tour\Tourtype');
    }
    public function tourprograms(){
    	return $this->belongsToMany('App\Model\Tour\Tourprogram');
    }
    
}
