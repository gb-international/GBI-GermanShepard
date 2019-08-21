<?php

namespace App\Http\Controllers;
use App\Http\Resources\TransportCollection;
use Illuminate\Http\Request;
use App\Transport;

class ApiTransportController extends Controller
{
    public function index(){
    	return new TransportCollection(Transport::all());
    }

    public function create(Request $request){
    	$this->validate($request, [
    		'transType' => 'required',
            'transName' => 'required|min:2|max:100',
            'transLocation' => 'required|min:3|max:100',
            'transPrice' => 'required|numeric|min:1',
            'transContact' => 'required|min:3|max:100',
            'transEmail' => 'required'
	    ]);
	    $transport = new Transport();
          $transport->transType = $request->input('transType');
          $transport->transName = $request->input('transName');
          
          $transport->transLocation = $request->input('transLocation');
          $transport->transPrice = $request->input('transPrice');

          $transport->transContact = $request->input('transContact');
          $transport->transEmail = $request->input('transEmail');
          

          $transport->save();
         return response()->json(['Message'=> 'Successfully Added...']);
    }
}
