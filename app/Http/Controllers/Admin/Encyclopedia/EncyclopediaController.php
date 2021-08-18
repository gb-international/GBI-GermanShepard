<?php

/* ************************************************
      Author: Ajay 
      Edited by: Manas
      **************************************************** */
/* Edits: Added country field to json responses, Added Meta Properties and tags */

namespace App\Http\Controllers\Admin\Encyclopedia;

use App\Model\Encyclopedia\Encyclopedia;
use App\Model\Encyclopedia\EncyclopediaImage;
use App\Model\Itinerary\Itinerary;
use App\Model\Itinerary\Itinerarypdf;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use App\Traits\ImageTrait;
use Illuminate\Support\Facades\File;
use App\Model\Post\Tag;
use Image;


class EncyclopediaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    use ImageTrait;
    protected $data;

    public function __construct(){
        $this->data = [];
    }
    public function all($size)
    {
        return response()->json(Encyclopedia::select([
            'id','thumbnail','banner_image','state_name','country','updated_at'
            ])
            ->latest('updated_at')
            ->paginate($size));
    }

    public function index()
    {
        return response()->json(Encyclopedia::select([
            'id','thumbnail','banner_image','state_name','country','updated_at'
            ])
            ->latest('updated_at')
            ->paginate(7));
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
        $this->data = $this->validateEncyclopedia($request);

        $tag_id= array();
        $meta_keyword="";   
        foreach ($request->tags as $tag) {
            if($tag['id'] == ''){
                $tag = Tag::create($tag);
            }
            array_push($tag_id,$tag['id']);
            if($meta_keyword ==""){
                $meta_keyword = $meta_keyword . $tag['title'];
            } else {
                $meta_keyword = $meta_keyword .' '. $tag['title'];
            }
        }

        $this->uploadImages($request);

        $encyclopedia = Encyclopedia::create($this->data);
        $this->uploadMultipleImages($request,$encyclopedia->id);

        $encyclopedia->meta_keyword = $meta_keyword;
        $encyclopedia->save();
        $encyclopedia->tags()->sync($tag_id);

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
        $encyclopedia = Encyclopedia::with(['itinerarypdfs','images'])->findOrFail($encyclopedia);
        $encyclopedia->tags;
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
        $encyclopedia = Encyclopedia::with(['itinerarypdfs','images'])->findOrFail($encyclopedia);
        $encyclopedia->tags;
        return response()->json($encyclopedia);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Encyclopedia  $encyclopedia
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,Encyclopedia $encyclopedia)
    {
        $this->data = $this->validateEncyclopedia($request);
        $tag_id= [];
        $meta_keyword="";   
        foreach ($request->tags as $tag) {
            if($tag['id'] == ''){
                $tag = Tag::create($tag);
            }
            array_push($tag_id,$tag['id']);
            if($meta_keyword ==""){
                $meta_keyword = $meta_keyword . $tag['title'];
            } else {
                $meta_keyword = $meta_keyword .' '. $tag['title'];
            }
        }
        $this->uploadImages($request);
        $encyclopedia->update($this->data);
        $this->uploadMultipleImages($request,$encyclopedia->id);

        $encyclopedia->meta_keyword = $meta_keyword;
        $encyclopedia->save();
        $encyclopedia->tags()->sync($tag_id);

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
    
    public function deleteImage(Request $request)
    {
        $image = EncyclopediaImage::where('id',$request->id)->first();
        $this->AwsDeleteImage($image->image);
        $image->delete();
        return response()->json('successfully deleted');
    }

    
    public function deletePdf(Request $request)
    {
        $pdf_data = Itinerarypdf::where('id',$request->id)->first();
        $pdf = public_path()."/encyclopedia/pdf/$pdf_data->name";
        if (File::exists($pdf)) { 
            unlink($pdf);
        }
        $pdf_data->delete();
        return response()->json('successfully deleted');
    }




    public function uploadPdf($filename,$data){
        $explode = explode(',', $data); // explode file 
        $data = base64_decode($explode[1]);
        $url =  public_path().'/encyclopedia/pdf/' . $filename;
        file_put_contents($url , $data);
        return $filename;
    }  

     public function validateEncyclopedia($request)
    {
      return $this->validate($request, [
            'state_name'=>'required',
            'country'=>'required',
            'description'=>'required',
            'map_link'=>'required',
            'slug'=>'',
            'meta_title'=>'required',
            'meta_description' => 'required'
      ]);
    }

    public function uploadImages($request){

        if($request->thumbnail){
            $imagename = explode('.',$request->thumbnail[0]['name'])[0];
            // $this->data['thumbnail'] = $this->singleFile($request->thumbnail[0]['file'],'/encyclopedia/',$imagename);
            
            $this->data['thumbnail'] = $this->AwsFileUpload($request->thumbnail[0]['file'],config('gbi.encyclopedia_image'),$imagename);
            $this->data['thumbnail_alt'] = $imagename;
        }
        
        if($request->banner_image){
            $imagename = explode('.',$request->banner_image[0]['name'])[0];
            // $this->data['banner_image'] = $this->singleFile($request->banner_image[0]['file'],'/encyclopedia/',$imagename);
            $this->data['banner_image'] = $this->AwsFileUpload($request->banner_image[0]['file'],config('gbi.encyclopedia_image'),$imagename);
            $this->data['banner_image_alt'] = $imagename;
        }
        
    }

    public function uploadMultipleImages($request, $id){
        if(count($request->images) > 0){
            foreach ($request->images as $imagedata) {
                $imagename = explode('.',$imagedata['name'])[0];
                // $image = $this->singleFile($imagedata['file'],'/encyclopedia/',$imagename);

                $image = $this->AwsFileUpload($imagedata['file'],config('gbi.encyclopedia_image'),$imagename);
                EncyclopediaImage::create([
                    'encyclopedia_id'=>$id,
                    'image'=>$image,
                    'alt'=>$imagename
                ]);
            }                
        }
    }

}
