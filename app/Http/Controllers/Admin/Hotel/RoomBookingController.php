<?php
/* 
Created by : Manas
Purpose : Manage Room Booking

*/

namespace App\Http\Controllers\Admin\Hotel;

use App\Model\Hotel\BookedRooms;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class RoomBookingController extends Controller
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
            'price'=>'required',
            'check_in'=>'required',
            'check_out'=>'required',
            'hotel_id' => 'required' 
        ]);
        $check = BookedRooms::where(['tour_code' => $request->tour_code, 'hotel_id' => $request->hotel_id])->get();
        if(count($check->all()) > 0){
            return '1';
        }else{
            BookedRooms::create($request->all());
            return response()->json('Successfully Created');            
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\BookedRooms  $bookedroom
     * @return \Illuminate\Http\Response
     */
    public function show(BookedRooms $bookedroom)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\BookedRooms  $bookedroom
     * @return \Illuminate\Http\Response
     */
    public function edit(BookedRooms $bookedroom)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\BookedRooms  $bookedroom
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, BookedRooms $bookedroom)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\BookedRooms  $bookedroom
     * @return \Illuminate\Http\Response
     */
    public function destroy(BookedRooms $bookedroom)
    {
        $bookedroom->delete();
        return response()->json('Deleted');
    }
}
