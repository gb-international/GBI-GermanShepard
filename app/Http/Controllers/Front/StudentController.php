<?php
/* 
Created by : Ajay yadav 
Purpose : Manage front user login and register 

*/
namespace App\Http\Controllers\Front;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller; 
use App\User;
use App\Model\School\School;
use App\Model\School\student;
use Illuminate\Support\Facades\Auth;




class StudentController extends Controller{
    public $successStatus = 200;

    public function studentStore(Request $request){
        $user = Auth::user();
        foreach ($request->all() as $data) {
            $data['user_id'] = $user->id;
            $data['school_id'] = $user->information->school_id;
            student::create($data);
        }
        return response()->json(['success','Data added successfully']);
    }
}
