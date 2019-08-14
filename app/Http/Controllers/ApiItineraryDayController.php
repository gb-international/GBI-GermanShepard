<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\ItineraryDayCollection;
use Auth;
use App\Itineraryday;

class ApiItineraryDayController extends Controller
{
    public function index(){
		return new ItineraryDayCollection(Itineraryday::all());
	}
	public function create(Request $request,$id){
		$source = $request->input('day_source');
		$destination = $request->input('day_destination');
		$description = $request->input('day_description');
		array_shift($source);
		array_shift($destination);
		array_shift($description);

		$itinerary = new Itineraryday();
		$itinerary->itinerary_id = $id;
		//$itinerary->user_id = '4';//Auth::user()->id;
		$itinerary->day_source = implode(",",$source);
		$itinerary->day_destination = implode(",",$destination);
		$itinerary->day_description = implode(",,",$description);
		$itinerary->save();
		return response()->json(['message'=>'Successfully Stored...']);
	}
}
