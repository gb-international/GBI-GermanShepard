<?php
/* 
Created by : Ajay yadav 
Purpose : Manage front user login and register 

*/
namespace App\Http\Controllers\Front;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller; 
use App\User;
use App\Model\User\Information;
use App\Model\Tour\TourUser;
use App\Model\Tour\Tour;
use App\Model\School\School;
use Illuminate\Support\Facades\Auth;
use Validator;
use DB;
use Image;
use GuzzleHttp\Client;
use App\Rules\MatchOldPassword;
use Illuminate\Support\Facades\Hash;



class UserController extends Controller{
    public $successStatus = 200;
    private $id = 'csrikhi@gbinternational.in';
    private $pwd = 'Roger224225g32@';
    /** 
     * login api 
     * 
     * @return \Illuminate\Http\Response 
     */ 
    public function login(){ 
        
        if(Auth::attempt(['email' => request('email'), 'password' => request('password')])){ 
            $user = Auth::user(); 
            $success['token'] =  $user->createToken('MyApp')->accessToken; 
            $success['status'] = $user->status;
            return response()->json(['success' => $success], $this-> successStatus); 
        } 
        else{ 
            return response()->json(['error'=>'Unauthorised'], 401); 
        } 
    }
    /** 
     * Register api 
     * 
     * @return \Illuminate\Http\Response 
     */ 
    public function register(Request $request) 
    { 
        $validator = Validator::make($request->all(), [ 
            'name' => 'required', 
            'email' => 'required|email', 
            'password' => 'required', 
            'c_password' => 'required|same:password', 
        ]);
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }
        $input = $request->all(); 
        $input['password'] = bcrypt($input['password']); 
        $user = User::create($input);

        // Add more information to the informations table
        $more  = new Information();
        $more->user_id = $user->id;
        $more->gbi_link = $request->gbi_link;

        $more->phone_no = $request->phone_no;
        $more->otp = $request->otp;
        $more->varified = '1';
        $more->photo = 'user.png';
        $more->gender = '';
        $more->save();


        // Send welcome message to user on their phonne
        

        $phone = '91'.$request->phone_no;
        $message = "Hey ".$request->name ." Thankyou for registering with GBInternational We value your association";

        $ApiUrl ="https://www.businesssms.co.in/smsaspx?Id=".$this->id."&Pwd=".urlencode($this->pwd)."&PhNo=".$phone."&text=".urlencode($message);                

        $client = new \GuzzleHttp\Client(['verify' => false ]);
        $request = $client->get($ApiUrl);




        // End more information 
        return response()->json('Successfully Registered !!!');
    }

    public function update(Request $request)
    {

        $validator = Validator::make($request->all(), [ 
            'name' => 'required', 
            'email' => 'required|email', 
        ]);

        $user = Auth::user();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->save();
        $information = Information::where('user_id',$user->id)->firstOrFail();

        $information->gbi_link = $request->gbi_link;
        $information->user_profession = $request->user_profession;
        $information->school_id = $request->school_id;
        $information->profession_name = $request->profession_name;
        $information->profession_address = $request->profession_address;
        $information->institution_code = $request->institution_code;
        $information->phone_no = $request->phone_no;
        $information->father_name = $request->father_name;
        $information->mother_name = $request->mother_name;
        $information->dob = $request->dob;
        $information->address = $request->address;
        $information->city = $request->city;
        $information->state = $request->state;
        $information->country = $request->country;
        $information->zip_code = $request->zip_code;
        $information->user_class = $request->user_class;
        $information->admission_year = $request->admission_year;
        $information->gender = $request->gender;
        $information->save();
        return response()->json('Successuflly updated');

    }

    public function UserImage(Request $request){
        $user = Auth::user();
       

        $strpos = strpos($request->input('photo'),';');
        $sub = substr($request->input('photo'),0,$strpos);
        $ex = explode('/',$sub)[1];
        $name = time().".".$ex;
        $img = Image::make($request->input('photo'))->resize(138, 138);
        $upload_path = public_path()."/uploadimage/";
        $img->save($upload_path.$name);

        $information = Information::where('user_id', $user->id)->first();

        $information->photo = $name;
        $information->save();
        return response()->json(['photo'=>$name]);
    }
    // User Edit 
/** 
     * details api 
     * 
     * @return \Illuminate\Http\Response 
     */ 
    public function details() 
    { 
        $user = Auth::user();
        $information = $user->information;
        $search = $user->search;
        return response()->json(['success' => $user], $this-> successStatus); 
    } 

    public function show(){
        $user = Auth::user();
        $information = $user->information;
        return response()->json(['success' => $user], $this-> successStatus); 
    }
    /// user more information on model from model
    public function infoUpdate(Request $request){
        $user = Auth::user();
        $user->status = 1;
        $information = Information::where('user_id', $user->id)->first();
        $information->user_profession = $request->user_profession;
        $information->school_id = $request->school_id;
        $information->profession_name = $request->profession_name;
        $information->profession_address = $request->profession_address;

        if($request->school_id == 'other'){
            $this->validate($request,[
                'profession_name'=>'required|unique:schools,school_name',
                'profession_address' => 'required'
            ]);
            $data = ['school_name'=>$request->profession_name,'address'=>$request->profession_address];
            $school = School::create($data);
            $information->school_id = $school->id;
        }
        $information->institution_code = $request->institution_code;
        

        $information->save();
        $user->save();
        return response()->json('success');
    }
    public function tourList(Request $request){
        $user = Auth::user();
        $travel = $user->UserTravel->first();

        $tour = Tour::with('itinerary','itinerary.itinerarydays','bookedhotels','bookedhotels.hotel','bookedflights','bookedflights.flight')->where("travel_code",$travel->travel_code)->get();
        return response()->json($tour);
    }

    public function tourListSave(Request $request){
        $this->validate($request, [ 
            'travel_code' => 'required',
        ]);
        $user = Auth::user();
        $data = ['user_id'=>$user->id,'travel_code'=>$request->travel_code];
        $travel = TourUser::where($data)->get();
        if(count($travel) != 0){
            return response()->json('error');
        }
        $tour = Tour::where('travel_code',$request->travel_code)->get();
        if(count($tour) == 0){
            return response()->json('error');
        }        
        TourUser::create($data);
        return response()->json(['success'=>"success"]);   
    }

    public function UpdatePassword(Request $request){
        $user = Auth::user();
        $request->validate([
            'current_password' => ['required', new MatchOldPassword($user)],
            'new_password' => ['required'],
            'confirm_password' => ['same:new_password'],
        ]);
        $user->update(['password'=> Hash::make($request->new_password)]);   
        return response()->json('Password change successfully.');
    }
}
