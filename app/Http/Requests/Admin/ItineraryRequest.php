<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Contracts\Validation\Rule;

class ItineraryRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
      *
     * @return array
     */
    public function rules()
    {
        return [
            'traveller_policy_id' => 'required|exists:traveller_policys,id',
            'source' => 'required|min:2|max:100',
            'destination' => 'required|different:source|min:3|max:100',
            'noofdays' => 'required|numeric|min:1|max:15',
            'title' => 'required|min:3|max:50',
            'description' => 'required|min:3',
            'tourtype' => 'required',
            'food' => 'required|numeric|between:0,1',
            'hotel_type'=>'required',
            // 'bus'=>'required|numeric|between:0,1',
            // 'train'=>'required|numeric|between:0,1',
            // 'flight'=>'required|numeric|between:0,1',
            'no_of_nights'=>'required|numeric|min:0',
            'single_sharing_base_price'=>'required|numeric|min:0',
            'tcs_fee'=>'required|numeric|min:0',
            'gst_fee'=>'required|numeric|min:0',
            'double_sharing_base_price'=>'required|numeric|min:0',
            'triple_sharing_base_price'=>'required|numeric|min:0',
            'quad_sharing_base_price'=>'required|numeric|min:0',
            'child_with_mattress_price'=>'required|numeric|min:0',
            'child_without_mattress_price'=>'required|numeric|min:0',
            'infant_price'=>'required|numeric|min:0',
            'apai_price'=>'required|numeric|min:0',
            'mapai_price'=>'required|numeric|min:0',
            'cpai_price'=>'required|numeric|min:0',
            'ep_price'=>'required|numeric|min:0',
            'client_type'=>'required',
            'meta_title'=>'required',
            'meta_description' => 'required',
            'itinerarydays.*.day' => 'required',
            'itinerarydays.*.day_source' => 'required',
            'itinerarydays.*.day_destination' => 'required|different:day_source',
            'itinerarydays.*.day_description' => 'required',
            // 'itinerarydays.*.sightseeing_id' => 'required|array',
            // 'policy' => 'required',
        ];
    }
    protected function failedValidation(Validator $validator) : void
    {
        throw new HttpResponseException(response()->json(['message' => "The given data was invalid.", 'errors' =>$validator->errors()]));
    }
}
