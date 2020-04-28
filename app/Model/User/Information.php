<?php

namespace App\Model\User;

use Illuminate\Database\Eloquent\Model;


class Information extends Model
{
    protected $table = 'informations';

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
