<?php
/* 
Created by : Ajay yadav 
Purpose : Manage Itinerary 

*/
namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Itinerary\Itinerary;
use DB;

class ItineraryController extends Controller
{
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

     // explore destination searchbar get data 

    public function searchItinerary(Request $request)
    {
        $this->validate($request, [
            'tourtype' => 'required',
            'noofday' => 'required'
        ]);
        $source = $request->source;
        $destination = $request->destination;
        $tourtype = $request->tourtype;
        $noofday = $request->noofday;
        if(count($source) > 1){ // Search on the basis of their title of the itinerary
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
            $data = DB::table('itineraries')
                ->where('noofdays',$noofday)
                ->whereIn('source',$source)
                ->OrWhereIn('destination',$destination)
                ->get();
            return response()->json([
                'data'=>$data
            ],200);
        }
    }


    public function upcoming_tour($limit=6){
         $data = Itinerary::select(['id','title','noofdays','hotel_type','train','bus','flight','food','photo'])
                ->where('status','1')
                ->take($limit)
                ->get();
        return response()->json($data);
    }
}
