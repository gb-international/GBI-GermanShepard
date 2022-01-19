<?php
/* 
Created by : Manas
Purpose : Manage Banquets 

*/
namespace App\Http\Controllers\Admin\Hotel;
use App\Model\Hotel\Banquet;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Traits\ImageTrait;
use Image;
use App\Rules\EmailValidate;
use App\Rules\PhoneNubmerValidate;
use App\Rules\AlphaSpace;

class BanquetController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    use ImageTrait;

    public function all($size)
    {
        return response()->json(Banquet::select([
            'id','name','address','phoneno', 'star_category'
            ])
            ->latest('updated_at')
            ->paginate($size));
    }
    public function index()
    {
        $banquet = Banquet::select('id','name','address','phoneno', 'star_category')->get();
        return response()->json($banquet);
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
        $data = $this->validateBanquet($request);
        if($request->image){
            $data['image'] = $this->AwsFileUpload($request->image,config('gbi.banquet_image'),$request->alt);
        }
        $banquet = Banquet::create($data);
        return response()->json(['Message'=> 'Successfully Added...']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\banquet  $banquet
     * @return \Illuminate\Http\Response
     */
    public function show(Banquet $banquet)
    {
        return response()->json($banquet);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\banquet  $banquet
     * @return \Illuminate\Http\Response
     */
    public function edit(Banquet $banquet)
    {
        return response()->json($banquet);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\banquet  $banquet
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Banquet $banquet)
    {

        $data = $this->validateBanquet($request);
        if($request->image != $banquet->image){
          
            $data['image'] = $this->AwsFileUpload($request->image,config('gbi.banquet_image'),$request->alt);
            $this->AwsDeleteImage($banquet->image);
        }else{
            unset($data['image']);
            unset($data['alt']);
        }
        $banquet->update($data);
        return response()->json(['message'=>$data]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\banquet  $banquet
     * @return \Illuminate\Http\Response
     */
    public function destroy(Banquet $banquet)
    {
        $this->AwsDeleteImage($banquet->image);
        $banquet->delete();
        return response()->json('successfully deleted');
    }


    // Validate banquet

    public function validateBanquet($request)
    {
         return $this->validate($request, [

            'hotel_id' => '',
            'name' => ['required',new AlphaSpace],
            'address' => 'required',
            'phoneno' => ['required','numeric',new PhoneNubmerValidate],
            'email' => ['required','email',new EmailValidate],
            'banquet_category' => 'required',
            'star_category' => 'required',
            'amenities' => 'required',
            'image' => 'required',
            'description' => 'required',
            'dimensions' => 'required',
            'check_in' => 'required',
            'check_out' => 'required',
            'price' => 'required',
          
      ]);
    }

}
