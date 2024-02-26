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
use Auth;
use Carbon\Carbon;
use GoogleMaps as Map;
use App\Jobs\SendItineraryRequestToGbiMailJob;
use Validator;
use App\Http\Controllers\Admin\BaseController;

class ItineraryController extends BaseController
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
            'clientType' => 'required'
        ]);

        $data = [];
        $source = $request->source;
        $destination = $request->destination;
        $tourtype = $request->tourtype;
        $noofday = $request->noofday;
        $ctype = $request->clientType;
        if(count($source) > 1){ // Search on the basis of source of the itinerary
            $data = DB::table('itineraries')
                ->where('noofdays',$noofday)
                ->where('client_type',$ctype)
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
                //'noofdays' => $noofday,
                'client_type' => $ctype,
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
                $data['single_sharing_base_price'] = $itinerary->single_sharing_base_price??0;
                $data['double_sharing_base_price'] = $itinerary->double_sharing_base_price??0;
                $data['triple_sharing_base_price'] = $itinerary->triple_sharing_base_price??0;
                $data['quad_sharing_base_price'] = $itinerary->quad_sharing_base_price??0;
                $data['child_with_mattress_price'] = $itinerary->child_with_mattress_price??0;
                $data['child_without_mattress_price'] = $itinerary->child_without_mattress_price??0;
                $data['infant_price'] = $itinerary->infant_price??0;
                $data['apai_price'] = $itinerary->apai_price??0;
                $data['mapai_price'] = $itinerary->mapai_price??0;
                $data['cpai_price'] = $itinerary->cpai_price??0;
                $data['ep_price'] = $itinerary->ep_price??0;
                $data['no_of_nights'] = $itinerary->no_of_nights??0;
                $data['tcs_fee'] = $itinerary->tcs_fee??0;
                $data['gst_fee'] = $itinerary->gst_fee??0;
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
            $data['single_sharing_base_price'] = $itinerary->single_sharing_base_price??0;
            $data['double_sharing_base_price'] = $itinerary->double_sharing_base_price??0;
            $data['triple_sharing_base_price'] = $itinerary->triple_sharing_base_price??0;
            $data['quad_sharing_base_price'] = $itinerary->quad_sharing_base_price??0;
            $data['child_with_mattress_price'] = $itinerary->child_with_mattress_price??0;
            $data['child_without_mattress_price'] = $itinerary->child_without_mattress_price??0;
            $data['infant_price'] = $itinerary->infant_price??0;
            $data['apai_price'] = $itinerary->apai_price??0;
            $data['mapai_price'] = $itinerary->mapai_price??0;
            $data['cpai_price'] = $itinerary->cpai_price??0;
            $data['ep_price'] = $itinerary->ep_price??0;
            $data['no_of_nights'] = $itinerary->no_of_nights??0;
            $data['tcs_fee'] = $itinerary->tcs_fee??0;
            $data['gst_fee'] = $itinerary->gst_fee??0;
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
            $data['single_sharing_base_price'] = $itinerary->single_sharing_base_price??0;
            $data['double_sharing_base_price'] = $itinerary->double_sharing_base_price??0;
            $data['triple_sharing_base_price'] = $itinerary->triple_sharing_base_price??0;
            $data['quad_sharing_base_price'] = $itinerary->quad_sharing_base_price??0;
            $data['child_with_mattress_price'] = $itinerary->child_with_mattress_price??0;
            $data['child_without_mattress_price'] = $itinerary->child_without_mattress_price??0;
            $data['infant_price'] = $itinerary->infant_price??0;
            $data['apai_price'] = $itinerary->apai_price??0;
            $data['mapai_price'] = $itinerary->mapai_price??0;
            $data['cpai_price'] = $itinerary->cpai_price??0;
            $data['ep_price'] = $itinerary->ep_price??0;
            $data['no_of_nights'] = $itinerary->no_of_nights??0;
            $data['tcs_fee'] = $itinerary->tcs_fee??0;
            $data['gst_fee'] = $itinerary->gst_fee??0;
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
            $data['single_sharing_base_price'] = $itinerary->single_sharing_base_price??0;
            $data['double_sharing_base_price'] = $itinerary->double_sharing_base_price??0;
            $data['triple_sharing_base_price'] = $itinerary->triple_sharing_base_price??0;
            $data['quad_sharing_base_price'] = $itinerary->quad_sharing_base_price??0;
            $data['child_with_mattress_price'] = $itinerary->child_with_mattress_price??0;
            $data['child_without_mattress_price'] = $itinerary->child_without_mattress_price??0;
            $data['infant_price'] = $itinerary->infant_price??0;
            $data['apai_price'] = $itinerary->apai_price??0;
            $data['mapai_price'] = $itinerary->mapai_price??0;
            $data['cpai_price'] = $itinerary->cpai_price??0;
            $data['ep_price'] = $itinerary->ep_price??0;
            $data['no_of_nights'] = $itinerary->no_of_nights??0;
            $data['tcs_fee'] = $itinerary->tcs_fee??0;
            $data['gst_fee'] = $itinerary->gst_fee??0;
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
                $data['single_sharing_base_price'] = $itinerary->single_sharing_base_price??0;
                $data['double_sharing_base_price'] = $itinerary->double_sharing_base_price??0;
                $data['triple_sharing_base_price'] = $itinerary->triple_sharing_base_price??0;
                $data['quad_sharing_base_price'] = $itinerary->quad_sharing_base_price??0;
                $data['child_with_mattress_price'] = $itinerary->child_with_mattress_price??0;
                $data['child_without_mattress_price'] = $itinerary->child_without_mattress_price??0;
                $data['infant_price'] = $itinerary->infant_price??0;
                $data['apai_price'] = $itinerary->apai_price??0;
                $data['mapai_price'] = $itinerary->mapai_price??0;
                $data['cpai_price'] = $itinerary->cpai_price??0;
                $data['ep_price'] = $itinerary->ep_price??0;
                $data['no_of_nights'] = $itinerary->no_of_nights??0;
                $data['tcs_fee'] = $itinerary->tcs_fee??0;
                $data['gst_fee'] = $itinerary->gst_fee??0;
                array_push($tour_data, $data);
            }
        }
        return response()->json($tour_data);
    }
    

    public function list($count=6)
    {
        // latest('id')->
        return response()->json(Itinerary::paginate($count));
    }

    public function requestItinerary($guard, Request $request){
        try{
            $validator = Validator::make($request->all(), [
                'itinerary_id' => 'required|exists:itineraries,id',
                'source' => 'required|min:2|max:100',
                'destination' => 'required|different:source|min:3|max:100',
                'start_date' => 'required|date|after:today',
                'end_date' => 'required|date|after_or_equal:start_date',
                'price' => 'required|numeric',
                'no_of_boys' =>$guard == 'school' ? 'required|numeric': '',
                'no_of_girls' =>$guard == 'school' ? 'required|numeric':'',
                'passenger' => 'required|numeric',
                'meal_plan' => 'in:ep,cp,map,ap',
                'no_of_days' => 'required|numeric',
                'no_of_rooms' => 'required|numeric',
                'accommodation_preference' => 'required|numeric',
                'passenger_details' => ($guard == 'family'||$guard == 'company') ? 'required|array': '',
                'passenger_details.*.adults' => ($guard == 'family'||$guard == 'company') ? 'required|numeric': '',
                'mode_of_transport.*' => 'in:bus,train,flight',
                'cities_id.*' => 'exists:cities,id',
            ]);
            if ($validator->fails()) {
                return response()->json(['message' => "The given data was invalid.", 'errors' =>$validator->errors()]);
            }

            $data = array('itinerary_id'=>$request->itinerary_id??null,
            'source'=>$request->source??null,
            'destination'=>$request->destination??null,
            'start_date'=>$request->start_date??null,
            'end_date'=>$request->start_date??null,
            'price'=>$request->price??null,
            'occupancy_type'=>$request->occupancy_type??($guard == 'school'?'quad':'triple'),
            'meal_plan'=>$request->meal_plan??'ep',
            'no_of_days' => $request->no_of_days??0,
            'no_of_rooms' => $request->no_of_rooms??0,
            'client_type' => $guard,
            'accommodation_preference' => $request->accommodation_preference??0,
            'mode_of_transport' => $request->mode_of_transport??null);
            $data['client_type']= $guard;
            if($guard == "school"){
                $data['no_of_boys'] = $request->no_of_boys??0;
                $data['no_of_girls']= $request->no_of_girls??0;
                $data['passenger']= $request->passenger??0;
                $data['edu_institute_id']= Auth::guard($guard."-api")->user()->id??null;
            }
            else if($guard == "company"){
                $data['passenger'] = $request->passenger??0;
                $data['company_user_id']= Auth::guard($guard."-api")->user()->id??null;
            }
            else{
                $data['passenger_details'] = $request->passenger_details??null;
                $data['family_user_id']= Auth::guard($guard."-api")->user()->id??null;
            }
            
            $data = Itineraryrequest::create($data);
            if($request->cities_id){
                $data->cities()->sync($request->cities_id??null);
            }
            $data['email'] = Auth::guard($guard."-api")->user()->email??null;
            $data['phone_no'] = Auth::guard($guard."-api")->user()->phone_no??null;
            if($guard == "family"){
                $data['childs'] = 0;
                $data['infants'] = 0;
                if($request->passenger_details){
                    foreach($request->passenger_details as $details){
                        $data['childs'] += $details['childs'];
                        $data['infants'] += $details['infants'];
                    }
                }
            }
            // return $data;
            // CONTACT_US_MAIL
            SendItineraryRequestToGbiMailJob::dispatchNow($data);
            return response()->json("Successful created");
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }

    public function view($slug){
        $data = Itinerary::where('slug',$slug)->with([
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
                $encyData = Encyclopedia::where('city_name',$iCity)->first();
                if($encyData){
                    array_push($iTencyclopedia, $encyData);
                }
                
            }
        }
        //$data->iTcities = $iTcities
        $data->Ency = $iTencyclopedia;
        return response()->json($data);
    }
    public function stateWiseItinerary($state, int $limit=10){
        return response()->json(Itinerary::where('source', $state)->paginate($limit));
    }
    public function stateList(){
        return response()->json(Itinerary::distinct()->pluck('source'));
    }
}
