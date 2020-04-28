<?php
/* 
Created by : Ajay yadav 
Purpose : Manage Hotel 

*/
namespace App\Http\Controllers\Admin\Hotel;
use App\Http\Resources\HotelCollection;
use App\Model\Hotel\hotel;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class HotelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new hotelCollection(hotel::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        hotel::create($this->validateHotel($request));
        return response()->json(['Message'=> 'Successfully Added...']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\hotel  $hotel
     * @return \Illuminate\Http\Response
     */
    public function show(hotel $hotel)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\hotel  $hotel
     * @return \Illuminate\Http\Response
     */
    public function edit(hotel $hotel)
    {
        return response()->json($hotel);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\hotel  $hotel
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, hotel $hotel)
    {
        $data = $hotel->update($this->validateHotel($request));
        return response()->json(['message'=>$data]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\hotel  $hotel
     * @return \Illuminate\Http\Response
     */
    public function destroy(hotel $hotel)
    {
        $hotel->delete();
        return response()->json('successfully deleted');
    }


    // Validate hotel

    public function validateHotel($request)
    {
      return $this->validate($request, [
          'type' => 'required',
          'name' => 'required|min:3|max:100',
          'state'=>'required',
          'city' =>'required',
          'address' => 'required',
          'phoneno' => 'required|numeric|digits:10',
          'email' => 'required',
          'room'=>'required|numeric|min:1',

          'apai_single' => 'required',
          'apai_double' => 'required',
          'apai_triple' => 'required',
          'apai_quad' => 'required',

          'mapai_single' => 'required',
          'mapai_double' => 'required',
          'mapai_triple' => 'required',
          'mapai_quad' => 'required',

          'cpai_single' => 'required',
          'cpai_double' => 'required',
          'cpai_triple' => 'required',
          'cpai_quad' => 'required',
          
      ]);
    }

}
