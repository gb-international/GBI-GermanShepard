<?php

namespace App\Model\Tour;

use Illuminate\Database\Eloquent\Model;

class FrontbookingSightseeing extends Model
{
    protected $fillable = ['frontbooing_id','sightseeing_id'];

    public function frontbooking(){
        return $this->belongsTo('App\Model\Tour\Frontbooking');
    }
}
