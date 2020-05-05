<?php
/* 
Created by : Ajay yadav 
Purpose : Manage school 

*/
namespace App\Http\Controllers\Admin\School;
use App\Http\Resources\SchoolCollection;
use App\Model\School\School;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SchoolController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new SchoolCollection(School::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        school::create($this->validateSchool($request));
        return response()->json(['Message'=> 'Successfully Added...']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\School  $school
     * @return \Illuminate\Http\Response
     */
    public function show(School $school)
    {
        return response()->json($school);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\School  $school
     * @return \Illuminate\Http\Response
     */
    public function edit(School $school)
    {
        return response()->json($school);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\School  $school
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, School $school)
    {
        $school->update($this->validateSchool($request));
        return response()->json(['message'=>'Successfully Updated']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\School  $school
     * @return \Illuminate\Http\Response
     */
    public function destroy(School $school)
    {
        $school->delete();
        return response()->json('successfully deleted');
    }

    // Validate Escort
    public function validateSchool($request)
    {
      return $this->validate($request, [
            'school_name' => 'required|min:3|max:100',
            'street' => 'required',
            'city_name' => 'required',
            'state_name' => 'required',
            'country_name' => 'required',
            'finance_email_id' => 'required',
            'principle_email_id' => 'required',
            'mobile' => 'required|numeric',
            'pincode' => 'required|numeric|min:1',
            'address' => 'required',
      ]);
    }
}
