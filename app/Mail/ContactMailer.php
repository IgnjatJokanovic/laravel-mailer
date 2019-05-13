<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class ContactMailer extends Mailable
{
    use Queueable, SerializesModels;

    public $email;
    public $name;
    public $body;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($email, $name, $body)
    {
        $this->email = $email;
        $this->name = $name;
        $this->body = $body;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('mail_body')->from("example@website.com")->subject("Email from contact form");
    }
}
