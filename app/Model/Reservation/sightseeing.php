<?php

namespace App\Model\Reservation;

use Illuminate\Database\Eloquent\Model;

class sightseeing extends Model
{
    protected $fillable = ['name','state_id','city_id','address','image','description','adult_price','child_price'];
}
