$(document).ready(function() {

  $('#form-submit').click(function(e) {

    $("#contactForm").validate({
      ignore: ':hidden:not(.captcha-control)',
        rules: {
            'entry.1390514629': {
                required: true
            },
            emailAddress: {
                required: true,
                email: true
            },
            'entry.1023036745': {
                required: true
            },
            reCaptchaControl: {
                required: function () {
                    if (grecaptcha.getResponse() == '') {
                        return true;
                    } else {
                        return false;
                    }
                }
            }  
        },
        messages: {
            'entry.1390514629': {
                required: "Proszę wpisać Imię"
            },
            emailAddress: {
                required: "Proszę wpisać Email",
                email: "Musisz wpisać email w formacie nazwa@domena"
            },
            'entry.1023036745': {
                required: "Proszę wprowadzić opis"
            },
            reCaptchaControl: {
                required: "Proszę zaznaczyć Nie jestem robotem"
            }
        },
        submitHandler: function(form) {
                form.submit();
        }
    });
    
            });

});
