<?php

namespace App\Model\Itinerary;

use Illuminate\Database\Eloquent\Model;

class Itineraryrequest extends Model
{
    protected $fillable = [
        'edu_institute_id', 'company_user_id', 'family_user_id', 'itinerary_id','client_type', 'start_date', 'end_date', 'no_of_boys', 'no_of_girls', 'passenger', 'passenger_below_eighteen', 'price', 'occupancy_type','meal_plan', 'no_of_days', 'no_of_rooms', 'accommodation_preference', 'passenger_details', 'mode_of_transport'
    ];
    public function setModeOfTransportAttribute($value)
    {
        $this->attributes['sightseeing_id'] = serialize($value);
    }

    public function getModeOfTransportAttribute($value)
    {
        return unserialize($value);
    }
    public function setPassengerDetailsAttribute($value)
    {
        $this->attributes['passenger_details'] = serialize($value);
    }
    
    public function getPassengerDetailsAttribute($value)
    {
        $this->attributes['passenger_details'] = serialize($value);
        return unserialize($value);
    }
}
