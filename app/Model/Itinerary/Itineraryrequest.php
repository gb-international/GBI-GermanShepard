<?php

namespace App\Model\Itinerary;

use Illuminate\Database\Eloquent\Model;

class Itineraryrequest extends Model
{
    protected $fillable = [
        'id', 'source', 'destination','edu_institute_id', 'company_user_id', 'family_user_id', 'itinerary_id','client_type', 'start_date', 'end_date', 'no_of_boys', 'no_of_girls', 'passenger', 'passenger_below_eighteen', 'price', 'occupancy_type','meal_plan', 'no_of_days', 'no_of_rooms', 'accommodation_preference', 'passenger_details', 'mode_of_transport', 'created_at', 'updated_at', 'deleted_at'
    ];
    public function setModeOfTransportAttribute($value)
    {
        $this->attributes['mode_of_transport'] = serialize($value);
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
        return unserialize($value);
    }
    public function cities()
    {
        return $this->belongsToMany('App\Model\Location\City')->select(["id", "country_id", "state_id", "name"]);
    }
    public function education_institude(){
        return $this->belongsTo('App\Model\School\EducationInstitute','edu_institute_id','id')->select(['id', 'name', 'email', 'phone_no']);
    }

    public function company_user(){
        return $this->belongsTo('App\CompanyUser','company_user_id','id')->select(['id', 'name', 'email', 'phone_no']);
    }

    public function family_user(){
        return $this->belongsTo('App\FamilyUser','family_user_id','id')->select(['id', 'name', 'email', 'phone_no']);
    }

    public function itinerary()
    {
        return $this->belongsTo('App\Model\Itinerary\Itinerary','itinerary_id','id')->select(['id', 'single_sharing_base_price', 'tcs_fee', 'gst_fee', 'double_sharing_base_price', 'triple_sharing_base_price', 'quad_sharing_base_price', 'child_with_mattress_price', 'child_without_mattress_price', 'infant_price', 'apai_price', 'cpai_price', 'ep_price','mapai_price']);
    }
}



