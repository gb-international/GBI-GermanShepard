<?php

namespace App\Model\Sales;

use Illuminate\Database\Eloquent\Model;

class Salesdp extends Model
{
    protected $fillable = [
        'name',
        'phoneno',
        'email',
        'salary',
        'address',
        'position',
        'location',
        'status',
    ];

    public function setEmailAttribute($value){
        return $this->attributes['email'] = strtolower($value);
    }
}
