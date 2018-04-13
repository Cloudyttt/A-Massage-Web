/**
 * @authors Cloudy (1058188865@qq.com)
 * @date    2017-06-22 08:50:57
 * @version $Id$
 */
$(document).ready(function(){

	$(".otherCandidate").css({
		"color": "#ccc",
		"text-decoration": "none"
	});
	$(":radio[name='optionsRadios']").click(function(){
		if(this.checked)
		{
			$(this).next().css("background-color","#cff").siblings("label").css("background-color","#fff");
			console.log("123");			
		}
	});
	var i = 0;
	$("#bookingBotton").click(function() {
		/* Act on the event */
		if(i == 0){
			$(".top-prompt").text("Check Out");
			console.log(2);
			$("#account-info-laction").slideUp(1000);
			$("#account-info-checkOut").slideDown('1000', function() {
				
			});
			i++;
		}else{
			window.location.href="success.html"; 
		}
		
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

