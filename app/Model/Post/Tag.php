<?php

namespace App\Model\Post;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    private $fillable = ['name'];

    public function posts()
    {
        return $this->hasMany('App\Model\Post\Post');
    }
}
