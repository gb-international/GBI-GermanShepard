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
        $data = $this->data; 
        if($data['notification_type'] == 'posts'){
            $subsribers = Subscriber::where('client_type', $data['client_type'])->where('posts_notification', '1')->get();
            if($subsribers->count() > 0){
                $notification = Notification::create([
                    'category' => $data['category'], 
                    'category_id' => $data['category_id'],
                    'data' => json_encode([
                        'title' => $data['title'],
                        'body' => $data['body'],
                    ])
                ]);
            }
            foreach ($subsribers as $sub) {
                $notifier = Notifier::create([
                    'notification_id' => $notification->id, 
                    'subscription_id' => $sub->id, 
                    'status' => 0, 
                    'service' => 'email',
                ]);
                //Mail::send(new postNotification($data));
                $notifier->status = 1;
                $notifier->save();
            }
        }
        else if($data['notification_type'] == 'promotion'){
            $subsribers = Subscriber::where('client_type', $data['client_type'])->where('posts_notification', '1')->get();
            if($subsribers->count() > 0){
                $notification = Notification::create([
                    'category' => $data['category'], 
                    'category_id' => $data['category_id'],
                    'data' => json_encode([
                        'title' => $data['title'],
                        'body' => $data['body'],
                    ])
                ]);
            }
            foreach ($subsribers as $sub) {
                $notifier = Notifier::create([
                    'notification_id' => $notification->id, 
                    'subscription_id' => $sub->id, 
                    'status' => 0, 
                    'service' => 'email',
                ]);
                Mail::send(new promotionNotification($data));
                $notifier->status = 1;
                $notifier->save();
            }
        }
        else if($data['notification_type'] == 'travel'){
            $subsribers = Subscriber::where('client_type', $data['client_type'])->where('posts_notification', '1')->get();
            if($subsribers->count() > 0){
                $notification = Notification::create([
                    'category' => $data['category'], 
                    'category_id' => $data['category_id'],
                    'data' => json_encode([
                        'title' => $data['title'],
                        'body' => $data['body'],
                    ])
                ]);
            }
            foreach ($subsribers as $sub) {
                $notifier = Notifier::create([
                    'notification_id' => $notification->id, 
                    'subscription_id' => $sub->id, 
                    'status' => 0, 
                    'service' => 'both',
                ]);
                Mail::send(new travelNotification($data));
                $sendsms = new SendSms;
                $sendsms->travelNotification($data);
                $notifier->status = 1;
                $notifier->save();
            }
        }
        else if($data['notification_type'] == 'website'){
            $subsribers = Subscriber::where('client_type', $data['client_type'])->where('posts_notification', '1')->get();
            if($subsribers->count() > 0){
                $notification = Notification::create([
                    'category' => $data['category'], 
                    'category_id' => $data['category_id'],
                    'data' => json_encode([
                        'title' => $data['title'],
                        'body' => $data['body'],
                    ])
                ]);
            }
            foreach ($subsribers as $sub) {
                $notifier = Notifier::create([
                    'notification_id' => $notification->id, 
                    'subscription_id' => $sub->id, 
                    'status' => 0, 
                    'service' => 'email',
                ]);
                Mail::send(new websiteNotification($data));
                $notifier->status = 1;
                $notifier->save();
            }
        }
       // return response()->json($data);
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
