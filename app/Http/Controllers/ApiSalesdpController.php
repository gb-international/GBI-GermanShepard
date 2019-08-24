<?php

      /************************************************
      Template Type: Sales Department Controller for the Sales Department Api
      Author:@Ajay

      ****************************************************/

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Resources\SalesdpCollection;
use Auth;
use App\Salesdp;

class ApiSalesdpController extends Controller
{
    public function index(){
    	return new SalesdpCollection(Salesdp::get());
    }
     public function create(Request $request){
      $this->validate($request, [
      		'position'=>'required',
      		'phoneno'=>'required',
            'name' => 'required|min:3|max:100',
            'location'=>'required',
            'salary'=>'required',
            'address' => 'required',
            'email' => 'required',
          ]);
          $salesdp = new Salesdp();
          $salesdp->name = $request->input('name');
          $salesdp->phoneno = $request->input('phoneno');
          $salesdp->email = $request->input('email');
          $salesdp->address = $request->input('address');
          $salesdp->salary = $request->input('salary');
          $salesdp->position = $request->input('position');
          $salesdp->location = $request->input('location');
          $salesdp->save();

         return response()->json(['Message'=> 'Successfully Added....']);
    }
}
