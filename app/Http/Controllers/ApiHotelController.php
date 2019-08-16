<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\HotelCollection;
use App\hotel;
class ApiHotelController extends Controller
{
  // Fetch the all data of the hotel 
  public function index(){
		return new HotelCollection(hotel::all());
	}
  // Create a new data for the hotel
	 public function create(Request $request)
    {
      $this->validate($request, [
      		'hotelUid'=>'required|numeric',
      		'type'=>'required',
            'name' => 'required|min:3|max:100',
            'location'=>'required',
            'price'=>'required',
            'phoneno' => 'required',
            
            'email' => 'required',
            
            'meadlType' => 'required'
          ]);
          $hotel = new hotel();
          $hotel->hotelUid = $request->input('hotelUid');
          $hotel->name = $request->input('name');
          $hotel->type = $request->input('type');
          $hotel->name = $request->input('name');
          $hotel->location = $request->input('location');
          $hotel->price = $request->input('price');

          $hotel->phoneno = $request->input('phoneno');
          $hotel->email = $request->input('email');
          $hotel->mealType = $request->input('mealType');

          $hotel->save();
         return response()->json(['Message'=>'successfully added...']);
    }
}
