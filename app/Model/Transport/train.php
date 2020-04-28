<?php

namespace App\Model\Transport;

use Illuminate\Database\Eloquent\Model;

class train extends Model
{
	protected $fillable = ['code','name'];
    public function bookedtrains()
    {
    	return $this->hasMany('App\Model\Reservation\Bookedtrain');
    }
}
