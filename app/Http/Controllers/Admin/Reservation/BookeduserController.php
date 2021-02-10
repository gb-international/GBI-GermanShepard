<?php

namespace App\Http\Controllers\Admin\Reservation;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Tour\Schoolbankdetail;
use App\Model\Tour\Tour;
use App\Model\Tour\Userpayment;
use App\Model\Tour\TourUser;

class BookeduserController extends Controller
{
    public function all($tour_id)
    {
        $code=Tour::where('tour_id',$tour_id)->select('travel_code')->first();
        $data = TourUser::where('travel_code',$code->travel_code)
            ->with('user:id,name')
            ->get();
        foreach ($data as $d ) {
            $payment = Userpayment::where(['user_id'=>$d->user_id,'tour_code'=>$tour_id])->first();
            $d['payment'] = $payment;
        }
        $alldata['data'] = $data;
        return response()->json($alldata);
    }  

    public function edit($id)
    {
        $data = TourUser::where('id',$id)->with('tour:travel_code,tour_id')->first();
        $payment = Userpayment::where(['user_id'=>$data->user_id,'tour_code'=>$data->tour->tour_id])->first();
        return response()->json($payment);
    }
    public function show($id)
    {

        $tour = TourUser::where('id',$id)
            ->with('tour:travel_code,tour_id,school_id','user:id,name')->first();

        $data = Userpayment::where(['user_id'=>$tour->user_id,'tour_code'=>$tour->tour->tour_id])->first();
        $tour['payment'] = $data;
        return response()->json($tour);
    }
    public function update(Request $request,$id){
        $tour = TourUser::where('id',$id)->with('tour:travel_code,tour_id,school_id')->first();
        $data = Userpayment::where(['user_id'=>$tour->user_id,'tour_code'=>$tour->tour->tour_id])->first();
        if(!$data){
            $base = $request->all();
            $base['user_id'] = $tour->user_id;
            $base['school_id'] = $tour->tour->school_id;
            $base['tour_code'] = $tour->tour->tour_id;
            Userpayment::create($base);
        }else{
            $data->update($request->all());
        }
        return response()->json('updated successfully');
    }
    public function destroy(TourUser $touruser)
    {
        $touruser->delete();
        return response()->json('successfully deleted');
    }
    public function bankdetails($tour_code){
        $data = Schoolbankdetail::Banks($tour_code)->get();
        return response()->json($data);
    }

}
