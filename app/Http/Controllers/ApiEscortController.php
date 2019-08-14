<?php

namespace App\Http\Controllers;
use App\Http\Resources\EscortCollection;
use Illuminate\Http\Request;
use App\Escort;

class ApiEscortController extends Controller
{
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

    public function index()
    {
      return new EscortCollection(Escort::all());
    }

    public function edit($id)
    {
      $escort = Escort::find($id);
      return response()->json($escort);
    }

    public function update($id, Request $request)
    {
      $escort = Escort::find($id);

      $escort->update($request->all());

      return response()->json('successfully updated');
    }

    public function delete($id)
    {
      $escort = Escort::find($id);

      $escort->delete();

      return response()->json('successfully deleted');
    }
}
