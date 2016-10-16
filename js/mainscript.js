$(document).ready(function(){
	var clientId = "737769653941-65s87kmhafi7cb109248pta69em9j8qh.apps.googleusercontent.com";
    var apiKey = "Xkmhzbq-o6xvX5x0zodEmlh5";
    var scopes = "https://www.googleapis.com/auth/gmail.send";

    function sendEmail() {
        $('#email-me-btn');
        sendMessage({
                'To': "lusinabrian@gmail.com",
                "FromName":$('#contact-name').val(),
                "FromEmail":$('#contact-email').val()
            },
            $('#contact-message').val(),
            composeTidy
        );
        return false;
    }
    /*This function is where we interact with the Gmail API. It accepts an object of email headers, the email body and a callback function.*/
    function sendMessage(headers_obj, message, callback) {
        var email = '';

        for(var header in headers_obj)
            email += header += ": "+headers_obj[header]+"\r\n";

        email += "\r\n" + message;

        var sendRequest = gapi.client.gmail.users.messages.send({
            'userId': 'me',
            'resource': {
                'raw': window.btoa(email).replace(/\+/g, '-').replace(/\//g, '_')
            }
        });

        return sendRequest.execute(callback);
    }

    /*clear all the fields*/
    function composeTidy() {
        $('#contact-name').val("");
        $('#contact-email').val("");
        $('#contact-message').val("");
    }

	/*change color of social links
	Store social links in variable
	*/
	var social = $('.social-links i');
	function changeColor(){
		//perform class checks
		//if twitter, change to blue
		if($(this).hasClass('fa-twitter')){
			$(this).css('color','#00ABF1');
			/*else if linkedin*/
		}else if($(this).hasClass('fa-linkedin')){
			$(this).css('color','#0177B5');
		}else if($(this).hasClass('fa-github')){
			$(this).css('color','#000');			
		}else if($(this).hasClass('fa-medium')){
			$(this).css('color','#00AB6B');
		}else if($(this).hasClass('fa-google-plus')){
			$(this).css('color','#DB4437');
		}else if($(this).hasClass('fa-codepen')){
			$(this).css('color','#878787');
		}		
	}
	
	social.on('mouseenter',changeColor);
	social.on('mouseleave', function(){
		$(this).css('color','white');
	})
});

