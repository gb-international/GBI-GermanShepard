<?php

namespace App\Model\Post;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
class Post extends Model
{
    protected $fillable = ['title','image','slug','summery','description','meta_title','meta_keyword','status'];

    public function categories()
    {
        return $this->belongsToMany('App\Model\Post\Category');
    }

    public function tags()
    {
        return $this->belongsToMany('App\Model\Post\Tag');
    }

    public function setTitleAttribute($value)
    {
        $this->attributes['title'] = $value;
        $this->attributes['slug'] = Str::slug($value,'-');
    }
}
