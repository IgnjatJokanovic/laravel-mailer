$(document).ready(function() {
    var flag = true;
    var reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var reName = /^[A-Za-z\s]{3,}$/;
    var reMsg = /^[A-Za-z\s0-9]{3,}$/;

    $("#email").on("blur", function() {
        validateEmail();
    });

    $("#name").on("blur", function() {
        validateName();
    });

    $("#message").on("blur", function() {
        validateMessage();
    });

    function validateEmail() {
        var mail = $("#email").val();
        if (mail == "") {
            $("#errMail").text("Email field is required");
            $("#errMail").removeClass("d-none");
            $("#send").prop("disabled", true);
            flag = false;
            //return false;
        } else if (!mail.match(reEmail)) {
            $("#errMail").text("Email field must be a valid email");
            $("#errMail").removeClass("d-none");
            $("#send").prop("disabled", true);
            flag = false;
            //return false;
        } else {
            $("#errMail").addClass("d-none");
            $("#send").prop("disabled", false);
            flag = true;
        }
    }

    function validateName() {
        var name = $("#name").val();
        if (name == "") {
            $("#errName").text("Name field is required");
            $("#errName").removeClass("d-none");
            $("#send").prop("disabled", true);
            flag = false;
            //return false;
        } else if (!name.match(reName)) {
            $("#errName").text(
                "Name field must be atleast 3 characters long and contain letters only"
            );
            $("#errName").removeClass("d-none");
            $("#send").prop("disabled", true);
            flag = false;
            //return false;
        } else {
            $("#errName").addClass("d-none");
            $("#send").prop("disabled", false);
            flag = true;
        }
    }

    function validateMessage() {
        var msg = $("#message").val();
        if (msg == "") {
            $("#errMsg").text("Message field is required");
            $("#errMsg").removeClass("d-none");
            $("#send").prop("disabled", true);
            flag = false;
            //return false;
        } else if (!msg.match(reMsg)) {
            $("#errMsg").text(
                "Message field must be atleast 3 characters long and contain letters and numbers only"
            );
            $("#errMsg").removeClass("d-none");
            $("#send").prop("disabled", true);
            flag = false;
            //return false;
        } else {
            $("#errMsg").addClass("d-none");
            $("#send").prop("disabled", false);
            flag = true;
        }
    }

    $("#send").on("click", function(e) {
        e.preventDefault();
        validateEmail();
        validateName();
        validateMessage();
        if (flag) {
            var data = {
                email: $("#email").val(),
                name: $("#name").val(),
                message: $("#message").val()
            };
            console.log(data);
            $.ajax({
                type: "POST",
                url: URL + "/send",
                data: { message: data, _token: TOKEN },
                dataType: "application/json",
                success: function(response) {
                    console.log(response);
                },
                error: function(response) {
                    console.log(response);
                }
            });
        }
    });
});
