<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\City;

class SearchController extends Controller
{
   public function search(Request $request){

   		$searchquerys = City::orderBy('id','desc')->get();
       	return response()->json($searchquerys);
    	// $searchquery = $request->searchquery;
     //    $searchquerys = City::where('name','like','%'.$searchquery.'%')->get();
     //    return response()->json($searchquerys);

    }
}
