<?php

namespace App\Model\Post;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    private $fillable = ['name','image','slug','description','meta_title','meta_keyword'];

    public function posts()
    {
        return $this->hasMany('App\Model\Post\Post');
    }
}
