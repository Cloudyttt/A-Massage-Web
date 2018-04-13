/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-06-22 08:50:57
 * @version $Id$
 */


$(document).ready(function(){
	$(".continue-botton-bottomInfo").click(function() {
		/* Act on the event */
		window.location.href="Booking.html"; 
	});
	
	$(".otherCandidate").css({
		"color": "#ccc",
		"text-decoration": "none"
	});
	$(".back-botton-a").css({
		"color": "#ccc",
		"text-decoration": "none"
	});
	$(":radio[name='optionsRadios']").click(function(){
		if(this.checked)
		{
			$(this).next().css("background-color","#cff").siblings("label").css("background-color","#fff");
				
		}
	});
	$("#optionsRadios2").click(function() {
		/* Act on the event */
		$("#login-radio_1").css("background-color","#fff");
		$(".otherLoginWay-span").html("Log in with Facebook");
		$("#login-radio_2").css("background-color","#D9FBEA");
		$(".account-info-formGroup").slideUp(1000);
		$(".account-info-login").slideDown('1000', function() {
		});
		$(".signupbtn").attr("href","login.html");
		
	});
	$("#optionsRadios1").click(function() {
		/* Act on the event */
        $(".otherLoginWay-span").html("Sign Up with Facebook");
		$("#login-radio_1").css("background-color","#D9FBEA");
		$("#login-radio_2").css("background-color","#fff");
		$(".account-info-formGroup").slideDown('1000', function(){
		});
		$(".account-info-login").slideUp('1000', function() {
		});
		$(".signupbtn").attr("href","Booking_signUp.html");
		
	});
    $(".bar-info i").click(function(){
        $(".bar-info ul").slideDown(300);
        $(".top-bar>.bar-logo").addClass('invisible');
        
    });
	$(".mobile-menu i").click(function(){
        $(".bar-info ul").slideUp(300);
        $(".top-bar>.bar-logo").removeClass('invisible');
	});
});

