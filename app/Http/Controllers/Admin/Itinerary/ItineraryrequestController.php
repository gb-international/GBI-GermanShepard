<?php

namespace App\Http\Controllers\Admin\Itinerary;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Itinerary\Itineraryrequest;

class ItineraryrequestController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function all($guard_name, $size)
    {
        return response()->json(Itineraryrequest::where('client_type',$guard_name)->select([
            'id', 'source', 'destination','edu_institute_id', 'company_user_id', 'family_user_id', 'itinerary_id','client_type', 'start_date', 'end_date', 'no_of_boys', 'no_of_girls', 'passenger', 'passenger_below_eighteen', 'price', 'occupancy_type','meal_plan', 'no_of_days', 'no_of_rooms', 'accommodation_preference', 'passenger_details', 'mode_of_transport'
            ])->with('education_institude', 'company_user', 'family_user','itinerary','cities')->latest('created_at')->paginate($size));
    }
    public function index()
    {
        //
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($guard_name, $id)
    {
        return response()->json(Itineraryrequest::where(['id'=>$id,'client_type',$guard_name])->first());
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($guard_name, $id)
    {
        $data = Itineraryrequest::where(['id'=>$id,'client_type',$guard_name])->first();
        $data->delete();
        return response()->json('successfully deleted !!!');
    }
}
