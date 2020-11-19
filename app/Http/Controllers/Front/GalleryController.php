<?php

namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Gallery\Gallery;
class GalleryController extends Controller
{
    public function index($slug){
        $gallery = Gallery::where('category',$slug)->with('images')->get();
        return response()->json($gallery);
    }

}