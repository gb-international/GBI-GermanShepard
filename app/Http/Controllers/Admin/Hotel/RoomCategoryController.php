<?php
/*
Created by : Manas
Purpose : Manage Room Category

*/
namespace App\Http\Controllers\Admin\Hotel;
use App\Http\Controllers\Controller;
use App\Model\Hotel\RoomCategory;
use Illuminate\Http\Request;
use App\Traits\ImageTrait;

class RoomCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    use ImageTrait;

    public function all($size)
    {
        return response()->json(RoomCategory::select([
            'id','description','title','updated_at'
            ])
            ->latest('updated_at')
            ->paginate($size));
    }

    public function index()
    {
        return response()->json(RoomCategory::select([
            'id','description','title','updated_at'
            ])
            ->latest('updated_at')
            ->get());
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
        $data = $request->all();

        if($request->image){
            $imagename = explode('.',$request->image[0]['name'])[0];
            //$data['image'] = $this->AwsFileUpload($request->image[0]['file'],config('gbi.hotel_image'),$imagename);
            $data['alt'] = $imagename;
        }
        RoomCategory::create($data);
        return response()->json('succesfull created');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Post\RoomCategory  $rcat
     * @return \Illuminate\Http\Response
     */
    public function show(RoomCategory $rcat)
    {
        return response()->json($rcat);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\Post\RoomCategory  $rcat
     * @return \Illuminate\Http\Response
     */
    public function edit(RoomCategory $rcat)
    {
        return response()->json($rcat);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Post\RoomCategory  $rcat
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, RoomCategory $rcat)
    {
        $data = $request->all();        
        if($request->image){
            $imagename = explode('.',$request->image[0]['name'])[0];
            //$data['image'] = $this->AwsFileUpload($request->image[0]['file'],config('gbi.hotel_image'),$imagename);
            $this->AwsDeleteImage($rcat->image);
        }else{
            unset($data['image']);
        }
        $rcat->update($data);
        return response()->json('succesfull created');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Post\RoomCategory  $rcat
     * @return \Illuminate\Http\Response
     */
    public function destroy(RoomCategory $rcat)
    {
        $this->AwsDeleteImage($rcat->image);
        $rcat->delete();
        return response()->json('successfully deleted');
    }
}
