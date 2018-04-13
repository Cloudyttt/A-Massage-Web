$(document).ready(function(){
	
    $(".bar-info i").click(function(){
        $(".bar-info ul").slideDown(300);
        $(".top-bar>.bar-logo").addClass('invisible');
        
    });
	$(".mobile-menu i").click(function(){
        $(".bar-info ul").slideUp(300);
        $(".top-bar>.bar-logo").removeClass('invisible');
   });
    //STYLE动态添加
    $.getJSON("data/mobile.json",function(result){
		var style = eval(result.STYLE);
		for(let i in style){
			i=i*2;
			if(i<7){
				//结构
				let $div = $("<div class='choose-item'></div>");
				//内容
				let $div1 = $("<div></div>");
				let $div2 = $("<div></div>");
				$div.append($div1);
				$div.append($div2);
				
				
				let $div1_icon = $("<div class='icon'></div>");
				let $div1_ctn = $("<div class='content'></div>");
				$div1.append($div1_icon);
				$div1.append($div1_ctn);
				let $div1_cldi = $("<i class='iconfont'></i>");
				$div1_icon.append($div1_cldi);
				let $div1_cldspan = $("<span class='headline'></span>")
				let $div1_cldp = $("<p class='copy'></p>");
				$div1_ctn.append($div1_cldspan);
				$div1_ctn.append($div1_cldp);
				
				$div1_cldi.html(style[i].fontface);
				$div1_cldspan.html(style[i].headline);
				$div1_cldp.html(style[i].information);
				
				let $div2_icon = $("<div class='icon'></div>");
				let $div2_ctn = $("<div class='content'></div>");
				$div2.append($div2_icon);
				$div2.append($div2_ctn);
				let $div2_cldi = $("<i class='iconfont'></i>");
				$div2_icon.append($div2_cldi);
				let $div2_cldspan = $("<span class='headline'></span>")
				let $div2_cldp = $("<p class='copy'></p>");
				$div2_ctn.append($div2_cldspan);
				$div2_ctn.append($div2_cldp);
				$div2_cldi.html(style[i+1].fontface);
				$div2_cldspan.html(style[i+1].headline);
				$div2_cldp.html(style[i+1].information);
				
				//添加
				$(".style .style-choose").append($div);
			}
		
		
			
		}
	});
    
    //FAQ动态添加
	$.getJSON("data/mobile.json",function(result){
		var faq = eval(result.FAQ);
		for(let i in faq){
			//结构
			let $div = $("<div class='message-item'></div>");
			let $cldi = $("<i class='iconfont question-mobile-i'>&#xe64c;</i>");
			let $clddiv = $("<div class='message-item-title'></div>");
			let $cldp = $("<p class='message-item-content'></p>");
			$div.append($cldi);
			$div.append($clddiv);
			$div.append($cldp);
			//清空
			$clddiv.empty();
			$cldp.empty();
			//内容
			if(faq[i].list != undefined){
				let faq_list = eval(faq[i].list);
				let $ul = $("<ul class='message-item-list'></ul>");
				$div.append($ul);
				for(let i in faq_list){
					let $li = $("<li class='list-item'></li>");
					$li.html(faq_list[i].li);
					$ul.append($li);
				}
			}
			$clddiv.html(faq[i].title);
			$cldp.html(faq[i].content);
			//添加
			$(".question .question-content").append($div);
		}
	});
 	
    $(window).resize(function(){
    	if($(document).width()<768){
	    	$(".choose-item>div:even").css("background-color","#D9FBEA");
	    	$(".choose-item>div:even").css("border-bottom","5px solid #ffffff");
	    	$(".choose-item>div:even").css("border-right","5px solid #ffffff");
	    	$(".choose-item>div:odd").css("background-color","#64D2A3");
	    	$(".choose-item>div:odd").css("border-bottom","5px solid #ffffff");
	    	$(".choose-item .icon>i:odd").css("color","#D9FBEA");
	    	$(".choose-item .headline:odd").css("color","#D9FBEA");  
    	} 
    	else {
    		$(".choose-item>div:even").css("background-color","#F2FDF5");
	    	$(".choose-item>div:even").css("border-bottom","none");
	    	$(".choose-item>div:even").css("border-right","none");
	    	$(".choose-item>div:odd").css("background-color","#F2FDF5");
	    	$(".choose-item>div:odd").css("border-bottom","none");
	    	$(".choose-item .icon>i:odd").css("color","#64D2A3");
	    	$(".choose-item .headline:odd").css("color","#64D2A3");  
	    	
    	}
    });
});



