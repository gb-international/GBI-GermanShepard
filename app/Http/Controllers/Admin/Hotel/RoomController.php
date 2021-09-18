<?php
/* 
Created by : Manas
Purpose : Manage Hotel Rooms 

*/
namespace App\Http\Controllers\Admin\Hotel;
use App\Http\Resources\Admin\HotelCollection;
use App\Model\Hotel\HotelNew as Hotel;
use App\Model\Hotel\HotelRooms;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Traits\ImageTrait;
use Image;
use App\Rules\AlphaSpace;

class RoomController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    use ImageTrait;

    public function all($size)
    {
        return response()->json(HotelRooms::select([
            'id','type','name','address','phoneno'
            ])
            ->latest('updated_at')
            ->paginate($size));
    }
    public function index()
    {
        $room = HotelRooms::select('name','id')->get();
        return response()->json($room);
        return RoomCollection::collection(HotelRooms::all());
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
        $data = $this->validateRoom($request);
        if($request->image){
            $data['image'] = $this->AwsFileUpload($request->image,config('gbi.room_image'),$request->alt);
        }
        $room = HotelRooms::create($data);
        return response()->json(['Message'=> 'Successfully Added...']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\room  $room
     * @return \Illuminate\Http\Response
     */
    public function show(HotelRooms $room)
    {
        return response()->json($room);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\room  $room
     * @return \Illuminate\Http\Response
     */
    public function edit(HotelRooms $room)
    {
        return response()->json($room);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\room  $room
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, HotelRooms $room)
    {

        $data = $this->validateRoom($request);
        if($request->image != $room->image){
          
            $data['image'] = $this->AwsFileUpload($request->image,config('gbi.room_image'),$request->alt);
            $this->AwsDeleteImage($room->image);
        }else{
            unset($data['image']);
            unset($data['alt']);
        }
        $room->update($data);
        return response()->json(['message'=>$data]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\room  $room
     * @return \Illuminate\Http\Response
     */
    public function destroy(HotelRooms $room)
    {
        $this->AwsDeleteImage($room->image);
        $room->delete();
        return response()->json('successfully deleted');
    }


    // Validate room

    public function validateRoom($request)
    {
         return $this->validate($request, [

            'type' => 'required',
            'name' => ['required',new AlphaSpace],
            'room_category' => 'required',
            'max_occ' => 'required',
            'description' => 'required',
            'banquet_category' => 'required',
            'amenities' => 'required',
            'description' => 'required',
            'dimensions' => 'required',
            'room_photos' => 'required',
            'amenities' => 'required',
            'booked_from' => 'required',
            'booked_till' => 'required',          
      ]);
    }

}
