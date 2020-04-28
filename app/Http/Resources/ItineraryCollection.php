<?php

      /************************************************
      Template Type: Collection Resource for the Itinerary
      Author:@Ajay

      ****************************************************/

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class ItineraryCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
      return parent::toArray($request);
      // return  [
      //       'id' => 'd',
      //       'source' => $request->source,
      //       'destination' => $request->destination
      //   ];
    }
}
