
$(document).ready(function(){
    $(".bar-info i").click(function(){
        $(".bar-info ul").slideDown(300);
        $(".top-bar>.bar-logo").addClass('invisible');
        
    });
	$(".mobile-menu i").click(function(){
        $(".bar-info ul").slideUp(300);
        $(".top-bar>.bar-logo").removeClass('invisible');
	});
	
	//FAQ动态添加
	$.getJSON("../data/mobile.json",function(result){
		var faq = eval(result.FAQ);
//		console.log(faq);
		for(let i in faq){
			//结构
//			console.log(i+faq[i].title);
//			console.log(i+faq[i].content);
			let $div = $("<div class='message-item'></div>");
			let $clddiv = $("<div class='message-item-title'></div>");
			let $cldp = $("<p class='message-item-content'></p>");
			$div.append($clddiv);
			$div.append($cldp);
			//清空
			$clddiv.empty();
			$cldp.empty();
//			console.log(faq[i].list);
//			console.log(faq[i].list != undefined);
			//内容
			if(faq[i].list != undefined){
				let faq_list = eval(faq[i].list);
				let $ul = $("<ul class='message-item-list'></ul>");
				$div.append($ul);
				for(let i in faq_list){
//					console.log(faq_list[i].li);
					let $li = $("<li class='list-item'></li>");
					$li.html(faq_list[i].li);
					$ul.append($li);
				}
			}
			$clddiv.html(faq[i].title);
			$cldp.html(faq[i].content);
			//添加
			$(".main .message").append($div);
		}
	});



});


