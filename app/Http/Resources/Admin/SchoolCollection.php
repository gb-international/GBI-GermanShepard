<?php

namespace App\Http\Resources\Admin;

use Illuminate\Http\Resources\Json\JsonResource;

class SchoolCollection extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'school_name' => $this->school_name,
            'address' => $this->address,
            'mobile' => $this->mobile,
            'principle_email_id' => $this->principle_email_id,
        ];
    }
}
