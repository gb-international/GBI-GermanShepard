<?php

namespace App\Model\Reservation;

use Illuminate\Database\Eloquent\Model;

class Tourpayment extends Model
{
    
    public function userpayment(){
        return $this->belongsTo('App\Model\Tour\Userpayment');
    }
}
