<?php

      /************************************************
      Template Type: Collection Resource for the Hotel
      Author:@Ajay

      ****************************************************/

namespace App\Http\Resources\Admin;

use Illuminate\Http\Resources\Json\JsonResource;

class HotelCollection extends JsonResource
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

        return [
            'id' => $this->id,
            'name' => $this->name,
            'type' => $this->type,
            'city' => $this->city,
            'state' => $this->state,
            'phoneno' => $this->phoneno
        ];
    }
}
