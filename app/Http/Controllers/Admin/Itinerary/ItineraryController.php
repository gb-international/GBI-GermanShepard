<?php
/* 
Created by : Ajay yadav 
Purpose : Manage Itinerary 

*/
namespace App\Http\Controllers\Admin\Itinerary;

use App\Model\Itinerary\Itinerary;
use App\Model\Itinerary\Itineraryday;
use App\Model\Tour\Tour;
use App\Model\Location\City;
use App\Model\Tour\Tourtype;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\ItineraryCollection;
use DB;
use Auth;
use Image;

class ItineraryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new ItineraryCollection(Itinerary::get());
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
        $this->validate($request, [
            'source' => 'required|min:2|max:100',
            'destination' => 'required|min:3|max:100',
            'noofdays' => 'required|numeric|min:1|max:15',
            'title' => 'required|min:3|max:100',
            'description' => 'required|min:3',
            'tourtype' => 'required',
            'food' => 'required',
            'transport'=>'required',
        ]);
        $rules = array(
           'photo' => 'mimes:jpeg,jpg,png,gif|required|max:10000', // max 10000kb
           'detail_photo' => 'mimes:jpeg,jpg,png,gif|required|max:10000', // max 10000kb           
        );

        // linux and windows file staructure image path error and uploadig error.


            $strpos = strpos($request->input('photo'),';');
            $sub = substr($request->input('photo'),0,$strpos);
            $ex = explode('/',$sub)[1];
            $name = time().".".$ex;
            $img = Image::make($request->input('photo'));
            $upload_path = public_path()."/uploadimage/";
            $img->save($upload_path.$name);
            
            $strpos = strpos($request->input('detail_photo'),';');
            $sub = substr($request->input('detail_photo'),0,$strpos);
            $ex = explode('/',$sub)[1];
            $name1 = 'bn'.time().".".$ex;
            $img = Image::make($request->input('detail_photo'));
            $img->save($upload_path.$name1);
            // $name = 'thumbnail.jpg';
            // $name1 = 'banner-image.jpg';
            $itinerary = new Itinerary();
            $itinerary->source = $request->input('source');
            $itinerary->destination = $request->input('destination');
            $itinerary->title = $request->input('title');
            $itinerary->noofdays = $request->input('noofdays');
            $itinerary->description = $request->input('description');
            $itinerary->tourtype = $request->input('tourtype');
            $itinerary->hotel_type = $request->input('hoteltype');
            $itinerary->bus = $request->input('bus');
            $itinerary->train = $request->input('train');
            $itinerary->flight = $request->input('flight');
            $itinerary->food = $request->food;
            $itinerary->photo = $name;
            $itinerary->detail_photo = $name1;
            $itinerary->save();

            $dayModels = [];
            foreach ($request->itinerarydays as $data) {
                $dayModels[] = new Itineraryday($data);
            }
           $itinerary->itinerarydays()->saveMany($dayModels);
           // Tour Type
           $dayModels = [];
            foreach ($request->tourtypes as $data) {
                $dayModels[] = $data['id'];
            }
            $dayModels = Tourtype::find($dayModels);
            $itinerary->tourtypes()->attach($dayModels);               

           return response()->json(['success'=>'Successfully added']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Itinerary  $itinerary
     * @return \Illuminate\Http\Response
     */
    public function show(Itinerary $itinerary)
    {
        $itinerary->itinerarydays;
        return response()->json($itinerary);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Itinerary  $itinerary
     * @return \Illuminate\Http\Response
     */
    public function edit(Itinerary $itinerary)
    {
        $itinerary->itinerarydays;
        $itinerary->tourtypes;
        return response()->json($itinerary);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Itinerary  $itinerary
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Itinerary $itinerary)
    {
        $this->validate($request, [
            'source' => 'required|min:2|max:100',
            'destination' => 'required|min:3|max:100',
            'noofdays' => 'required|numeric|min:1|max:15',
            'title' => 'required|min:3|max:100',
            'description' => 'required|min:3',
            'tourtype' => 'required',
            'food' => 'required',
            'transport'=>'required',
            ]);


        if($request->photo!=$itinerary->photo){
            $strpos = strpos($request->photo,';');
            $sub = substr($request->photo,0,$strpos);
            $ex = explode('/',$sub)[1];
            $name = time().".".$ex;
            $img = Image::make($request->photo)->resize(210, 120);
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
            // $img = Image::make($request->detail_photo)->resize(2400, 450);
            $img = Image::make($request->detail_photo)->resize(1140, 214);
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
        $itinerary->bus = $request->input('bus');
        $itinerary->train = $request->input('train');
        $itinerary->flight = $request->input('flight');
        $itinerary->food = $request->food;
        $itinerary->save();   

        // Itinerary Day
        $itinerary->itinerarydays()->delete();
        $dayModels = [];
        foreach ($request->itinerarydays as $data) {
            $dayModels[] = new Itineraryday($data);
        }
       $itinerary->itinerarydays()->saveMany($dayModels);

       // Itinerary tour type

        $dayModels = [];
        foreach ($request->tourtypes as $data) {
            $dayModels[] = $data['id'];
        }
        $dayModels = Tourtype::find($dayModels);
        $itinerary->tourtypes()->sync($dayModels); 

        return response()->json(['message'=>'Successfully Addedd']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Itinerary  $itinerary
     * @return \Illuminate\Http\Response
     */
    public function destroy(Itinerary $itinerary)
    {
 
        $itinerary->delete();
        return response()->json('successfully deleted');
    }
}
