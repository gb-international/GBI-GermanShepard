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
        // check city array first ( tomorrow work)
        return $request->all();

        $validate['user_id'] = $user->id;
        $validate['noofday'] = $request->noofday;
        $validate['accomodation'] = $request->accomodation;
        $validate['itinerary_id'] = $request->itinerary_id;
        $booking =  Frontbooking::create($validate);

        $cityModels = [];
        foreach ($request->city_id as $data) {
            $cityModels[] = new CityFrontbooking($data);
        }
        $booking->cities()->saveMany($cityModels);

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
