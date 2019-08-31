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
      		  'hotelUId'=>'required',
            'name' => 'required|min:3|max:100',
            'location'=>'required',
            'price'=>'required',
            'phoneno' => 'required',
            
            'email' => 'required',
            
            'mealType' => 'required'
          ]);
          // $hotel = new hotel();
          // $hotel->hotelUid = $request->input('hotelUid');
          // $hotel->type = 'International';
          // $hotel->name = $request->input('name');
          
          // $hotel->location = $request->input('location');
          // $hotel->price = $request->input('price');

          // $hotel->phoneno = $request->input('phoneno');
          // $hotel->email = $request->input('email');
          // $hotel->mealType = $request->input('mealType');

          // $hotel->save();
         return response()->json(['Message'=> $request]);
    }
}
