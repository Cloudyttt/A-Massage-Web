/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-06-25 21:39:57
 * @version $Id$
 */

/**
 * @authors Cloudy (1058188865@qq.com)
 * @date    2017-06-22 08:50:57
 * @version $Id$
 */
$(document).ready(function(){
    $(".bar-info i").click(function(){
        $(".bar-info ul").slideDown(300);
        $(".top-bar>.bar-logo").addClass('invisible');
        
    });
	$(".mobile-menu i").click(function(){
        $(".bar-info ul").slideUp(300);
        $(".top-bar>.bar-logo").removeClass('invisible');
	});
});

