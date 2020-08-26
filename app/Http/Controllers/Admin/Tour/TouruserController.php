<?php

namespace App\Http\Controllers\Admin\Tour;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Tour\TourUser;
class TouruserController extends Controller
{
    public function touruserList(Request $request){
        $data = TourUser::where('tour_id',$request->tour_id)->with('user')->get();
        return response()->json($data);

    }
}
