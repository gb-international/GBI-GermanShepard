<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Tour;
use App\Itinerary;
use App\User;
use Auth;
use DB;

class UserDashboardController extends Controller
{
	public function list(){
    	$data = DB::table('tours')		    
		    ->leftjoin('itineraries', 'itineraries.id', '=', 'tours.itinerary_id')
		    ->where('tours.student_id','1')->get();
        //return response()->json($data);
		 return view('front.user.tour-detail')->with('list',$data);
    }
    public function upcoming_event(){

    }
    public function dashboard1(){
    	return view('front.user.dashboard1');
    }
    public function tourdetail1(){
    	return view('front.user.tour-detial1');
    }
}
