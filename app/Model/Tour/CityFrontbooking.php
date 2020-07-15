<?php

namespace App\Model\Tour;

use Illuminate\Database\Eloquent\Model;

class CityFrontbooking extends Model
{
    protected $fillable = ['frontbooing_id','city_id'];

    public function frontbooking(){
        return $this->belongsTo('App\Model\Tour\Frontbooking');
    }
}
