<?php
/* 
Created by : Ajay yadav 
Purpose : Manage Sightseeing 

*/
namespace App\Http\Controllers\Admin\Location;
use App\Http\Controllers\Controller; 
use App\Http\Resources\SightseeingCollection;
use App\Model\Reservation\sightseeing;
use Illuminate\Http\Request;

class SightseeingController extends Controller
{
    public function index(){
    	return new SightseeingCollection(sightseeing::all());
    }
    public function edit($id)
    {
      $sightseeing = sightseeing::find($id);
      return response()->json($sightseeing);
    }

}
