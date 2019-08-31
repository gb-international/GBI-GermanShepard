<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Tag;

class VueJSController extends Controller
{
        public function autocomplete()

	    {

	        return view('vuejsAutocomplete');

	    }


	    public function autocompleteSearch(Request $request)

    {

        $searchquery = $request->searchquery;

        $data = Tag::where('name','like','%'.$searchquery.'%')->get();


        return response()->json($data);

    }
}
