<?php
/* 
Created by : Ajay yadav 
Purpose : Manage front Tpur

*/
namespace App\Http\Controllers\Front;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller; 
use App\User;
use App\Model\User\Information;
use App\Model\Tour\TourUser;
use App\Model\Tour\Tour;
use App\Model\School\School;
use App\Model\Tour\Userpayment;
use Illuminate\Support\Facades\Auth;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Hash;

class TourController extends Controller{

     public function tourList(Request $request){
        $user = Auth::user();
        $travels =  TourUser::with([
            'tour' => function($tour){
                $tour->with(['itinerary'=>function($detail){
                    $detail->select('itineraries.id','itineraries.title','itineraries.detail_photo'); 
                }]);
                $tour->select('tours.tour_start_date','tours.travel_code','tours.no_of_person','tours.tour_end_date','tours.itinerary_id','tours.tour_id');
            }
        ])
        ->where('user_id',$user->id)
        ->select('id','user_id','travel_code')
        ->get();

        foreach ($travels as $travel) {
            $data = Userpayment::where(
                ["tour_code"=>$travel->tour->tour_id,
                'user_id'=> $travel->user_id
            ])->select('status')->first();
            $travel['payment'] = $data;
        }
        return response()->json($travels);
    }

    public function tourDetail(Request $request){
        $user = Auth::user();
        $tour = Tour::with('itinerary','itinerary.itinerarydays','bookedhotels','bookedhotels.hotel','bookedflights','bookedflights.flight')->where("tour_id",$request->travel_id)->first();
        $tour['user_id'] = $user->id;
        return response()->json($tour);
    }

   

    
    public function tourDetailSave(Request $request){
        $this->validate($request, [ 
            'travel_code' => 'required',
        ]);
        
        $user = Auth::user();
        $data = ['user_id'=>$user->id,'travel_code'=>$request->travel_code];
        $travel = TourUser::where($data)->get();
        if(count($travel) != 0){
            return response()->json('error');
        }
        $tour = Tour::where('travel_code',$request->travel_code)->get();
        if(count($tour) == 0){
            return response()->json('error');
        }        
        TourUser::create($data);
        return response()->json(['success'=>"success"]);   
    }

    public function paymentTour(Request $request){
        $user = Auth::user();
        $profession = $user->information->user_profession;

        $tour = Tour::select([
            'no_of_person','tour_price','travel_code'
        ])->where('tour_id',$request->travel_code)->firstOrFail();
        $tour['profession'] = $profession;
        $tour['user_id'] = $user->id;
        $tour['school_id'] = $user->information->school_id;
        return $tour;
    }

}
