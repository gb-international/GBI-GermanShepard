<?php

namespace App\Model\User;

use Illuminate\Database\Eloquent\Model;

class Subscriber extends Model
{
    protected $fillable = ['email','user_id','status'];

    public function user(){
        return $this->belongsTo('App\User');
    }

    public function setEmailAttribute($value){
        return $this->attributes['email'] = strtolower($value);
    }

    
}
