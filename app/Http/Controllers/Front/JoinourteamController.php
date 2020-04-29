<?php
/* 
Created by : Ajay yadav 
Purpose : Manage front carrer profile  

*/
namespace App\Http\Controllers\Front;
use App\Http\Controllers\Controller; 
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Url;
use App\Mail\SendMailresume;
use Mail;
use Image;
use PDF;
use Storage;
use Illuminate\Http\Request;

class JoinourteamController extends Controller
{
    public function resumeSend(Request $request)
    {
    	$this->validate($request, [
    		'firstname' => 'required',
    		'lastname' => 'required',
    		'email' => 'required|email',
    		'contactno' => 'required|numeric|min:10',
    		'address' => 'required',
    		'state' => 'required',
    		'city' => 'required',
    		'zipcode' => 'required|numeric',
    		'postvancy' => 'required',
    		'resume' => 'required',
    		'messagescon' => 'required',

    	]);


        $data = $request->input('resume');// get the base64 file
        $explode = explode(',', $data); // explode file 
        // get the extension of file
        $ext = explode('/',$data)[1]; 
        $extension = explode(';', $ext)[0];
        $valid_extension = ['pdf']; // valid extenion

        if(in_array($extension, $valid_extension)){
            $data = base64_decode($explode[1]);
            $fileName = rand(100000,1001238912).".".$extension;
            $url = public_path() . '/resume/' . $fileName;
            file_put_contents($url , $data);
            return response()->json(['success'=>$explode]);
        }else{
            return response()->json(['error'=>'Please Upload doc or pdf file']);
        }
    
	  	$data = array(
			'firstname'=>$request->firstname,
			'lastname'=>$request->lastname,
			'email'=>$request->email,
			'contactno'=>$request->contactno,
			'address'=>$request->address,
			'state'=>$request->state,
			'city'=>$request->city,
			'zipcode'=>$request->zipcode,
			'postvancy'=>$request->postvancy,
			'messagescon'=>$request->messagescon
			);

    	 Mail::to('ajay_yadav@gbinternational.in')->send( new SendMailresume ($data['firstname'], $data['lastname'], $data['email'], $data['contactno'], $data['address'], $data['state'], $data['city'], $data['zipcode'], $data['postvancy'], $data['messagescon'], $url));
     //    return redirect()->back()->with('success','send mail successfully');
    }

    public function word_file(Request $request){
        $data = $request->input('resume');// get the base64 file
        $explode = explode(',', $data); // explode file 
        // get the extension of file
        $ext = explode('/',$data)[1]; 
        $extension = explode(';', $ext)[0];
        $valid_extension = ['pdf', 'doc', 'docx']; // valid extenion
        $data = base64_decode($explode[1]);
        $fileName = rand(100000,1001238912).".".$extension;
        $url = public_path() . '/resume/' . $fileName;
        // file_put_contents($url , $data);

        $phpWord = new \PhpOffice\PhpWord\PhpWord();
        $section = $phpWord->addSection();
        $text = $section->addText($data);
        $objWriter = \PhpOffice\PhpWord\IOFactory::createWriter($phpWord, 'Word2007');
        $objWriter->save('Appdividend.docx');
        return response()->download(public_path('Appdividend.docx'));
       
    }
}
