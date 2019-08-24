<?php

      /************************************************
      Template Type: Location Model
      Author:@Jyoti

      ****************************************************/

namespace App;

use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
     protected $fillable = [
        'fulladdress', 'state', 
    ];
}
