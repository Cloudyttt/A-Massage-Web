$(document).ready(function(){
	
    $(".bar-info i").click(function(){
        $(".bar-info ul").slideDown(300);
        $(".top-bar>.bar-logo").addClass('invisible');
        
    });
	$(".mobile-menu i").click(function(){
        $(".bar-info ul").slideUp(300);
        $(".top-bar>.bar-logo").removeClass('invisible');
    });
    
    //Therapist动态添加
    $.getJSON("../data/mobile.json",function(result){
		var therapist = eval(result.THERAPIST);
		for(let i in therapist){
			//结构
			let $div = $("<div class='massageType-item'></div>");
			let $clddiv1 = $("<div class='icon'></div>");
			let $clddiv2 = $("<div class='content'></div>");
			$div.append($clddiv1);
			$div.append($clddiv2);
			let $cld1img = $("<img alt='massgaes' class='massages' />");
			$clddiv1.append($cld1img);
			let $cld2span = $("<span class='headline'></span>")
			let $cld2p = $("<p class='copy'></p>");
			$clddiv2.append($cld2span);
			$clddiv2.append($cld2p);
			//清空
			$cld2span.empty();
			$cld2p.empty();
			//内容
			$cld1img.attr("src",therapist[i].imgsrc);
			$cld2span.html(therapist[i].name);
			$cld2p.html(therapist[i].massage);
			//添加
			$(".main .massageType").append($div);
		}
	});
  
  
  
});
