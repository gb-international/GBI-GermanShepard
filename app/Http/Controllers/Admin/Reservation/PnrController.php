<?php

namespace App\Http\Controllers\Admin\Reservation;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Reservation\Pnr;

class PnrController extends Controller
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
            'bus_id'=>'required',
            'price'=>'required',
            'source'=>'required',
            'destination' => 'required' ,
            'departure' => 'required',
            'arrival' => 'required' 
        ]);

        $check = Pnr::where(['tour_code' => $request->tour_code, 'bus_id' => $request->bus_id])->get();
        if(count($check->all()) > 0){
            return '1';
        }else{
            Pnr::create($request->all());
            return response()->json('Successfully Created');            
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Pnr  $Pnr
     * @return \Illuminate\Http\Response
     */
    public function show(Pnr $pnr)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Pnr  $Pnr
     * @return \Illuminate\Http\Response
     */
    public function edit(Pnr $pnr)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Bookedbus  $bookedbus
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Pnr $pnr)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Pnr  $Pnr
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pnr $pnr)
    {
        $pnr->delete();
        return response()->json('Deleted');
    }
}
