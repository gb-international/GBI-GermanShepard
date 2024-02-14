<?php

namespace App\Model\Article;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use App\Traits\ImageTrait;

class Category extends Model
{
    protected $fillable = ['title','image','alt','slug','description','meta_title','meta_keyword'];

    public function articles()
    {
        return $this->belongsToMany('App\Model\Article\Article');
    }

    public function getImageAttribute($image)
    {
        if($image){
            return \Storage::disk('s3')->url(config('gbi.category_image').$image);
        }else{
            return '';
        }
    }

    public function setTitleAttribute($value)
    {
        $this->attributes['title'] = $value;
        $this->attributes['slug'] = Str::slug($value,'-');
    }
}