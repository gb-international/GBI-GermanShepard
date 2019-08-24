<?php

      /************************************************
      Template Type: Itinerary Controller for the Itinerary Api
      Author:@Ajay

      ****************************************************/

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
            'transport_type' => 'required'
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
	        $itinerary->hotel_type = $request->input('hoteltype');
	        $itinerary->transport_type = $request->input('transport_type');
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

    // Itinerary Edit with id

    public function edit($id){
    	return response()->json(Itinerary::find($id));
    }

    // Itinerary Update 
    public function update(Request $request,$id){
    	$itinerary = Itinerary::findOrFail($id);

    	$this->validate($request, [
            'source' => 'required|min:2|max:100',
            'destination' => 'required|min:3|max:100',
            'noofdays' => 'required|numeric|min:1|max:15',
            'title' => 'required|min:3|max:100',
            'description' => 'required|min:3',
            'tourtype' => 'required',
            'hotel_type' => 'required',
            'transport_type' => 'required'
	        ]);




        if($request->photo!=$itinerary->photo){
            $strpos = strpos($request->photo,';');
            $sub = substr($request->photo,0,$strpos);
            $ex = explode('/',$sub)[1];
            $name = time().".".$ex;
            $img = Image::make($request->photo)->resize(200, 200);
            $upload_path = public_path()."/uploadimage/";
            $image = $upload_path. $itinerary->photo;
            $img->save($upload_path.$name);

            if(file_exists($image)){
                @unlink($image);
            }
        }else{
            $name = $itinerary->photo;
        }



        if($request->detail_photo!=$itinerary->detail_photo){
            $strpos = strpos($request->detail_photo,';');
            $sub = substr($request->detail_photo,0,$strpos);
            $ex = explode('/',$sub)[1];
            $name1 = time().".".$ex;
            $img = Image::make($request->detail_photo)->resize(200, 200);
            $upload_path = public_path()."/uploadimage/";
            $image = $upload_path. $itinerary->detail_photo;
            $img->save($upload_path.$name1);

            if(file_exists($image)){
                @unlink($image);
            }
        }else{
            $name1 = $itinerary->detail_photo;
        }


        
     	$itinerary->source = $request->source;
	    $itinerary->destination = $request->destination;
	    $itinerary->title = $request->title;
	    $itinerary->photo = $name;
	    $itinerary->detail_photo = $name1;
	    $itinerary->noofdays = $request->noofdays;
	    $itinerary->description = $request->description;
	    $itinerary->tourtype = $request->tourtype;
	    $itinerary->hotel_type = $request->hotel_type;
	    $itinerary->transport_type = $request->transport_type;
	    $itinerary->save();    

	    return response()->json(['message'=>'Successfully Addedd']);
    }
}
																																																																																																																																																																																																																							