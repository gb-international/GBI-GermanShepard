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
		$title = $request->input('title');
		$description = $request->input('description');
		array_shift($title);
		array_shift($description);

		$itinerary = new Itineraryday();
		$itinerary->itinerary_id = $id;
		//$itinerary->user_id = '4';//Auth::user()->id;
		$itinerary->title = json_encode($title);
		$itinerary->description = json_encode($description);
		$itinerary->save();
		return response()->json(['message'=>'Successfully Stored...']);
	}
}
