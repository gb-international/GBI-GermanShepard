<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Location\City;
use App\Model\Location\State;

class AjaxController extends Controller
{
    public function CountryState($id){
        return State::select(['id','name'])->where('country_id',$id)->get();
    }
    
    public function StateCity($id){
        return City::select(['id','name'])->where('state_id',$id)->get();
    }

}
