<?php

namespace App\Model\Hotel;

use Illuminate\Database\Eloquent\Model;

class BanquetCategory extends Model
{
    protected $guarded = [];

    protected $table = "banquet-categories";


    public function hotel(){
        return $this->hasMany('App\Model\Hotel\HotelNew');
    }

}
