<?php

namespace App\Model\Tour;

use Illuminate\Database\Eloquent\Model;

class Userpayment extends Model
{
    protected $fillable = ['user_id','school_id','tour_code','schoolbankdetail_id','payment_mode','payment_type','ifsc_code','cheque_number','amount','cheque_bank_name','date_of_issue','status','added_by'];

    public function schoolbankdetail(){
        return $this->belongsTo('App\Model\Tour\Schoolbankdetail');
    }
}
