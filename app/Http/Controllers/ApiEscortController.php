<?php

      /************************************************
      Template Type: Escort Controller for the Escort Api
      Author:@Ajay

      ****************************************************/

namespace App\Http\Controllers;
use App\Http\Resources\EscortCollection;
use Illuminate\Http\Request;
use App\Escort;

class ApiEscortController extends Controller
{
  // Fetch all the data of the Escort
  public function index()
    {
      return new EscortCollection(Escort::all());
    }

    //Create a new Escort row 
    public function create(Request $request)
    {
      $this->validate($request, [
            'name' => 'required|min:3|max:100',
            'address' => 'required|min:3',
            'email' => 'required',
            'phoneno' => 'required',
            'salaryPerday' => 'required|numeric'
          ]);
          $escort = new Escort();
          $escort->name = $request->input('name');
          $escort->salaryPerday = $request->input('salaryPerday');
          $escort->phoneno = $request->input('phoneno');
          $escort->email = $request->input('email');
          $escort->address = $request->input('address');

          $escort->save();
         return response()->json(['Message'=>'successfully added...']);
    }

    // Fetch the data with id 
    public function edit($id)
    {
      $escort = Escort::find($id);
      return response()->json($escort);
    }

    // Update the data with the particular id
    public function update($id, Request $request)
    {
      $escort = Escort::find($id);

      $escort->update($request->all());

      return response()->json('successfully updated');
    }

    // Delete the data with the help of the id
    public function delete($id)
    {
      $escort = Escort::find($id);

      $escort->delete();

      return response()->json('successfully deleted');
    }
}
