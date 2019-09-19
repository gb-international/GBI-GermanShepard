<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Tour;
use App\Itinerary;
use App\User;
use App\Search;
use App\UserMoreInfo;
use Auth;
use DB;
use Image;

class FrontController extends Controller
{
    // Check Login for the user
	public function checklogin(Request $request){
		$this->validate($request, [
	      'email'   => 'required|email',
	      'password'  => 'required|alphaNum|min:3'
	     ]);

		$user_data = array(
	      'email'  => $request->get('email'),
	      'password' => $request->get('password')
	    );
		if(Auth::attempt($user_data)){
			$user = User::find(Auth::user()->id);
            Auth::login($user);
            
			return response()->json(['id'=>Auth::user()->id,'user_role'=>Auth::user()->user_role]);
	    }
	    else{
	    	return response()->json(['msg', 'Incorrect Login Details'])->setStatusCode(404);
	    }
	}
	// Logout Function for the user to logout the user
	public function logout(){
	    Auth::logout();
    }

    // Register user 
    public function UserRegister(Request $request){
  
    	$this->validate($request, [
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'phone_no'=>'required',
            'otp' => 'required',
            'password' => 'required|confirmed|min:6'
        ]);

        $user = User::create(request(['name', 'email', 'password']));        
        auth()->login($user);

        $more = new UserMoreInfo();
        $more->user_id =  Auth::user()->id;
        $more->gbi_link = $request->gbi_link;
        $more->phone_no = $request->phone_no;
        $more->otp = $request->otp;
        $more->varified = '1';
        $more->photo = '';
        $more->gender = '';

        $more->save();
        return response()->json(['id'=> Auth::user()->id]);
    }

    // Get the user Tour list 
    public function user_tour_list($id){

    	$data = Tour::leftjoin('itineraries', 'itineraries.id', '=', 'tours.itinerary_id')
    	->select('itineraries.source','itineraries.destination','itineraries.title','itineraries.photo','tours.id','tours.tour_start_date','tours.tour_end_date','tours.tour_status')
		    ->where('tours.student_id',$id)->orderBy('tours.id')->get();

		return response()->json($data);
    }

    public function userdata($id){
    	//$id = Auth::user()->id;
    	if(isset($id)){

	        $data = User::leftjoin('user_more_infos', 'users.id', '=', 'user_more_infos.user_id')
	            ->select('users.name','users.email','user_more_infos.phone_no','user_more_infos.photo')
	            ->where('users.id',$id)->get();


	        // Upcoming Tour 
	        // $from = date('01/09/2019');
	        // $to = date('29/09/2019');
	        // $upcoming_tour =  Tour::leftjoin('itineraries', 'tours.itinerary_id', "=", 'itineraries.id')
	        //     ->whereBetween('tours.tour_start_date', [$from, $to])
	        //     ->orderBy('tours.tour_start_date','ASC')
	        //     ->take(8)
	        //     ->get(['itineraries.id','itineraries.title','itineraries.photo']);

	        $upcoming_tour = Tour::leftjoin('itineraries', 'itineraries.id', '=', 'tours.itinerary_id')
	            ->select('itineraries.title','itineraries.photo','tours.itinerary_id','tours.tour_start_date')
	            ->orderBy('tours.tour_start_date','desc')
	            ->where('tour_status','1')
	            ->take(3)
	            ->get();


	        // Popular Detination 
        	$popular_detination = DB::table('tours')
			    ->selectRaw("itineraries.title,'itineraries.photo',tours.itinerary_id, COUNT('tours.itinerary_id') as itineraryCount")
			    ->join('itineraries', 'itineraries.id', '=', 'tours.itinerary_id')
			    ->groupBy('itineraries.title','tours.itinerary_id','itineraries.photo')
			    ->orderBy('itineraryCount', 'desc')
			    ->take(3)
			    ->get();

	        // User Recent Search
			$recent_search = Search::leftjoin('itineraries', 'itineraries.id', '=', 'searches.search')
	            ->select('itineraries.title','itineraries.photo','searches.search')
	            ->where('searches.user_id',$id)
	            ->orderBy('searches.id','desc')
	            ->take(3)
	            ->get();

	        // Return data
	            return response()->json(['data'=>$data,'upcoming_tour'=>$upcoming_tour,'popular_detination'=>$popular_detination,'recent_search'=>$recent_search]);
	    }else{
	    	return response()->json('message','Please Enter user id');
	    }
    }
    public function UserImage(Request $request,$id){


            $strpos = strpos($request->input('photo'),';');
            $sub = substr($request->input('photo'),0,$strpos);
            $ex = explode('/',$sub)[1];
            $name = time().".".$ex;
            $img = Image::make($request->input('photo'))->resize(138, 138);
            $upload_path = public_path()."/uploadimage/";
            $img->save($upload_path.$name);
  			
    	    UserMoreInfo::where('user_id', $id)->update(array('photo' => $name));


    	    return response()->json(['photo'=>$name]);
    }

}
