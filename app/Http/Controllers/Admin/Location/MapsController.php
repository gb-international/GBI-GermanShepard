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

    public function getDirection(Request $request) {

        $data = \GoogleMaps::load('directions')
            ->setParam([
                'origin'          => 'place_id:'.$request->origin,
                'destination'     => 'place_id:'.$request->destination,
            ])
           ->isLocationOnEdge($request->lat, $request->lng);

        return $data;
    }

    public function store(Request $request)
    {
        Map::create($this->validateMap($request));
       return response()->json(['Message'=> 'Successfully Added...']);
    }


    public function show(Map $map)
    {

    }

    public function edit(Map $map)
    {
      return response()->json($map);
    }

    public function update(Request $request, Map $map)
    {   
        $validated =  $this->validate($request, [
            'name' => ['required',new AlphaSpace],
            'country_id' => 'required',
            'state_id' => 'required',
        ]);
        $map->update($validated);
        return response()->json(['message'=>'Successfully Updated']);
    }

    public function destroy(Map $map)
    {
        $map->delete();
        return response()->json('successfully deleted');
    }

    public function validateMap($request)
    {
      return $this->validate($request, [
        'name' => ['required','unique:location',new AlphaSpace],
        'country' => 'required',
        'state' => 'required',
        'city' => 'required'
      ]);
    }
}
