<?php
/* 
Created by : Manas
Purpose : Manage Maps 

*/

namespace App\Http\Controllers\Admin\Location;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Rules\AlphaSpace;
use GoogleMaps as Map;

class MapsController extends Controller
{

    public function getLocation(Request $request) {

        $data = \GoogleMaps::load('geocoding')
        ->setParam (['address' => $request->address])
        ->get();

        return $data;
    }

    public function getMap(Request $request) {
        $latlng = $request->lat.','.$request->lng;
        $data = \GoogleMaps::load('geocoding')
                ->setParamByKey('latlng', $latlng)
                 ->get('results');

        return $data;
    }

    public function getDirection(Request $request) {

        $data = \GoogleMaps::load('directions')
            ->setParam([
                'origin'          => 'place_id:'.$request->origin,
                'destination'     => 'place_id:'.$request->destination,
            ])
           ->isLocationOnEdge($request->lat, $request->lng);

        return $data;
    }
}
