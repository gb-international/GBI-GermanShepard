<?php

namespace App\Model\User;

use Illuminate\Database\Eloquent\Model;

class Subscriber extends Model
{
    protected $fillable = ['email', 'user_id','status', 'promotion', 'posts', 'travel', 'website'];

    public function user(){
        return $this->belongsTo('App\User');
    }

    public function notification(){
        return $this->hasMany('App\Model\User\Notification');
    }

    public function setEmailAttribute($value){
        return $this->attributes['email'] = strtolower($value);
    }

}
