<?php

      /************************************************
      Template Type: Client Controller for the Client Api
      Author:@Ajay

      ****************************************************/


namespace App\Http\Controllers;
use App\Http\Resources\ClientCollection;
use Illuminate\Http\Request;
use App\Client;
class ApiClientController extends Controller
{
    public function index(){
    	return new ClientCollection(Client::all());
    }

    public function create(Request $request){
    	 $this->validate($request, [
            'name' => 'required|min:3|max:100',
            'address'=>'required',
            'phoneno' => 'required',            
            'email' => 'required',            
            'schoolName' => 'required',
            'dob' => 'required'
          ]);
          $client = new Client();
          $client->name = $request->input('name');          
          $client->phoneno = $request->input('phoneno');
          $client->email = $request->input('email');
          $client->address = $request->input('address');
          $client->dob = $request->input('dob');
          $client->schoolName = $request->input('schoolName');

          $client->save();
         return response()->json(['Message'=> 'Successfully Added...']);
    }
}
