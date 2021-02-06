<?php

namespace App\Http\Controllers\Admin\Reservation;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Reservation\Bookeduser;
use App\Model\Tour\Schoolbankdetail;

class BookeduserController extends Controller
{
    public function all($tour_code)
    {
        $data = Bookeduser::where('tour_code',$tour_code)
            ->with('user')
            ->get();
        return response()->json($data);
    }    
    public function edit($id)
    {
        $data = Bookeduser::find($id);
        return response()->json($data);
    }
    public function show($id)
    {
        $data = Bookeduser::with([
            'user'=>function($user){
                $user->select(['users.name','users.id']);
        }])
        ->find($id);
        return response()->json($data);
    }
    public function update(Request $request,$id){
        $data = Bookeduser::where('id',$id)->first();
        $data->update($request->all());
        return response()->json('updated successfully');
    }
    public function destroy(Bookeduser $Bookeduser)
    {
        $Bookeduser->delete();
        return response()->json('successfully deleted');
    }
    public function bankdetails($tour_code){
        $data = Schoolbankdetail::Banks($tour_code)->get();
        return response()->json($data);
    }

}
