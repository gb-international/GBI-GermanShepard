<?php

namespace App\Model\Tour;

use Illuminate\Database\Eloquent\Model;

class TourUser extends Model
{
    protected $table = 'tour_user';
    protected $fillable = ['user_id','travel_code'];

}
