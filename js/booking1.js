$(document).ready(function(){
	
    $(".bar-info i").click(function(){
        $(".bar-info ul").slideDown(300);
        $(".top-bar>.bar-logo").addClass('invisible');
        
    });
	$(".mobile-menu i").click(function(){
        $(".bar-info ul").slideUp(300);
        $(".top-bar>.bar-logo").removeClass('invisible');
    });

    var currYear = (new Date()).getFullYear();	
	var opt={};
	opt.date = {preset : 'date'};
	opt.datetime = {preset : 'datetime'};
	opt.time = {preset : 'time'};
	opt.default = {
		theme: 'android-ics light', //皮肤样式
		display: 'modal', //显示方式 
		mode: 'scroller', //日期选择模式
		dateFormat: 'yyyy-mm-dd',
		// lang: 'zh',
		showNow: true,
		nowText: "Today",
		startYear: currYear - 50, //开始年份
		endYear: currYear + 10 //结束年份
	};

	$("#main-day").mobiscroll($.extend(opt['date'], opt['default']));
    

	var currYear2 = (new Date()).getFullYear();	
	var opt2={};
	opt2.date = {preset : 'date'};
	opt2.datetime = {preset : 'datetime'};
	opt2.time = {preset : 'time'};
	opt2.default = {
		theme: 'android-ics light', //皮肤样式
		display: 'modal', //显示方式 
		mode: 'scroller', //日期选择模式
		dateFormat: 'yyyy-mm-dd',
		//lang: 'zh',
		showNow: true,
		nowText: "Today",
		startYear: currYear - 50, //开始年份
		endYear: currYear + 10 //结束年份
	};

	var optDateTime = $.extend(opt2['datetime'], opt2['default']);
	var optDateTime = $.extend(opt2['datetime'], opt2['default']);  
	$("#main-time").mobiscroll(optDateTime).datetime(optDateTime);  

});


