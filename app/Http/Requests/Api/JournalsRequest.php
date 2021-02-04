<?php

namespace App\Http\Requests\Api;

use Illuminate\Foundation\Http\FormRequest;

class JournalsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        //TODO add creator_id to request
        return [
//            'name' => ['required', 'string', 'max:255', 'unique:programs'],
//            'program_id' => ['required', 'integer'],
            'chip' => ['required', 'string', 'max:255'],
            'remark' => ['required', 'string', 'max:255'],
//            'creator_id' => [],
//            'fixer_id' => []
        ];
    }
}