<?php

namespace App\Http\Controllers\Escort;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Escort\Escort;
use App\Model\Reservation\Bookedescort;

class TourController extends Controller 
{
    public function tourList($id){
        $data = Bookedescort::select('tour_code','tour_id')->where('escort_id',$id)
            ->with([
                'tour:id,tour_start_date,tour_end_date,itinerary_id',
                'tour.itinerary:id,title'
            ])->get();
        return response()->json($data);

    }
}
