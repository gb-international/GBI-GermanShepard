<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Tour\Frontbooking;
use App\Model\Tour\CityFrontbooking;
use App\Model\Tour\FrontbookingSightseeing;
use Auth;

class FrontbookingController extends Controller
{
    public function booking(Request $request){
        $user = Auth::user();
        $validate = $this->validateBooking($request);
        $booking = '';
        $transport = '';
        $sightseen = '';
        foreach ($request->city_id as $city) {
            $booking  .= $city['name'].', ';
        }
        foreach ($request->transport as $mode) {
            $transport .= $mode.', ';
        }
        
        foreach ($request->sightseen as $sight) {
            $sightseen .= $sight['name'].', ';
        }

        $validate['user_id'] = $user->id;
        $validate['noofday'] = $request->noofday;
        $validate['accomodation'] = $request->accommodation;
        $validate['itinerary_id'] = $request->itinerary_id;
        $validate['city'] = substr($booking, 0, -2);
        $validate['transport'] = substr($transport, 0, -2);
        $validate['sightseen'] = substr($sightseen, 0, -2);
        $booking =  Frontbooking::create($validate);

        return $booking;
    }

    public function validateBooking($request)
    {
      return $this->validate($request, [
            'start_date' => 'required',
            'end_date' => 'required',
            'person' => 'required',
            'room' => 'required',
            'occupancy_type' => 'required'
      ]);
    }
}
