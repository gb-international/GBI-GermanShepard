<?php

namespace App\Model\Tour;

use Illuminate\Database\Eloquent\Model;

class Bankdetail extends Model
{
    protected $fillable = ['user_id','name','bank_name','account_number','account_type','ifsc_code'];
}
