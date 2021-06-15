<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class ActionEvent
{
  use Dispatchable, InteractsWithSockets, SerializesModels;

  /**
    * Create a new event instance.
    *
    * @return void
    */
  public function __construct()
  {
      //
  }

  /**
    * Get the channels the event should broadcast on.
    *
    * @return \Illuminate\Broadcasting\Channel|array
    */
  public function broadcastOn()
  {
      return new PrivateChannel(‘channel-name’);
  }
}

BroadcastOn method is responsible for returning the channels that the event should broadcast on. It should be instances of Channel, PrivateChannel, or PresenceChannel. And also, you can control your broadcast payload by using broadcastWith method to your event.

<?php
namespace App\Events;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;

class ActionEvent implements ShouldBroadcastNow
{
  use Dispatchable, InteractsWithSockets, SerializesModels;

  public $actionId;
  public $actionData;

  /**
    * Create a new event instance.
    *
    * @author Author
    *
    * @return void
    */
  public function __construct($actionId, $actionData)
  {
      $this->actionId = $actionId;
      $this->actionData = $actionData;
  }

  /**
    * Get the channels the event should broadcast on.
    *
    * @author Author
    *
    * @return Channel|array
    */
  public function broadcastOn()
  {
      return new Channel('action-channel-one');
  }

  /**
    * Get the data to broadcast.
    *
    * @author Author
    *
    * @return array
    */
  public function broadcastWith()
  {
      return [
          'actionId' => $this->actionId,    
          'actionData' => $this->actionData,

      ];
  }
}