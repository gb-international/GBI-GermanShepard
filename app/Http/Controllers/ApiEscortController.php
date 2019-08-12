<?php

namespace App\Http\Controllers;
use App\Http\Resources\EscortCollection;
use Illuminate\Http\Request;
use App\Escort;

class ApiEscortController extends Controller
{
    public function store(Request $request)
    {

      

      return response()->json('successfully added');
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
