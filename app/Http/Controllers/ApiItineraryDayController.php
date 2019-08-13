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
		$source = $request->input('source');
		$destination = $request->input('destination');
		$description = $request->input('description');
		array_shift($source);
		array_shift($destination);
		array_shift($description);

		$itinerary = new Itineraryday();
		$itinerary->itinerary_id = $id;
		//$itinerary->user_id = '4';//Auth::user()->id;
		$itinerary->source = implode(",",$source);
		$itinerary->destination = implode(",",$destination);
		$itinerary->description = implode(",,",$description);
		$itinerary->save();
		return response()->json(['message'=>'Successfully Stored...']);
	}
}
