<?php

namespace App\Http\Controllers\Front;
use App\Http\Controllers\Controller; 
use Illuminate\Http\Request;
use App\Model\Tour\Bankname;
class BanknameController extends Controller
{
    public function index(){
        return Bankname::get();
    }
}
