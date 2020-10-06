<?php

namespace App\Model\Post;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
class Post extends Model
{
    private $fillable = ['user_id','title','image','slug','summery','description','meta_title','meta_keyword'];

    public function category()
    {
        return $this->belongsTo('App\Model\Post\Category');
    }

    public function tags()
    {
        return $this->hasMany('App\Model\Post\Tag');
    }
}
