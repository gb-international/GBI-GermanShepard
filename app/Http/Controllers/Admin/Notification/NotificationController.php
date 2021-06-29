<?php
/* 
Created by : Manas
Purpose : Manage Notifications 

*/
namespace App\Http\Controllers\Admin\Notification;

use App\User;
use Illuminate\Http\Request;
use App\Model\User\Subscriber;
use App\Model\User\Notification;
use App\Http\Controllers\Controller;

class NotificationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($size)
    {
        return response()->json(Notification::select([
            'id','client_type', 'sub_id', 'notif_type', 'template', 'body'
            ])
            ->latest('updated_at')
            ->paginate($size));
    }
   
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function storeTemplate(Request $request)
    {
                
        $notifTemplate = Template::create($request->all);

        return response()->json($notifTemplate);
    }

     public function storeBody(Request $request)
    {
                
        $notifBody = Body::create($request->all);

        return response()->json($notifBody);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Itinerary  $itinerary
     * @return \Illuminate\Http\Response
     */
    public function show(Itinerary $itinerary)
    {
       
    }

}