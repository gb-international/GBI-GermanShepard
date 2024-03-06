<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Contracts\Validation\Rule;
use Illuminate\Validation\Rule as RuleValid; //import Rule class 
class TourRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
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
        $tour_id = $this->tour->id??0;
        return [
            'customer_type' => 'required',
            'school_id' => 'required_if:customer_type,school|required_if:exists:schools,id',
            'company_id' => 'required_if:customer_type,corporate|required_if:exists:companies,id',
            'itinerary_id' => 'required|exists:itineraries,id',
            'tour_id' => ['required',RuleValid::unique('tours')->ignore($tour_id)],
            'travel_code' => 'required',
            'tour_start_date' => 'required|date|after:today',
            'tour_end_date' => 'required|date|after_or_equal:tour_start_date',
            'tour_price' => 'required|numeric',          
        ];
    }
    protected function failedValidation(Validator $validator) : void
    {
        throw new HttpResponseException(response()->json(['message' => "The given data was invalid.", 'errors' =>$validator->errors()]));
    }
}
