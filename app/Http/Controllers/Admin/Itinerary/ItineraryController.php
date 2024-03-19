<?php
/* 
Created by : Ajay yadav 
Edited by: Manas
Purpose : Manage Itinerary 

*/
namespace App\Http\Controllers\Admin\Itinerary;

use App\Model\Itinerary\Itinerary;
use App\Model\Post\Tag;
use App\Model\Itinerary\Itineraryday;
use App\Model\Itinerary\ItineraryImages;
use App\Model\Tour\Tourtype;
use App\Model\Season\Season;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Traits\ImageTrait;
use Image;
use App\Jobs\Notifications;
use Illuminate\Support\Str;
use App\Http\Requests\Admin\ItineraryRequest;
use App\Http\Controllers\Admin\Location\MapsController;

/**
     *
     * @OA\Tag(
     *     name="Itineraries",
     *     description="API Endpoints of Itineraries"
     * )
*/

class ItineraryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    use ImageTrait;
    public function all($size)
    {

       /* $It = Itinerary::all();
        foreach ($It as $itn) {
            $itinerary = Itinerary::where('id', $itn->id)->first();
            $itinerary->slug = $this->createSlug($itinerary->title);
            $itinerary->save();
        }*/

        return response()->json(Itinerary::select([
            'id','title','source','destination','noofdays'
            ])
            ->latest('updated_at')
            ->paginate($size));
    }
    public function index()
    {
        // return Itinerary::all();
       return response()->json(Itinerary::all());
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
    public function store(ItineraryRequest $request)
    {
        $data = array('traveller_policy_id'=>$request->traveller_policy_id??null,
        'source'=>$request->source, 'destination'=>$request->destination, 'noofdays'=>$request->noofdays,
        'title'=>$request->title, 'description'=> $request->description, 
        'tourtype'=>$request->tourtype, 'food'=>$request->food,
        'hotel_type'=>$request->hotel_type,
        'bus'=>$request->bus??0, 'train'=>$request->train??0,
        'flight'=>$request->flight??0,
        'no_of_nights'=>$request->no_of_nights,
        'single_sharing_base_price'=>$request->single_sharing_base_price,
        'tcs_fee'=>$request->tcs_fee,
        'gst_fee'=>$request->gst_fee,
        'double_sharing_base_price'=>$request->double_sharing_base_price,
        'triple_sharing_base_price'=>$request->triple_sharing_base_price,
        'quad_sharing_base_price'=>$request->quad_sharing_base_price,
        'child_with_mattress_price'=>$request->child_with_mattress_price,
        'child_without_mattress_price'=>$request->child_without_mattress_price,
        'infant_price'=>$request->infant_price,
        'apai_price'=>$request->apai_price,
        'mapai_price'=>$request->mapai_price,
        'cpai_price'=>$request->cpai_price,
        'ep_price'=>$request->ep_price,
        'client_type'=>$request->client_type,
        'meta_title'=>$request->meta_title,
        'meta_description'=>$request->meta_description,
        'detail_photo_alt'=>$request->detail_photo_alt??'',
        'photo_alt'=>$request->photo_alt??'');
        // $data = $this->validateItinerary($request);
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
       /* $data['detail_photo_alt'] = serialize($request->detail_photo_alt);
        $images = array();
        if($request->detail_photo){
            $count = 0;
            foreach($request->detail_photo as $img){
              $images[$count] = $this->AwsFileUpload($img,config('gbi.detail_photo'),$request->detail_photo_alt[$count]);
              $count++;
            }
        }
        $data['detail_photo'] = serialize($images);*/

        $data['detail_photo_alt'] = 'itinerary_image_'.uniqid();
        $data['detail_photo'] = 'itinerary_image_'.uniqid();
       
        if($request->photo){
            $data['photo'] = $this->AwsFileUpload($request->photo,config('gbi.itinerary_image'),$request->photo_alt);
        }
        /*if($request->detail_photo){
            $data['detail_photo'] = $this->AwsFileUpload($request->detail_photo,config('gbi.detail_photo'),$request->detail_photo_alt);
        }*/

        $data['slug'] = $this->createSlug($request->title);

        $itinerary = new Itinerary();
        $id = $itinerary->insertGetId($data);
        $itinerary = Itinerary::where('id',$id)->first();

        $dayModels = [];
        if($request->itinerarydays){
            foreach ($request->itinerarydays as $data) {
                if($data['day_source']){
                    $latlng = MapsController::getLatLng($data['day_source']);
                    $data['source_latitude'] = $latlng['latitude'];
                    $data['source_longitude'] = $latlng['longitude'];
                }
                if($data['day_destination']){
                    $latlng = MapsController::getLatLng($data['day_destination']);
                    $data['destination_latitude'] = $latlng['latitude'];
                    $data['destination_longitude'] = $latlng['longitude'];
                }
                // return $data;
                $dayModels[] = new Itineraryday($data);
            }
            $itinerary->itinerarydays()->saveMany($dayModels);
        }

        // Tour Type
        $tourtypeModels = [];
        foreach ($request->tourtypes as $data) {
            $tourtypeModels[] = $data['id'];
        }
        $tourtypeModels = Tourtype::find($tourtypeModels);
        $itinerary->tourtypes()->attach($tourtypeModels);

        // Tour Season
        $seasonModels = [];
        foreach ($request->seasons as $data) {
            $seasonModels[] = $data['id'];
        }
        $seasonModels = Season::find($seasonModels);
        $itinerary->seasons()->attach($seasonModels);

        $itinerary->meta_keyword = $meta_keyword;

        $itinerary->save();

        // Itinerary Banner Images
        if($request->detail_photo){
            foreach ($request->detail_photo as $img) {
                //$itineraryimagesModels[] = $img;
                $imge = $this->AwsFileUpload($img,config('gbi.detail_photo'),'itinerary_image_'.uniqid());
                $images = new ItineraryImages;
                $images->itinerary_id = $itinerary->id;
                $images->image = $imge;
                $images->save();
            }
            //$itinerary->itineraryimages()->saveMany($itineraryimagesModels);
        }
        $itinerary->tags()->sync($tag_id);

        $notifData = [
            'notification_type' => 'travel',
            'client_type' => $itinerary->client_type,
            'category' => 'itinerary',
            'category_id' => $itinerary->id,
            'title' => $itinerary->title,
            'body' => $itinerary->description,
        ];

        dispatch(new Notifications($notifData));

        $locSource = \GoogleMaps::load('geocoding')
        ->setParam (['address' => $itinerary->source])
        ->get('results.geometry.location');

        $locDestination = \GoogleMaps::load('geocoding')
        ->setParam (['address' => $itinerary->destination])
        ->get('results.geometry.location');

        if($locSource['results']){
            $itinerary->startLoc = $locSource['results'][0]['geometry']['location'];
        }
        if($locDestination['results']){
            $itinerary->endLoc = $locDestination['results'][0]['geometry']['location'];
        }

        $itinerary->save();
        //event(new \App\Events\SendNotification($notifData));

        return response()->json(['success'=>'Successfully added']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Itinerary  $itinerary
     * @return \Illuminate\Http\Response
     */
    public function show(Itinerary $itinerary)
    {
        $itinerary->itinerarydays;
        $itinerary->tourtypes;
        $itinerary->seasons;
        $itinerary->tags;
        $itinerary->itineraryimages;
        return response()->json($itinerary);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Itinerary  $itinerary
     * @return \Illuminate\Http\Response
     */
    public function edit(Itinerary $itinerary)
    {
        $itinerary->itineraryimages;
        $itinerary->itinerarydays;
        $itinerary->tourtypes;
        $itinerary->seasons;
        $itinerary->tags;
        return response()->json($itinerary);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Itinerary  $itinerary
     * @return \Illuminate\Http\Response
     */
    public function update(ItineraryRequest $request, Itinerary $itinerary)
    {
        $data = array('traveller_policy_id'=>$request->traveller_policy_id??$itinerary->traveller_policy_id,
        'source'=>$request->source??$itinerary->source, 'destination'=>$request->destination??$itinerary->destination, 'noofdays'=>$request->noofdays??$itinerary->noofdays,
        'title'=>$request->title??$itinerary->title,  
        'tourtype'=>$request->tourtype??$itinerary->tourtype, 'food'=>$request->food??$itinerary->food,
        'hotel_type'=>$request->hotel_type??$itinerary->hotel_type,
        'bus'=>$request->bus??$itinerary->bus, 'train'=>$request->train??$itinerary->train,
        'flight'=>$request->flight??$itinerary->flight,
        'no_of_nights'=>$request->no_of_nights??$itinerary->no_of_nights,
        'single_sharing_base_price'=>$request->single_sharing_base_price??$itinerary->single_sharing_base_price,
        'tcs_fee'=>$request->tcs_fee??$itinerary->tcs_fee,
        'gst_fee'=>$request->gst_fee??$itinerary->gst_fee,
        'double_sharing_base_price'=>$request->double_sharing_base_price??$itinerary->double_sharing_base_price,
        'triple_sharing_base_price'=>$request->triple_sharing_base_price??$itinerary->triple_sharing_base_price,
        'quad_sharing_base_price'=>$request->quad_sharing_base_price??$itinerary->quad_sharing_base_price,
        'child_with_mattress_price'=>$request->child_with_mattress_price??$itinerary->child_with_mattress_price,
        'child_without_mattress_price'=>$request->child_without_mattress_price??$itinerary->child_without_mattress_price,
        'infant_price'=>$request->infant_price??$itinerary->infant_price,
        'apai_price'=>$request->apai_price??$itinerary->apai_price,
        'mapai_price'=>$request->mapai_price??$itinerary->mapai_price,
        'cpai_price'=>$request->cpai_price??$itinerary->cpai_price,
        'ep_price'=>$request->ep_price??$itinerary->ep_price,
        'client_type'=>$request->client_type??$itinerary->client_type,
        'meta_title'=>$request->meta_title??$itinerary->meta_title,
        'meta_description'=>$request->meta_description??$itinerary->meta_description,
        'detail_photo_alt'=>$request->detail_photo_alt??$itinerary->detail_photo_alt,
        'photo_alt'=>$request->photo_alt??$itinerary->photo_alt);
        // $data = $this->validateItinerary($request);
        //$data = $request->all();
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
        // thumbnail photo upload
        if($request->photo != $itinerary->photo){
            $data['photo'] = $this->AwsFileUpload($request->photo,config('gbi.itinerary_image'),$request->photo_alt);
            $this->AwsDeleteImage($itinerary->photo);
        }else{
            unset($data['photo']);
            unset($data['photo_alt']);
        }
        // detail photo upload
        /*if($request->detail_photo != $itinerary->detail_photo){
            $data['detail_photo'] = $this->AwsFileUpload($request->detail_photo,config('gbi.itinerary_image'),$request->detail_photo_alt);
            $this->AwsDeleteImage($itinerary->detail_photo);
        }else{
            unset($data['detail_photo']);
            unset($data['detail_photo_alt']);
        }*/

        $newImages = array();
        $newAlts = array();

         if($request->newImages){
             $count = 0;
             foreach($request->newImages as $img){
                $newImages[$count] = $this->AwsFileUpload($img,config('gbi.detail_photo'),'itinerary_image_'.uniqid());
                $ItImages = new ItineraryImages;
                $ItImages->itinerary_id = $itinerary->id;
                $ItImages->image = $newImages[$count];
                $ItImages->save();

               //$newAlts[$count] = 'itinerary_image'.uniqid();
               $count++;
             }
             //array_push($data['detail_photo'], $newImages);
             //array_push($data['detail_photo_alt'], $newAlts);
         }
 
         if($request->delImages){
             $count = 0;
             foreach($request->delImages as $img){
                 //$this->AwsDeleteImage($img);
                 $delItImg = ItineraryImages::where('image',$img)->first();
                 $delItImg->delete();
                 $count++;
             }
         }
 
         //$data['detail_photo'] = serialize($data['detail_photo']);
         //$data['detail_photo_alt'] = serialize($data['detail_photo_alt']);

         unset($data['newImages'], $data['delImages']);

         $data['slug'] = $this->createSlug($request->title);

         $itinerary->update($data);
        
        // Itinerary Day 
        $itinerary->itinerarydays()->delete();

        $dayModels = [];
        if($request->itinerarydays){
            foreach ($request->itinerarydays as $data) {
                if($data['day_source']){
                    $latlng = MapsController::getLatLng($data['day_source']);
                    $data['source_latitude'] = $latlng['latitude'];
                    $data['source_longitude'] = $latlng['longitude'];
                }
                if($data['day_destination']){
                    $latlng = MapsController::getLatLng($data['day_destination']);
                    $data['destination_latitude'] = $latlng['latitude'];
                    $data['destination_longitude'] = $latlng['longitude'];
                }
                // return $data;
                $dayModels[] = new Itineraryday($data);
            }
            $itinerary->itinerarydays()->saveMany($dayModels);
        }

        $itinerary->meta_keyword = $meta_keyword;
        $itinerary->save();
        $itinerary->tags()->sync($tag_id);
        

       // Itinerary tour type
        $tourtypeModels = [];
        foreach ($request->tourtypes as $data) {
            $tourtypeModels[] = $data['id'];
        }
        $tourtypeModels = Tourtype::find($tourtypeModels);
        $itinerary->tourtypes()->sync($tourtypeModels);

        // Itinerary season type
        $seasonModels = [];
        foreach ($request->seasons as $data) {
            $seasonModels[] = $data['id'];
        }
        $seasonModels = Season::find($seasonModels);
        $itinerary->seasons()->sync($seasonModels);

        $locSource = \GoogleMaps::load('geocoding')
        ->setParam (['address' => $itinerary->source])
        ->get('results.geometry.location');

        $locDestination = \GoogleMaps::load('geocoding')
        ->setParam (['address' => $itinerary->destination])
        ->get('results.geometry.location');
        if($locSource['results']){
            $itinerary->startLoc = $locSource['results'][0]['geometry']['location'];
        }
        if($locDestination['results']){
            $itinerary->endLoc = $locDestination['results'][0]['geometry']['location'];
        }
        $itinerary->save();

        return response()->json(['message'=>'Successfully Updated']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Itinerary  $itinerary
     * @return \Illuminate\Http\Response
     */
    public function destroy(Itinerary $itinerary)
    {
        $this->AwsDeleteImage($itinerary->photo);
        $this->AwsDeleteImage($itinerary->detail_photo);
        $itinerary->delete();
        return response()->json('successfully deleted');
    }

    //get Itinerary
    public function getItinerary($client_type, $tour_type){
        return response()->json(Itinerary::where(array('client_type'=>$client_type,'tourtype'=>$tour_type))->get(['id','title']));
    }

    public function validateItinerary($request)
    {
      return $this->validate($request, [
            'source' => 'required|min:2|max:100',
            'destination' => 'required|different:source|min:3|max:100',
            'noofdays' => 'required|numeric|min:1|max:15',
            'title' => 'required|min:3|max:150',
            'description' => 'required|min:3',
            'tourtype' => 'required',
            'food' => 'required',
            'photo_alt' => '',
            'detail_photo_alt'=>'',
            'hotel_type'=>'',
            'bus'=>'',
            'train'=>'',
            'flight'=>'',
            'no_of_nights'=>'required|numeric|min:0',
            'single_sharing_base_price'=>'required|numeric|min:0',
            'tcs_fee'=>'required|numeric|min:0',
            'gst_fee'=>'required|numeric|min:0',
            'double_sharing_base_price'=>'required|numeric|min:0',
            'triple_sharing_base_price'=>'required|numeric|min:0',
            'quad_sharing_base_price'=>'required|numeric|min:0',
            'child_with_mattress_price'=>'required|numeric|min:0',
            'child_without_mattress_price'=>'required|numeric|min:0',
            'infant_price'=>'required|numeric|min:0',
            'apai_price'=>'required|numeric|min:0',
            'mapai_price'=>'required|numeric|min:0',
            'cpai_price'=>'required|numeric|min:0',
            'ep_price'=>'required|numeric|min:0',
            'client_type'=>'',
            'meta_title'=>'required',
            'meta_description' => 'required'     
      ]);
    }

    public function createSlug($val){
        $slug = Str::slug($val);
        if (Itinerary::where('slug', $slug)->exists()) {
            $slug = $slug.'-'.Str::random(4);
        }
        return $slug;
    }

    public function pricePerItinerary($itinerary_id){
        try{
            $data = Itinerary::where('id',$itinerary_id)->select([
            'id','tcs_fee','gst_fee','single_sharing_base_price','double_sharing_base_price','triple_sharing_base_price','quad_sharing_base_price','child_with_mattress_price','child_without_mattress_price',
            'infant_price','apai_price','mapai_price','cpai_price','ep_price','price'
            ])->first();
            if($data){
                return response()->json($data);
            }
            else{
                return $this->sendError("Data not exist!", 404);
            }
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }
}




