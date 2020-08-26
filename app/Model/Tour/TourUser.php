<?php

namespace App\Model\Tour;

use Illuminate\Database\Eloquent\Model;

class TourUser extends Model
{
    protected $table = 'tour_user';
    protected $fillable = ['user_id','travel_code'];

    public function tours(){
        return $this->belongsTo('App\Model\Tour\Tour','travel_code');
    }

    public function user(){
        return $this->belongsTo('App\User');
    }

}
