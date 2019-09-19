<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Tour;
use App\Itinerary;
use App\User;
use Auth;
use DB;
class ApiTourController extends Controller
{
    public function user_tour_list(){
    	$data = DB::table('tours')		    
		    ->leftjoin('itineraries', 'itineraries.id', '=', 'tours.itinerary_id')
		    ->where('tours.student_id','4')->get();
        return response()->json($data);
    }
}
