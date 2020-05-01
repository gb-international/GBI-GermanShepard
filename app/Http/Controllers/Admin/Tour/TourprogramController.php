<?php

namespace App\Http\Controllers\Admin\Tour;

use App\Model\Tour\Tourprogram;
use App\Model\Itinerary\Itinerary;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Image;

class TourprogramController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Tourprogram::get());
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
        $validate = $this->validate($request,[
            'title'=>'required',
            'description'=>'required'
        ]);

        $validate['image'] = $this->uploadImage($request->input('image'));
        $tourprogram = Tourprogram::create($validate);

        $data = [];
        foreach ($request->itinerary as $itinerary) {
            $data[] = $itinerary['id'];
        }
        $data = Itinerary::find($data);
        $tourprogram->itinerary()->attach($data);
        return response()->json('Successfully Added');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Tourprogram  $tourprogram
     * @return \Illuminate\Http\Response
     */
    public function show(Tourprogram $tourprogram)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Tourprogram  $tourprogram
     * @return \Illuminate\Http\Response
     */
    public function edit(Tourprogram $tourprogram)
    {
        $tourprogram->itinerary;
        return response()->json($tourprogram);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Tourprogram  $tourprogram
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Tourprogram $tourprogram)
    {
        $validate = $this->validate($request,[
            'title'=>'required',
            'description'=>'required'
        ]);
        $validate['image'] = $tourprogram->image;

        if($request->input('image') != $validate['image']){
            $validate['image'] = $this->uploadImage($request->input('image'));
        }

        $tourprogram->update($validate);
        $data = [];
        foreach ($request->itinerary as $itinerary) {
            $data[] = $itinerary['id'];
        }
        $data = Itinerary::find($data);
        $tourprogram->itinerary()->sync($data);
        return response()->json('Successfully Added');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Tourprogram  $tourprogram
     * @return \Illuminate\Http\Response
     */
    public function destroy(Tourprogram $tourprogram)
    {
        $tourprogram->delete();
        return response()->json('successfully deleted');
    }

    public function uploadImage($imageData)
    {
        $fileName = Carbon::now()->timestamp . '_' . uniqid() . '.' . explode('/', explode(':', substr($imageData, 0, strpos($imageData, ';')))[1])[1];
        Image::make($imageData)->save(public_path('images/tourprogram/').$fileName);
        return $fileName;
        
    }
}
