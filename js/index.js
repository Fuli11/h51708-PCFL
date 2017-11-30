require(["config"], function(){
	require(["jquery", "template", "loadHeaderFooter"], function($, template){
		// 渲染楼层模板
		$.ajax("/mock/floors.json").done(function(responseData){			
			var html = template("floor_template", {floors : responseData.data});
			$(".main").html(html);
		});

		// 绑定楼层事件，事件委派
		$(".main").on("mouseenter", ".floor", function(){
			$(this).css("background", "#ccc")
		}).on("mouseleave", ".floor", function(){
			$(this).css("background", "#fff")
		});
		/*$(".floor").hover(function(){
			$(this).css("background", "#ccc")
		}, function(){
			$(this).css("background", "#fff")
		});*/
	});
});