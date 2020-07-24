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
use Illuminate\Support\Facades\Auth;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Hash;

class TourController extends Controller{
    public $successStatus = 200;
    private $id = 'csrikhi@gbinternational.in';
    private $pwd = 'Roger224225g32@';

     public function tourList(Request $request){
        $user = Auth::user();
        $travels = $user->UserTravel;
        $data = [];
        foreach ($travels as $travel) {
            array_push($data,Tour::with('itinerary','itinerary.itinerarydays')->where("travel_code",$travel->travel_code)->first());
        }
        
        return response()->json($data);
    }

    public function tourDetail(Request $request){
        $user = Auth::user();
        $tour = Tour::with('itinerary','itinerary.itinerarydays','bookedhotels','bookedhotels.hotel','bookedflights','bookedflights.flight')->where("tour_id",$request->travel_id)->first();
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
}
