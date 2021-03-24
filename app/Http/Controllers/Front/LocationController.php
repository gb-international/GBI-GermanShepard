<?php

namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Location\City;
use App\Model\Location\Country;

class LocationController extends Controller
{
    public function cityList(){
        return response()->json(City::select(['id','name'])->get());
    }
    public function relatedCities($name){
        $data = City::select('country_id','id')->where('name',$name)->first();
        $cities = [];
        if($data){
            $cities = City::where('country_id',$data->country_id)->get();
        }
        return response()->json($cities);
    }
    
    public function regionalCities($region){
        $data = [];
        $cities = [];
        if($region == 'national'){
            $data = Country::select('id','name')
                ->with('cities:id,country_id,name')
                ->where('name','india')
                ->get();
            $country = $data[0]['name'];
            foreach ($data[0]->cities as $d ) {
                $d->name = $d->name.','.$country;
                array_push($cities,$d);
            }
        }
        if($region == 'international'){
            $data = Country::select('id','name')
                ->with('cities:id,country_id,name')
                ->where('name','!=', 'india')
                ->get();
            foreach($data as $row){
                $country = $row['name'];
                foreach ($row->cities as $d ) {
                    $d->name = $d->name.','.$country;
                    array_push($cities,$d);
                }
            }
        }
        return response()->json($cities);
    }

}
