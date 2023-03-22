<?php
namespace App\Http\Controllers\Front;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Itinerary\Itinerary;
use App\Model\Encyclopedia\Encyclopedia;
use App\Model\Itinerary\Itineraryrequest;
use App\Model\Tour\Tourprogram;
use App\Rules\EmailValidate;
use App\Model\Tour\Tour;
use App\Model\Event\Event;
use App\Model\Itinerary\Popular;
use App\Model\Season\Season;
use App\Model\DefaultSet\DefaultSet;
use DB;
use Carbon\Carbon;
use GoogleMaps as Map;
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
            'clientType' => ''
        ]);

        $data = [];
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
                // 'noofdays' => $noofday,
            ])
            ->with('tourtypes')
            ->get();
        }
        // return $request->all();
        // if($data){
        //     foreach($data as $d){
        //         $tourtypes = DB::table('itinerary_tourtype')
        //             ->where([
        //                 'itinerary_id' => $d->id,
        //                 'tourtype_id' => $request->tourtype
        //             ])->first();
        //         if($tourtypes){
        //             array_push($newdata,$d);
        //         }
        //     }
        // }
        return response()->json([
            'data'=>$data
        ],200);
    }


    public function travelProgram($slug){
        $tour = Tourprogram::with('itinerary')->where('slug',$slug)->first();
        $tour_data = [];
        if($tour){
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
                $data['price'] = $itinerary->price;
                array_push($tour_data,$data);
            }
        }
        return response()->json($tour_data);
    }

    public function upcomingEvents(){
        $today = (Carbon::now())->toDateTimeString();
        $tours = Tour::where('tour_start_date', '>', $today)->get();
        $events = Event::where('date', '>', $today)->get();
        $tour_data = [];
        foreach($events as $evt){
            $itinerary = Itinerary::where('id', $evt->itinerary_id)->first();
            $data = [];
            $data['id'] = $itinerary->id;
            $data['title'] = $evt->name;
            $data['noofdays'] = $itinerary->noofdays;
            $data['hotel_type'] = $itinerary->hotel_type;
            $data['train'] = $itinerary->train;
            $data['bus'] = $itinerary->bus;
            $data['flight'] = $itinerary->flight;
            $data['food'] = $itinerary->food;
            $data['photo'] = $evt->photo;
            $data['price'] = $itinerary->price;
            array_push($tour_data, $data);
        }
        foreach($tours as $tour){
            $itinerary = $tour->itinerary;
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
            $data['price'] = $itinerary->price;
            array_push($tour_data, $data);
        }
        return response()->json($tour_data);
    }

    public function popularTours(){
        $today = (Carbon::now())->toDateTimeString();
        $cSeason = DefaultSet::where('id', '1')
        ->first();
        $season = Season::where('name', $cSeason->current)->first();
        $popular = Popular::where('season_id', $season->id)->get();
        $itineraries = Itinerary::where('count', '>', 10)->orderBy('count')->get();
        $tour_data = [];
        foreach($popular as $plr){
            $itinerary = Itinerary::where('id', $plr->itinerary_id)->first();
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
            $data['price'] = $itinerary->price;
            array_push($tour_data, $data);
        }
        foreach($itineraries as $itinerary){
            $seasonsIt = $itinerary->seasons->toArray();
            if(in_array($season, $seasonsIt)){
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
                $data['price'] = $itinerary->price;
                array_push($tour_data, $data);
            }
        }
        return response()->json($tour_data);
    }
    
    public function list($count=6)
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
            'itinerarydays',
            'itineraryimages'
        ])->first();
       
        $data->count += 1;
        /*$mapData = \GoogleMaps::load('nearbysearch')           
        ->setParam([
            //'location'  => $data->destination,
            'radius'    => '500',
            'name'      => $data->destination,
            'type'      => 'airport'
        ])
        ->getResponseByKey('rows.elements');

        $data->mapData = $mapData;*/
        
        $data->save();
        if($data->itinerarydays){
            $iTcities = array();
            $itDays = $data->itinerarydays;
            $iTencyclopedia = array();
            foreach($itDays as $iday){
                array_push($iTcities, $iday->day_source);
                array_push($iTcities, $iday->day_destination);
            }
            $iTcities = array_unique($iTcities);
            foreach($iTcities as $iCity){
                $encyData = Encyclopedia::where('state_name',$iCity)->first();
                if($encyData){
                    array_push($iTencyclopedia, $encyData);
                }
                
            }
        }
        //$data->iTcities = $iTcities
        $data->Ency = $iTencyclopedia;
        return response()->json($data);
    }
}
