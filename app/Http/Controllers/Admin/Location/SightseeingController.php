<?php

namespace App\Http\Controllers\Admin\Location;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Resources\SightseeingCollection;
use App\Model\Reservation\sightseeing;
use App\Traits\ImageTrait;

class SightseeingController extends Controller
{
    use ImageTrait;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new SightseeingCollection(sightseeing::with(['city','state'])->get());
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
        $sightseeing = sightseeing::create($this->validateSightseeing($request));

       if($request->image!=$sightseeing->image){
            $name = $this->singleFile($request->image,'/images/sightseeing/',$request->alt);
        }else{
            $name = $sightseeing->image;
        }
        $sightseeing->image = $name;
        $sightseeing->save();
        return response()->json(['Message'=> 'Successfully Added...']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(sightseeing $sightseeing)
    {
        return response()->json($sightseeing);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, sightseeing $sightseeing)
    {
        $sightseeing->update($this->validateSightseeing($request));
       if($request->image!=$sightseeing->image){
            $name = $this->singleFile($request->image,'/images/sightseeing/',$request->alt);
            $this->deleteImg("/images/sightseeing/{$sightseeing->image}");
        }else{
            $name = $sightseeing->image;
        }
        $sightseeing->image = $name;
        $sightseeing->save();
        return response()->json(['success'=>'Successfully update']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(sightseeing $sightseeing)
    {
        $this->deleteImg("/images/sightseeing/{$sightseeing->image}");
        $sightseeing->delete();
        return response()->json(['success','Brand deleted successfully...']);
    }

    // Validate sightseeing

    public function validateSightseeing($request)
    {
      return $this->validate($request, [
          'state_id' => 'required',
          'city_id' => 'required',
          'name' => 'required|min:3|max:100',
          'address'=>'required',
          'description'=>'required',
          'adult_price' => '',
          'child_price' => '',
          'alt'=>'',
          
      ]);
    }
}
