<?php
/* 
Created by : Ajay yadav 
Purpose : Manage Hotel 

*/
namespace App\Http\Controllers\Admin\Hotel;
use App\Http\Resources\Admin\HotelCollection;
use App\Model\Hotel\Hotel;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Traits\ImageTrait;
use Image;

use App\Rules\EmailValidate;
use App\Rules\PhoneNubmerValidate;
use App\Rules\AlphaSpace;
class HotelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    use ImageTrait;

    public function all($size)
    {
<<<<<<< Updated upstream
        return response()->json(Hotel::select([
            'id','type','name','address','phoneno'
            ])
            ->latest('updated_at')
            ->paginate($size));
=======
        $state = str_replace('-', ' ', $state);
        $data = Hotel::where('state', $state)
        ->latest('updated_at')
        ->paginate($size);
        foreach ($data as $d){
            $d->images = unserialize($d->images);
            $d->banquet_categories = unserialize($d->banquet_categories);
            $d->amenities = unserialize($d->amenities);
            $d->alt = unserialize($d->alt);
            //$d->meta_keywords = unserialize($d->meta_keywords);
            $d->room_categories = unserialize($d->room_categories);
        }
        return response()->json($data);
>>>>>>> Stashed changes
    }
    public function index()
    {
        $hotel = Hotel::select('name','id')->get();
        return response()->json($hotel);
        return HotelCollection::collection(Hotel::all());
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
<<<<<<< Updated upstream
        $data = $this->validateHotel($request);
        if($request->image){
            $data['image'] = $this->AwsFileUpload($request->image,config('gbi.hotel_image'),$request->alt);
=======
        //$data = $this->validateHotel($request);
        $data = $request->all();
        //$data['meta_keywords'] = serialize($request->meta_keywords);
        $data['room_categories'] = serialize($request->room_categories);
        $data['banquet_categories'] = serialize($request->banquet_categories);
        $data['amenities'] = serialize($request->amenities);
        $data['alt'] = serialize($request->alt);

        $images = array();
        if($request->images){
            $count = 0;
            foreach($request->images as $img){
              $images[$count] = $this->AwsFileUpload($img,config('gbi.hotel_image'),$request->alt[$count]);
              $count++;
            }
>>>>>>> Stashed changes
        }
        $hotel = Hotel::create($data);
        return response()->json(['Message'=> 'Successfully Added...']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\hotel  $hotel
     * @return \Illuminate\Http\Response
     */
    public function show(Hotel $hotel)
    {
<<<<<<< Updated upstream
=======
        $d->images = unserialize($d->images);
        $d->banquet_categories = unserialize($d->banquet_categories);
        $d->amenities = unserialize($d->amenities);
        $d->alt = unserialize($d->alt);
        //$d->meta_keywords = unserialize($d->meta_keywords);
        $d->room_categories = unserialize($d->room_categories);
>>>>>>> Stashed changes
        return response()->json($hotel);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\hotel  $hotel
     * @return \Illuminate\Http\Response
     */
    public function edit(Hotel $hotel)
    {
<<<<<<< Updated upstream
=======
        $hotel->images = unserialize($hotel->images);
        $hotel->banquet_categories = unserialize($hotel->banquet_categories);
        $hotel->amenities = unserialize($hotel->amenities);
        $hotel->alt = unserialize($hotel->alt);
        //$hotel->meta_keywords = unserialize($hotel->meta_keywords);
        $hotel->room_categories = unserialize($hotel->room_categories);
>>>>>>> Stashed changes
        return response()->json($hotel);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\hotel  $hotel
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Hotel $hotel)
    {

<<<<<<< Updated upstream
        $data = $this->validateHotel($request);
        if($request->image != $hotel->image){
          
            $data['image'] = $this->AwsFileUpload($request->image,config('gbi.hotel_image'),$request->alt);
            $this->AwsDeleteImage($hotel->image);
        }else{
            unset($data['image']);
            unset($data['alt']);
=======
        //$data = $this->validateHotel($request);
        $data = $request->except(['newImages', 'delImages']);
        //$data->meta_keywords = serialize($data->meta_keywords);
        $data['room_categories'] = serialize($request->room_categories);
        $data['banquet_categories'] = serialize($request->banquet_categories);
        $data['amenities'] = serialize($request->amenities);
        $data['alt'] = serialize($request->alt);

        $images = $request->images;

        if($request->newImages){
            $count = 0;
            //$c2 = count($request->images);
            foreach($request->newImages as $img){
              $image = $this->AwsFileUpload($img,config('gbi.hotel_image'),$request->alt[$count]);
              array_push($images, $image);
              $count++;
            }
        }
        if($request->delImages){
            $count = 0;
            foreach($request->delImages as $img){
              if($img){
                $this->AwsDeleteImage($img);
                $count++;   
              }
            }
>>>>>>> Stashed changes
        }
        $data['images'] = serialize($images);
        $hotel->update($data);
        return response()->json(['message'=>$data]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\hotel  $hotel
     * @return \Illuminate\Http\Response
     */
    public function destroy(Hotel $hotel)
    {
        $images = unserialize($hotel->images);
        $hotel->delete();
        if($images){
            foreach ($images as $img){
                $this->AwsDeleteImage($img);
            }
        }
        return response()->json('successfully deleted');
    }

    // Validate hotel

    public function validateHotel($request)
    {
         return $this->validate($request, [

            'address' => 'required|min:3',
            'type' => 'required',
            'name' => ['required',new AlphaSpace],
            'state'=>'required',
            'city' =>'required',
            'address' => 'required',
            'phoneno' => ['required','numeric',new PhoneNubmerValidate],
            'email' => ['required','email',new EmailValidate],
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
