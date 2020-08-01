<?php

      /************************************************
      Template Type: Collection Resource for the Itinerary
      Author:@Ajay

      ****************************************************/

namespace App\Http\Resources\Admin;

use Illuminate\Http\Resources\Json\JsonResource;

class ItineraryCollection extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
      // return parent::toArray($request);
      return  [
            'id' => $this->id,
            'title'=>$this->title,
            'source' => $this->source,
            'destination' => $this->destination,
            'noofdays' => $this->noofdays,
            'tourtype' => $this->tourtype
        ];
    }
}
