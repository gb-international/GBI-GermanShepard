<?php

namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Tour\Tourprogram;
use App\Model\Itinerary\Itinerary;


class WebsiteController extends Controller
{
    public function travel_programs(){
    	return response()->json(Tourprogram::get());
    }
}
