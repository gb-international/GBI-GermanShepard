<?php

namespace App\Http\Controllers\Escort;

use App\Http\Controllers\Controller;

class Appcontroller extends Controller 
{
    public function index(){
        return view('escort.index');
    }
}
