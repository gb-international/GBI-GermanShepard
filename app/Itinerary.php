<?php

      /************************************************
      Template Type: Itinerary Model
      Author:@Ajay

      ****************************************************/

namespace App;

use Illuminate\Database\Eloquent\Model;

class Itinerary extends Model
{
    public  function user(){
      return $this->belongsTo(User::class);
  }

  
}
