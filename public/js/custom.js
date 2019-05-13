$(document).ready(function() {
    var flagMail = true;
    var flagName = true;
    var flagMessage = true;
    var reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var reName = /^[A-Za-z\s]{3,}$/;
    var reMsg = /^[A-Za-z\s0-9]{3,}$/;

    $("#email").on("keyup", function() {
        $(this).on("mouseleave", function() {
            validateEmail();
        });
    });

    $("#name").on("keyup", function() {
        $(this).on("mouseleave", function() {
            validateName();
        });
    });

    $("#message").on("keyup", function() {
        $(this).on("mouseleave", function() {
            validateMessage();
        });
    });

    function validateEmail() {
        var mail = $("#email").val();
        if (mail == "") {
            $("#errMail").text("Email field is required");
            $("#errMail").removeClass("d-none");
            $("#send").prop("disabled", true);
            flagMail = false;
            //return false;
        } else if (!mail.match(reEmail)) {
            $("#errMail").text("Email field must be a valid email");
            $("#errMail").removeClass("d-none");
            $("#send").prop("disabled", true);
            flagMail = false;
            //return false;
        } else {
            $("#errMail").addClass("d-none");
            $("#send").prop("disabled", false);
            flagMail = true;
        }
    }

    function validateName() {
        var name = $("#name").val();
        if (name == "") {
            $("#errName").text("Name field is required");
            $("#errName").removeClass("d-none");
            $("#send").prop("disabled", true);
            flagName = false;
            //return false;
        } else if (!name.match(reName)) {
            $("#errName").text(
                "Name field must be atleast 3 characters long and contain letters only"
            );
            $("#errName").removeClass("d-none");
            $("#send").prop("disabled", true);
            flagName = false;
            //return false;
        } else {
            $("#errName").addClass("d-none");
            $("#send").prop("disabled", false);
            flagName = true;
        }
    }

    function validateMessage() {
        var msg = $("#message").val();
        if (msg == "") {
            $("#errMsg").text("Message field is required");
            $("#errMsg").removeClass("d-none");
            $("#send").prop("disabled", true);
            flagMessage = false;
            //return false;
        } else if (!msg.match(reMsg)) {
            $("#errMsg").text(
                "Message field must be atleast 3 characters long and contain letters and numbers only"
            );
            $("#errMsg").removeClass("d-none");
            $("#send").prop("disabled", true);
            flagMessage = false;
            //return false;
        } else {
            $("#errMsg").addClass("d-none");
            $("#send").prop("disabled", false);
            flagMessage = true;
        }
    }

    $("#send").on("click", function(e) {
        e.preventDefault();
        validateEmail();
        validateName();
        validateMessage();
        if (flagMessage && flagName && flagMail) {
            var data = {
                email: $("#email").val(),
                name: $("#name").val(),
                message: $("#message").val()
            };

            $.ajax({
                type: "POST",
                url: URL + "/send",
                data: { data: data, _token: TOKEN },
                complete: function(response) {
                    if (response.status == 200) {
                        var txt = JSON.parse(response.responseText);
                        $("#feedback").html(
                            `<div class="alert alert-success text-center">${
                                txt.message
                            }</div>`
                        );
                    } else {
                        var txt = "";
                        var res = JSON.parse(response.responseText);
                        $.each(res.messages, function(key, value) {
                            txt += `<div class="alert alert-danger text-center">${value}</div>`;
                        });
                        $("#feedback").html(txt);
                    }
                }
            });
        }
    });
});
