/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-06-27 09:22:33
 * @version $Id$
 */

$(init) 
function init() {
  //logic
  $(".bar-info i").click(function(){
        $(".bar-info ul").slideDown(300);
        $(".top-bar>.bar-logo").addClass('invisible');
        
    });
	$(".mobile-menu i").click(function(){
        $(".bar-info ul").slideUp(300);
        $(".top-bar>.bar-logo").removeClass('invisible');
    });
}
