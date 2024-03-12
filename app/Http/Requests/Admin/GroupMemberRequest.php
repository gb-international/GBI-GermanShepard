<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Contracts\Validation\Rule;
use App\Rules\EmailValidate;
use App\Rules\PhoneNubmerValidate;
use App\Rules\AlphaSpace;

class GroupMemberRequest extends FormRequest
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
        $tour_type = request()->route('tour_type')??'';
        // 'edu_institute_id' => $tour_type == 'school' ? 'required|exists:edu_institutes,id' : '',
        // 'family_user_id' => $tour_type == 'family' ? 'required|exists:family_users,id' : '',
        // 'company_user_id' => $tour_type == 'company' ? 'required|exists:company_users,id' : '',

        return [
            'user_type' => 'required|in:teacher,student,corporate,family',
            // 'tour_type'=>'required|in:school,family,corporate',
            'tour_id'=>'required|exists:tours,tour_id',
            'school_id' => $tour_type == 'school' ?['required','exists:schools,id']:'',
            'family_user_id' => $tour_type == 'family' ?['required','exists:family_users,id']:'',
            'company_id' => $tour_type == 'company' ?['required','exists:companies,id']:'',
            'details' => 'required|array',
            "details.*.first_name" => ['required',new AlphaSpace],
            "details.*.last_name" => ['required',new AlphaSpace],
            "details.*.email" => ['required','email',new EmailValidate],
            "details.*.gender" => "required|in:M,F",
            "details.*.age" => "required|numeric",
            "details.*.mobile" => ['required','numeric',new PhoneNubmerValidate],
            "details.*.is_paid"=> "required|in:1,0",
            "details.*.payment_status"=> "required|in:pending,success",
        ];
    }
    protected function failedValidation(Validator $validator) : void
    {
        throw new HttpResponseException(response()->json(['message' => "The given data was invalid.", 'errors' =>$validator->errors()]));
    }
}