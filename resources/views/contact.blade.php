<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <link href="{{asset('/css/custom.css')}}" rel="stylesheet">
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="{{asset('/js/custom.js')}}"></script>
    <title>Contact us</title>
</head>
<body>
    <div class="container contact-form">
            <div class="contact-image">
                <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
            </div>
            <form method="post">
                <h3>Drop Us a Message</h3>
                <div id="feedback"></div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" id="email" name="email" class="form-control" placeholder="Your Email *"/>
                            <div id="errMail" class="d-none alert alert-danger text-center mt-1"></div>
                        </div>
                        <div class="form-group">
                            <input type="text" id="name" name="name" class="form-control" placeholder="Your Name *"/>
                            <div id="errName" class="d-none alert alert-danger text-center mt-1"></div>
                        </div>
                        <div class="form-group">
                            <input type="submit" id="send" name="btnSubmit" class="btnContact" value="Send Message" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <textarea name="message" id="message" class="form-control" placeholder="Your Message *" style="width: 100%; height: 150px;"></textarea>
                            <div id="errMsg" class="d-none alert alert-danger text-center mt-1"></div>
                        </div>
                    </div>
                </div>
            </form>
    </div>

    <script>
        const URL = "{{url('/')}}";
        const TOKEN = "{{csrf_token()}}";
    </script>
    
</body>
</html>