<?php

namespace App\Http\Controllers;
use App\Http\Resources\ItineraryCollection;
use Illuminate\Http\Request;
use App\Itinerary;
use Auth;
use Image;

class ApiItineraryController extends Controller
{
    public function index(){
    	return new ItineraryCollection(Itinerary::orderBy('id','desc')->get());
    }
    public function store(Request $request){
    	$this->validate($request, [
            'source' => 'required|min:3|max:100',
            'destination' => 'required|min:3|max:100',
            'noofdays' => 'required|numeric|min:1|max:15',
            'title' => 'required|min:5|max:100',
            'description' => 'required',
            'tourtype' => 'required'
	        ]);

	    	$strpos = strpos($request->input('photo'),';');
	        $sub = substr($request->input('photo'),0,$strpos);
	        $ex = explode('/',$sub)[1];
	        $name = time().".".$ex;
	        $img = Image::make($request->input('photo'))->resize(190, 100);
	        $upload_path = public_path()."/uploadimage/";
	        $img->save($upload_path.$name);

	    	$strpos = strpos($request->input('detail_photo'),';');
	        $sub = substr($request->input('detail_photo'),0,$strpos);
	        $ex = explode('/',$sub)[1];
	        $name1 = 'bn'.time().".".$ex;
	        $img = Image::make($request->input('detail_photo'))->resize(22200, 450);
	        $upload_path = public_path()."/uploadimage/";
	        $img->save($upload_path.$name1);

	        $itinerary = new Itinerary();
	        $itinerary->source = $request->input('source');
	        $itinerary->destination = $request->input('destination');
	        $itinerary->title = $request->input('title');
	        $itinerary->noofdays = $request->input('noofdays');
	        $itinerary->description = $request->input('description');
	        $itinerary->tourtype = $request->input('tourtype');
	        //$itinerary->user_id = '4';//Auth::user()->id;
	        $itinerary->photo = $name;
	        $itinerary->detail_photo = $name1;

	        $itinerary->save();
	       return response()->json(['id' => $itinerary->id, 'days' => $itinerary->noofdays], 200);
    }
}
