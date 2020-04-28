<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\http\request;

class SendMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */

    public $messagecon;
    public $mobile; 
    public $name;
    public $email;

    public function __construct($messagecon, $mobile, $name, $email)
    {
        $this->messagecon = $messagecon;
        $this->mobile = $mobile; 
        $this->name = $name;
        $this->email = $email;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {   
        $messagecon = $this->messagecon;
        $mobile = $this->mobile;
        $name = $this->name;
        $email = $this->email;

        return $this->view('email.contactmail', compact("messagecon"))->subject($name);
    }
}
