<?php
/* 
Created by : Ajay yadav 
Purpose : Manage Itinerary 

*/
namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Itinerary\Itinerary;
use App\Model\Itinerary\Itineraryrequest;
use App\Model\Tour\Tourprogram;
use App\Rules\EmailValidate;
use DB;
use App\Jobs\SendItineraryRequestToGbiMailJob;

class ItineraryController extends Controller
{
    public function search_post(){

        $search = \Request::get('s');
        $data = [];
        if($search!=null){
            $data = DB::table('itineraries')
                ->where('source','LIKE',"%$search%")
                ->orWhere('destination','LIKE',"%$search%")
                ->get();
            return response()->json([
                'data'=>$data
            ],200);
        }else{
           return $data;
        }

    }

     // explore destination searchbar get data 

    public function searchItinerary(Request $request)
    {
        $this->validate($request, [
            'tourtype' => 'required',
            'noofday' => 'required',
            'source' => 'required',
            'destination' => 'required',
        ]);

        $data = [];
        $newdata = [];
        $source = $request->source;
        $destination = $request->destination;
        $tourtype = $request->tourtype;
        $noofday = $request->noofday;
        if(count($source) > 1){ // Search on the basis of source of the itinerary
            $data = DB::table('itineraries')
                ->where('noofdays',$noofday)
                ->whereIn('source',$source)
                ->get();
            return response()->json([
                'data'=>$data
            ],200);
        }
       // return  $request->all();
        if($source !=null ){
            $source = explode(",",$request->source[0])[0];
            $destination = explode(",",$request->destination[0])[0];
            $data = Itinerary::where([
                'source'=>$source,
                'destination'=>$destination,
                'noofdays' => $noofday,
            ])
            ->with('tourtypes')
            ->get();
        }
        // return $request->all();
        if($data){
            foreach($data as $d){
                $tourtypes = DB::table('itinerary_tourtype')
                    ->where([
                        'itinerary_id' => $d->id,
                        'tourtype_id' => $request->tourtype
                    ])->first();
                if($tourtypes){
                    array_push($newdata,$d);
                }
            }
        }
        return response()->json([
            'data'=>$newdata
        ],200);
    }


    public function travelProgram($slug){
        $tour = Tourprogram::with('itinerary')->where('slug',$slug)->first();
        $tour_data = [];
        foreach($tour->itinerary as $itinerary){
            $data = [];
            $data['id'] = $itinerary->id;
            $data['title'] = $itinerary->title;
            $data['noofdays'] = $itinerary->noofdays;
            $data['hotel_type'] = $itinerary->hotel_type;
            $data['train'] = $itinerary->train;
            $data['bus'] = $itinerary->bus;
            $data['flight'] = $itinerary->flight;
            $data['food'] = $itinerary->food;
            $data['photo'] = $itinerary->photo;
            array_push($tour_data,$data);
        }
        
        return response()->json($tour_data);
    }
    
    public function list($count=8)
    {
        return response()->json(Itinerary::simplePaginate($count));
    }

    public function requestItinerary(Request $request){
        $validated = $this->validate($request, [
            'tourtype' => 'required',
            'noofday' => 'required',
            'source' => 'required',
            'destination' => 'required',
            'phoneno' => 'required',
            'email' => ['required',new EmailValidate],
        ]);
        
        Itineraryrequest::create($validated);

        SendItineraryRequestToGbiMailJob::dispatch($validated);

    }

    public function view($id){
        $data = Itinerary::where('id',$id)->with([
            'tourtypes',
            'itinerarydays'
        ])->first();
        return response()->json($data);
    }
}
