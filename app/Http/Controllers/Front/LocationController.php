<?php

namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Location\City;

class LocationController extends Controller
{
    public function cityList(){
        return response()->json(City::select(['id','name'])->get());
    }
    public function relatedCities($name){
        $data = City::where('name',$name)->first();
        $cities = [];
        if($data){
            $cities = City::where('country_id',$data->country_id)->get();
        }
        return response()->json($cities);

    }
}
