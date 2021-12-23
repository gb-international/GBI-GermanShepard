<?php

namespace App\Http\Controllers\Front;
use App\Model\Hotel\Hotel;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Traits\ImageTrait;
use Image;
use App\Rules\EmailValidate;
use App\Rules\PhoneNubmerValidate;
use App\Rules\AlphaSpace;

class HotelController extends Controller{

    public function searchHotel(Request $request)
    {
        $data = Hotel::where('city', $request->location)
            ->where('category',$request->room_type)
            ->where('room', '>=', $request->rooms)
            ->get();
        return response()->json($data);
    }

}