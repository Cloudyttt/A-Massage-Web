/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-06-24 19:55:15
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
    
    //Therapist动态添加
    $.getJSON("../data/mobile.json",function(result){
		var therapist = eval(result.THERAPIST);
		$("#main-fram-p1").html(therapist[0].name);
		$("#main-fram-p2").html(therapist[0].massage);
		
		for(let i in therapist){
			//结构
			let $div = $("<div class='main-img-item'></div>");
			let $img = $("<img alt='aaa'>");
			let $p = $("<p></p>");
			let desc = therapist[i].massage;
			$div.append($img);
			$div.append($p);
			//内容
			$img.attr("src",therapist[i].imgsrc);
			$p.html(therapist[i].name);
			//添加
			$("#main #main-image").append($div);
			//click 绑定
			$img.on('click',function(){
				$img.css("border","5px solid red");
				$("#main-fram-p1").html($p.html());
				$("#main-fram-p2").html(desc);
			});
		}	
		$(".main-img-item>img:first").css("border","5px solid red");
		// $(".main-img-item>img:first").css("box-sizing","content-box");
		//#64d2a3
	});
	$("body").on("click",".main-img-item>img",function(){
		$(".main-img-item>img").not($(this)).css("border","1px solid #ccc");
	});
    
}