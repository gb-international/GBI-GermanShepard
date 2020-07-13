<?php
  
namespace App\Traits;
use Illuminate\Http\Request;
use Image;

trait ImageTrait {
    public $imgdata;

    public function deleteImg($image,$folder){
        $brandLogo = public_path($folder.'/'.$image);
        if (File::exists($brandLogo)) { 
            unlink($brandLogo);
        }
    }

    public function verifyAndUpload(Request $request, $fieldname = 'image',$folder='') {

        $strpos = strpos($request->$fieldname,';');
        $sub = substr($request->$fieldname,0,$strpos);
        $ex = explode('/',$sub)[1];
        $name = time().".".$ex;
        $img = Image::make($request->image)->resize(210, 120);
        $upload_path = public_path().$folder;
        $image = $upload_path. $hotel->image;
        $img->save($upload_path.$name);
        return $name;
    }

}