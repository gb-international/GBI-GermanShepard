<?php

namespace App\Http\Controllers\Front;
use App\Model\Hotel\BanquetController;
use App\Model\Hotel\BanquetBooking;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Traits\ImageTrait;
use Image;
use Auth;
use App\Rules\EmailValidate;
use App\Rules\PhoneNubmerValidate;
use App\Rules\AlphaSpace;

class BanquetController extends Controller{

    public function searchBanquet(Request $request)
    {
        $data = Banquet::where('city', $request->location)
            ->where('star_category', $request->stars)
            ->get();
        return response()->json($data);
    }

    public function BanquetBooking(Request $request){
        $booking = new BanquetBooking;

        $booking['customer_id'] = $request->user_id;
        $booking['banquet_id'] = $request->banquet_id;
        $booking['price'] = $request->price;
        $booking['person'] = $request->person;
        $booking['adults'] = $request->adults;
        $booking['children'] = $request->children;
        $booking['infants'] = $request->infants;
        $booking['check_in'] = $request->state_date;
        $booking['chceck_out'] = $request->end_date;
        $booking->save();

        return response()->json('Booking query has sent Successfully');        
    }

    // sending email to admin

    public function sendAdminMail($user,$booking){
        $data = array(
                'email'=>$user->email,
                'name'=>$user->name,
                'mobile'=>$user->information->phone_no,
                'check_in'=>$booking->start_date,
                'chceck_out'=>$booking->end_date,
                'person'=>$booking->person,
                'adults'=>$booking->adults,
                'children'=>$booking->children,
                'infants'=>$booking->infants,
                'room'=>$booking->room,
                'emailto'=>'manas_bhowmick@gbinternational.in'
            );
        FrontBookingAdminJob::dispatch($data);
    }

}