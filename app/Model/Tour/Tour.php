<?php

namespace App\Model\Tour;

use Illuminate\Database\Eloquent\Model;
use App\Model\Itinerary\Itinerary;


class Tour extends Model
{
    protected $fillable = ['id', 'tour_id','travel_code','itinerary_id','school_id', 'company_id', 'customer_type','tour_start_date','tour_end_date','tour_price','status', 'tour_type', 'gst_fee', 'tcs_fee', 'pg_convenience_and_internet_fee', 'meal_plan_price','meal_plan_type', 'room_sharing','no_of_adults'];
    public function itinerary(){
    	return $this->belongsTo(itinerary::class);
    }
    public function school(){
    	return $this->belongsTo('App\Model\School\School');
    }
    public function company(){
        return $this->belongsTo('App\Model\Corporate\Company');
    }
    public function bookedescorts()
    {
    	return $this->hasMany('App\Model\Reservation\Bookedescort');
    }
    public function bookedhotels()
    {
        return $this->hasMany('App\Model\Reservation\Bookedhotel');
    }
    public function bookedrestaurants()
    {
        return $this->hasMany('App\Model\Reservation\Bookedrestaurant');
    }
    public function bookedbuses()
    {
        return $this->hasMany('App\Model\Reservation\Bookedbus');
    }
     public function bookedtrains()
    {
        return $this->hasMany('App\Model\Reservation\Bookedtrain');
    }
    public function bookedflights()
    {
        return $this->hasMany('App\Model\Reservation\Bookedflight');
    }
    public function travel(){
        return $this->belongsTo('App\User','travel_code');
    }
}
