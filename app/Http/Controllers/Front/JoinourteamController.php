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
use App\Jobs\ContactUsUserJob;
use App\Jobs\JoinOurTeamJob;
use App\Jobs\JoinOurTeamUserJob;
use App\Model\Jobs\JobApplications;

use App\Rules\EmailValidate;
use App\Rules\PhoneNubmerValidate;
use App\Rules\AlphaSpace;
use App\Traits\ImageTrait;
use App\Model\Jobs\JobPositions;

class JoinourteamController extends Controller
{
    use ImageTrait;
    public function resumeSend(Request $request)
    {
       
    	$this->validate($request, [
            'firstname' => 'required|alpha',
    		'lastname' => 'required|alpha',
    		'email' => ['required','email',new EmailValidate],
    		'contactno' => ['required','numeric',new PhoneNubmerValidate],
    		'address' => 'required',
    		'state' => ['required',new AlphaSpace],
    		'city' => ['required',new AlphaSpace],
    		'zipcode' => 'required|numeric',
    		'applyingfor' => 'required',
    		'resume' => 'required',
    		'messagescon' => 'required',
            'current_company'=>'',
            'job_exp'=>'',
            ]);
            
            
            $data = $request->input('resume');// get the base64 file
            $explode = explode(',', $data); // explode file 
            // get the extension of file
            $ext = explode('/',$data)[1]; 
            $extension = explode(';', $ext)[0];
            $valid_extension = ['pdf']; // valid extenion
            
            if(in_array($extension, $valid_extension)){
                $name = $this->AwsFileUpload($data,config('gbi.resume_pdf'),$request->filename);
                $url= \Storage::disk('s3')->url(config('gbi.resume_pdf').$name);
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
			'applyingfor'=>$request->applyingfor,
            'resume'=>$name,
            'messagescon'=>$request->messagescon,
            'current_company'=>$request->current_company,
            'job_exp'=>$request->job_exp,
            'link'=>$url
            );

         JobApplications::create($data);

         $data['emailto'] = config('gbi.gbi_email');
         JoinOurTeamJob::dispatch($data);
         $data['emailto'] = $request->email;
         JoinOurTeamUserJob::dispatch($data);
         return $data;
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
            'name' => ['required',new AlphaSpace],
            'email' => ['required','email',new EmailValidate],
            'mobile' => ['required','numeric',new PhoneNubmerValidate],
            'messagecon' => 'required|min:3',
        ]);
        $data = array(
                'email'=>$request->email,
                'name'=>$request->name,
                'mobile'=>$request->mobile,
                'messagecon'=>$request->messagecon,
                'emailto'=>$request->email
                );
        $data['emailto'] = $request->email; // override emailto for user
        ContactUsUserJob::dispatch($data);
        $data['emailto'] = \config('gbi.gbi_email'); // override emailto for admin
        // contact us mail for admin
        ContactUsJob::dispatch($data);
        return 'succss';
    }

    public function jobs($jobtype)
    {
        if($jobtype == 'technology'){
            $jobtype = 'Technology & Design';
        } else if($jobtype == 'operation'){
            $jobtype = 'Operation';
        } else if($jobtype == 'reservations'){
            $jobtype = 'Reservations';
        } else if($jobtype == 'sales-marketing'){
            $jobtype = 'Sales & Marketing';
        } else if($jobtype == 'finance'){
            $jobtype = 'Finance';
        } else if($jobtype == 'product-project-management'){
            $jobtype = 'Product & Project Management';
        }
        $data = JobPositions::where('job_type', $jobtype)->get();
        return response()->json($data);
    }

    public function sIndex($title)
    {
        $data = JobPositions::where('title', 'like', "%$title%")->get();
        return response()->json($data);
    }

    public function show($id)
    {
        $data = JobPositions::find($id);
        return response()->json($data);
    }
    
}
