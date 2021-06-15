<?php
/* 
Created by : Manas
Purpose : Manage Notifications 

*/
namespace App\Http\Controllers\Admin\Notification;

use Session;
use App\User;
use Illuminate\Http\Request;
use App\Model\User\Subscriber;
use App\Model\Notification\Notifier;
use App\Http\Controllers\Controller;
use App\Model\Notification\Notification;
use App\Http\Resources\NotificationResource;


class NotificationController extends Controller
{

    public function __construct()
    {
        $this->data = [
            'notification_type' => $_COOKIE["gbi_notification_type"],
            'client_type' =>$_COOKIE["gbi_notif_clientType"],
            'category' => $_COOKIE["gbi_notif_category"],
            'category_id' => $_COOKIE["gbi_notif_categoryId"],
            'title' => $_COOKIE["gbi_notif_title"],
            'body' => $_COOKIE["gbi_notif_description"],
        ];
    }

    /**
     * Display a listing of the resource.
     */
    public function index($size)
    {
        return NotificationResource::collection(Notifier::select([
            'id', 'notification_id', 'subscription_id', 'status', 'service'
            ])
            ->latest('updated_at')
            ->paginate($size));
    }
   
    /**
     * Store a newly created resource in storage.
     */
    public function store()
    {
        
    }

    /**
     * Show a resource in view.
     */
    public function show($id)
    {
        $notif = Notifier::find($id);
        return new NotificationResource($notif);
    }

}
