<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class PasswordResetMail extends Mailable
{
    use Queueable, SerializesModels;
    private $user;
    
    public function __construct($user)
    {
        $this->user = $user;
    }

    public function build()
    {
        $input = array(
              'name'     => $this->user['name'],
              'link'     => $this->user['link'],
        );
        return $this->markdown('password.passwordResetMail')->with(['data' => $input]);
    }
}
