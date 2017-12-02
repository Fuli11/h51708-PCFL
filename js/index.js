require(["config"], function(){
	require(["jquery", "template"], function($, template){
//		// 渲染楼层模板
//		$.ajax("/mock/floors.json").done(function(responseData){			
//			var html = template("floor_template", {floors : responseData.data});
//			$(".main").html(html);
//		});
//
//		// 绑定楼层事件，事件委派
//		$(".main").on("mouseenter", ".floor", function(){
//			$(this).css("background", "#ccc")
//		}).on("mouseleave", ".floor", function(){
//			$(this).css("background", "#fff")
//		});
//		/*$(".floor").hover(function(){
//			$(this).css("background", "#ccc")
//		}, function(){
//			$(this).css("background", "#fff")
//		});*/
		// 渲染  小banner图  模板
		$.ajax("/mock/s_banner.json").done(function(responseData){			
			var html = template("s_banner_template", {s_banners : responseData.data});
			$(".small-banner").html(html);
		});
		
		// 渲染 限时抢购 模板
		$.ajax("/mock/gou-main.json").done(function(responseData){			
			var html = template("gou-main_template", {products : responseData.data});
			$(".gou-main").html(html);
		});
		
	});
});