<?php

namespace App\Model\School;

use Illuminate\Database\Eloquent\Model;

class Groupmember extends Model
{
    protected $fillable = [
        'tour_id','school_id','user_id','first_name', 'last_name', 'email','gender','mobile'
    ];
}
