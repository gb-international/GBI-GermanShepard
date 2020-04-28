<?php

namespace App\Http\Controllers\Admin\Encyclopedia;

use App\Model\Encyclopedia\Encyclopedia;
use App\Model\Itinerary\Itinerary;
use App\Model\Itinerary\Itinerarypdf;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Image;
class EncyclopediaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Encyclopedia::get());
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
        $thumbnail = '';
        $banner_image = '';
        $image_one = '';
        $image_two = '';
        $image_three = '';
        $image_four = '';
        $image_five = '';
        $image_six = '';
        $image_seven = '';
        $image_eight = '';
        
        if($request->input('thumbnail')){
            $thumbnail = $this->uploadImage($request->input('thumbnail'));
        }
        if($request->input('banner_image')){
            $banner_image = $this->uploadImage($request->input('banner_image'));
        }
        if($request->input('image_one')){
            $image_one = $this->uploadImage($request->input('image_one'));
        }
        if($request->input('image_two')){
            $image_two = $this->uploadImage($request->input('image_two'));
        }
        if($request->input('image_three')){
            $image_three = $this->uploadImage($request->input('image_three'));
        }
        if($request->input('image_four')){
            $image_four = $this->uploadImage($request->input('image_four'));
        }
        if($request->input('image_five')){
            $image_five = $this->uploadImage($request->input('image_five'));
        }
        if($request->input('image_six')){
            $image_six = $this->uploadImage($request->input('image_six'));
        }
        if($request->input('image_seven')){
            $image_seven = $this->uploadImage($request->input('image_seven'));
        }
        if($request->input('image_eight')){
            $image_eight = $this->uploadImage($request->input('image_eight'));
        }
        
        $encyclopedia = New Encyclopedia();
        $encyclopedia->state_name = $request->state_name;
        $encyclopedia->slug = $request->slug;
        $encyclopedia->thumbnail = $thumbnail;
        $encyclopedia->banner_image = $banner_image;
        $encyclopedia->description = $request->description;
        $encyclopedia->map_link = $request->map_link;
        $encyclopedia->image_one = $image_one;
        $encyclopedia->image_two = $image_two;
        $encyclopedia->image_three = $image_three;
        $encyclopedia->image_four = $image_four;
        $encyclopedia->image_five = $image_five;
        $encyclopedia->image_six = $image_six;
        $encyclopedia->image_seven = $image_seven;
        $encyclopedia->image_eight = $image_eight;
        $encyclopedia->save();

        if(count($request->input('files')) > 0){
            $pdf = [];
            foreach ($request->input('files') as $file) {
                $data = ['name'=>$this->uploadPdf($file['filename'],$file['content'])];
                $pdf[] = new Itinerarypdf($data);
                $data = [];
            }
            $encyclopedia->itinerarypdfs()->saveMany($pdf);            
        }
        return response()->json('Successfully Added');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Encyclopedia  $encyclopedia
     * @return \Illuminate\Http\Response
     */
    public function show($encyclopedia)
    {
        $encyclopedia = Encyclopedia::findOrFail($encyclopedia);
        return response()->json($encyclopedia);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Encyclopedia  $encyclopedia
     * @return \Illuminate\Http\Response
     */
    public function edit($encyclopedia)
    {
        return response()->json(Encyclopedia::with('itinerarypdfs')->findOrFail($encyclopedia));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Encyclopedia  $encyclopedia
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$encyclopedia)
    {
        $encyclopedia = Encyclopedia::findOrFail($encyclopedia);
        

        $thumbnail = $encyclopedia->thumbnail;
        $banner_image = $encyclopedia->banner_image;
        $image_one = $encyclopedia->image_one;
        $image_two = $encyclopedia->image_two;
        $image_three = $encyclopedia->image_three;
        $image_four = $encyclopedia->image_four;
        $image_five = $encyclopedia->image_five;
        $image_six = $encyclopedia->image_six;
        $image_seven = $encyclopedia->image_seven;
        $image_eight = $encyclopedia->image_eight;

        
        if($request->thumbnail!=$thumbnail){
            $thumbnail = $this->uploadImage($request->input('thumbnail'));
        }
        if($request->banner_image!=$banner_image){
            $banner_image = $this->uploadImage($request->input('banner_image'));
        }
        if($request->image_one!=$image_one){
            $image_one = $this->uploadImage($request->input('image_one'));
        }
        if($request->image_two!=$image_two){
            $image_two = $this->uploadImage($request->input('image_two'));
        }
        if($request->image_three!=$image_three){
            $image_three = $this->uploadImage($request->input('image_three'));
        }
        if($request->image_four!=$image_four){
            $image_four = $this->uploadImage($request->input('image_four'));
        }
        if($request->image_five!=$image_five){
            $image_five = $this->uploadImage($request->input('image_five'));
        }
        if($request->image_six!=$image_six){
            $image_six = $this->uploadImage($request->input('image_six'));
        }
        if($request->image_seven!=$image_seven){
            $image_seven = $this->uploadImage($request->input('image_seven'));
        }
        if($request->image_eight!=$image_eight){
            $image_eight = $this->uploadImage($request->input('image_eight'));
        }

        $encyclopedia->state_name = $request->state_name;
        $encyclopedia->slug = $request->slug;
        $encyclopedia->thumbnail = $thumbnail;
        $encyclopedia->banner_image = $banner_image;
        $encyclopedia->description = $request->description;
        $encyclopedia->map_link = $request->map_link;
        $encyclopedia->image_one = $image_one;
        $encyclopedia->image_two = $image_two;
        $encyclopedia->image_three = $image_three;
        $encyclopedia->image_four = $image_four;
        $encyclopedia->image_five = $image_five;
        $encyclopedia->image_six = $image_six;
        $encyclopedia->image_seven = $image_seven;
        $encyclopedia->image_eight = $image_eight;
        $encyclopedia->save();




        if(count($request->input('files')) > 0){
            $encyclopedia->itinerarypdfs()->delete();
            $pdf = [];
            foreach ($request->input('files') as $file) {
                $data = ['name'=>$this->uploadPdf($file['filename'],$file['content'])];
                $pdf[] = new Itinerarypdf($data);
                $data = [];
            }
            $encyclopedia->itinerarypdfs()->saveMany($pdf);            
        }


        
        return response()->json('Successfully Added');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Encyclopedia  $encyclopedia
     * @return \Illuminate\Http\Response
     */
    

    public function destroy($encyclopedia)
    {
        Encyclopedia::where('id',$encyclopedia)->delete();
        return response()->json('successfully deleted');
    }

    public function uploadImage($imageData)
    {
        $fileName = Carbon::now()->timestamp . '_' . uniqid() . '.' . explode('/', explode(':', substr($imageData, 0, strpos($imageData, ';')))[1])[1];
        Image::make($imageData)->save(public_path('encyclopedia/').$fileName);
        return $fileName;
        
    }

    public function uploadPdf($filename,$data){
        $explode = explode(',', $data); // explode file 
        $data = base64_decode($explode[1]);
        $url =  public_path().'/encyclopedia/pdf/' . $filename;
        file_put_contents($url , $data);
        return $filename;
    }  


}
