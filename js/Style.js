$(document).ready(function(){
	
    $(".bar-info i").click(function(){
        $(".bar-info ul").slideDown(300);
        $(".top-bar>.bar-logo").addClass('invisible');
        
    });
	$(".mobile-menu i").click(function(){
        $(".bar-info ul").slideUp(300);
        $(".top-bar>.bar-logo").removeClass('invisible');
    });
     //style动态添加
    $.getJSON("../data/mobile.json",function(result){
		var style = eval(result.STYLE);
		for(let i in style){
		//结构
			let $div = $("<div class='massageType-item'></div>");
			let $clddiv1 = $("<div class='icon'></div>");
			let $clddiv2 = $("<div class='content'></div>");
			$div.append($clddiv1);
			$div.append($clddiv2);
			let $cldi = $("<i class='iconfontyyy'></i>");
			$clddiv1.append($cldi);
			let $cldspan = $("<span class='headline'></span>")
			let $cldp = $("<p class='copy'></p>");
			$clddiv2.append($cldspan);
			$clddiv2.append($cldp);
		//内容
			$cldi.html(style[i].fontface);
			$cldspan.html(style[i].headline);
			$cldp.html(style[i].information);
		//添加
			$(".main .massageType").append($div);
		}
	});
	
});



