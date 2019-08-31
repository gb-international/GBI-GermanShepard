<?php

namespace App\Http\Controllers;
use App\Http\Resources\ItineraryCollection;
use Illuminate\Http\Request;
use DB;
use App\Itinerary;
use Auth;
use Image;

class ApiItineraryController extends Controller
{
	// Fetch all the data of the Itinerary
    public function index(){

    	return new ItineraryCollection(Itinerary::select('id','source','destination','title','photo','detail_photo','noofdays','description','tourtype','hotel_type','transport_type')->orderBy('id','desc')->get());
    }
    // Create a new Data 
    public function create(Request $request){
    	$this->validate($request, [
            'source' => 'required|min:2|max:100',
            'destination' => 'required|min:3|max:100',
            'noofdays' => 'required|numeric|min:1|max:15',
            'title' => 'required|min:3|max:100',
            'description' => 'required|min:3',
            'tourtype' => 'required',
            'hoteltype' => 'required',
            'transport' => 'required'
	        ]);

	    	$strpos = strpos($request->input('photo'),';');
	        $sub = substr($request->input('photo'),0,$strpos);
	        $ex = explode('/',$sub)[1];
	        $name = time().".".$ex;
	        $img = Image::make($request->input('photo'))->resize(210, 120);
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
	        $itinerary->hotel_type = $request->input('hoteltype');
	        $itinerary->transport_type = $request->input('transport');
	        //$itinerary->user_id = '4';//Auth::user()->id;
	        $itinerary->photo = $name;
	        $itinerary->detail_photo = $name1;

	        $itinerary->save();
	       return response()->json(['id' => $itinerary->id, 'days' => $itinerary->noofdays], 200);
    	
    }
    // view the data for the particular id
    public function view($id){

		$data = DB::table('itineraries')		    
		    ->leftjoin('itinerarydays', 'itinerarydays.itinerary_id', '=', 'itineraries.id')
		    ->where('itineraries.id', $id)
		    ->first();
           return response()->json($data);
    }

    //serach itinerary

    public function search_post(){

        $search = \Request::get('s');
        if($search!=null){
            $data = DB::table('itineraries')
                ->where('source','LIKE',"%$search%")
                ->orWhere('destination','LIKE',"%$search%")
                ->get();
            return response()->json([
                'data'=>$data
            ],200);
        }else{
           return $this->index();
        }

    }
}
