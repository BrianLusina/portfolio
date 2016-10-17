$(document).ready(function(){

    $("#contact-form").submit(function(e){
	    e.preventDefault();
        $.ajax({
			url: "https://formspree.io/lusinabrian@gmail.com",
			method: "POST",
			data: $(this).serialize(),
            dataType: "json",
            success:function(){
                console.log('success');
                swal({
                    title:"Thanks for the email",
                    text:"I\'ll be in touch promptly.",
                    timer: 2000,
                    showConfirmButton: false
                });
            }
		});
	});

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

