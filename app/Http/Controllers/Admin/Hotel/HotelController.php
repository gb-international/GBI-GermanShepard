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
use Image;
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
       $hotel = hotel::create($this->validateHotel($request));

       if($request->image!=$hotel->image){
            $strpos = strpos($request->image,';');
            $sub = substr($request->image,0,$strpos);
            $ex = explode('/',$sub)[1];
            $name = time().".".$ex;
            $img = Image::make($request->image)->resize(210, 120);
            $upload_path = public_path()."/images/hotel/";
            $image = $upload_path. $hotel->image;
            $img->save($upload_path.$name);
        }else{
            $name = $hotel->image;
        }
        $hotel->image = $name;
        $hotel->save();

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
        if($request->image!=$hotel->image){
            $strpos = strpos($request->image,';');
            $sub = substr($request->image,0,$strpos);
            $ex = explode('/',$sub)[1];
            $name = time().".".$ex;
            $img = Image::make($request->image)->resize(210, 120);
            $upload_path = public_path()."/images/hotel/";
            $image = $upload_path. $hotel->image;
            $img->save($upload_path.$name);

            if(file_exists($image)){
                @unlink($image);
            }
        }else{
            $name = $hotel->image;
        }
        $hotel->image = $name;
        $hotel->save();


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
          'phoneno' => 'required',
          'email' => 'required',
          'room'=>'required|numeric|min:1',

          'apai_single' => '',
          'apai_double' => '',
          'apai_triple' => '',
          'apai_quad' => '',

          'mapai_single' => '',
          'mapai_double' => '',
          'mapai_triple' => '',
          'mapai_quad' => '',

          'cpai_single' => '',
          'cpai_double' => '',
          'cpai_triple' => '',
          'cpai_quad' => '',
          
      ]);
    }

}
