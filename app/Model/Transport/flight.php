<?php

namespace App\Model\Transport;

use Illuminate\Database\Eloquent\Model;

class flight extends Model
{
	protected $fillable = ['code','name'];
    public function bookedflights()
    {
    	return $this->hasMany('App\Model\Reservation\Bookedflight');
    }
}
