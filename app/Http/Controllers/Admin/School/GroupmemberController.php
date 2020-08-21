<?php

namespace App\Http\Controllers\Admin\School;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\School\Groupmember;

class GroupmemberController extends Controller
{
    public function getMember($tour_code){
        return Groupmember::where('tour_id',$tour_code)->get();
    }
    public function updateMember(Request $request){
        $groupmember = Groupmember::where('id',$request->id)->firstOrFail();
        $this->validate($request,[
            'first_name'=>'required',
            'last_name'=>'required',
            'email'=>'required',
            'gender'=>'required'
        ]);
        $groupmember->update($request->all());
        return response()->json('successfull updated');
    }
    public function destroyMember(Request $request){
        $groupmember = Groupmember::where('id',$request->id)->firstOrFail();
        $groupmember->delete();
        return response()->json('successfully delete');
    }

    public function addMember(Request $request){
        return $request->all();
    }
}
