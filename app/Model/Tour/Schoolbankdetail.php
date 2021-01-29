<?php

namespace App\Model\Tour;

use Illuminate\Database\Eloquent\Model;

class Schoolbankdetail extends Model
{
    protected $fillable = ['user_id','school_id','tour_code','name','bank_name','account_number','account_type','ifsc_code'];
}
