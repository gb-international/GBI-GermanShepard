<?php
/* 
Created by : Ajay yadav 
Purpose : Manage Booked hotel 

*/

namespace App\Http\Controllers\Admin\Reservation;

use App\Model\Reservation\Bookedhotel;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class BookedhotelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        $this->validate($request,[
            'price'=>'required|numeric',
            'tour_id'=>'required|exists:tours,id',
            'tour_code'=>'required|exists:tours,tour_id',
            'check_in'=>'required|date|after:today',
            'check_out'=>'required|date|after_or_equal:check_in',
            'hotel_id' => 'required|exists:hotels,id' 
        ]);
        //$check = Bookedhotel::where(['tour_code' => $request->tour_code, 'hotel_id' => $request->hotel_id])->get();
        /*if(count($check->all()) > 0){
            return '1';
        }else{
            Bookedhotel::create($request->all());
            return response()->json('Successfully Created');            
        }*/
        Bookedhotel::create($request->all());
        return response()->json('Successfully Created');  
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Bookedhotel  $bookedhotel
     * @return \Illuminate\Http\Response
     */
    public function show(Bookedhotel $bookedhotel)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Bookedhotel  $bookedhotel
     * @return \Illuminate\Http\Response
     */
    public function edit(Bookedhotel $bookedhotel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Bookedhotel  $bookedhotel
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Bookedhotel $bookedhotel)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Bookedhotel  $bookedhotel
     * @return \Illuminate\Http\Response
     */
    public function destroy(Bookedhotel $bookedhotel)
    {
        $bookedhotel->delete();
        return response()->json('Deleted');
    }
}
