<?php

namespace App\Model\Gallery;

use Illuminate\Database\Eloquent\Model;

class Gallery extends Model
{
    protected $fillable = ['category','itinerary_id','school_id'];

    public function images(){
        return $this->hasMany('App\Model\Gallery\Galleryimage');
    }
    
    public function itinerary(){
        return $this->belongsTo('App\Model\Itinerary\Itinerary');
    }
    
    public function school(){
        return $this->belongsTo('App\Model\School\School');
    }


}
