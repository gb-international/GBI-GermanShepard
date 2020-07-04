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
use App\mail\sendMail;
use Illuminate\Http\Request;
use App\Jobs\ContactUsJob;
use App\Jobs\JoinOurTeamJob;

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
            $url = url('/').'/resume/'.$fileName;
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
            'messagescon'=>$request->messagescon,
            'link'=>$url,
            'emailto'=>'ajay_yadav@gbinternational.in'
            );
         JoinOurTeamJob::dispatch($data);
         return 'success';
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

    public function contactUs(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email',
            'mobile' => 'required|numeric|min:10',
            'messagecon' => 'required',
        ]);

        $data = array(
                'email'=>$request->email,
                'name'=>$request->name,
                'mobile'=>$request->mobile,
                'messagecon'=>$request->messagecon,
                'emailto'=>'ajay_yadav@gbinternational.in'
                );

        ContactUsJob::dispatch($data);
        return 'succss';
    }
    
}
