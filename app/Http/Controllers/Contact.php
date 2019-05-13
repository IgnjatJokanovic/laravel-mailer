<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Validator;
use App\Mail\ContactMailer;

class Contact extends Controller
{
    public function show()
    {
        return view('contact');
    }

    public function send()
    {
        $validator = Validator::make(request()->data, [
            'email' => 'required|email',
            'name' => 'required',
            'message' => 'required'
        ]);

        if($validator->fails())
        {
            $errors = array();
            foreach($validator->errors()->all() as $error)
            {
                array_push($errors, $error);
               
            }
            return response()->json(["messages" => $errors], 422);
        }
        else 
        {
            $email = request()->data['email'];
            $name = request()->data['name'];
            $body = request()->data['message'];
            Mail::to("jokanovic.ignjat@gmail.com")->send(new ContactMailer($email, $name, $body));
            return response()->json(['message' => 'Thank you for contacting us']);
        }
        
    }
}
