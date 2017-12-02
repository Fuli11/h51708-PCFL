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
		
		// 渲染 展示-香水 模板
		$.ajax("/mock/zhanshi_xs.json").done(function(responseData){			
			var html = template("zhanshi_xs_template", {products : responseData.data});
			$(".li-1").html(html);
		});
		
		// 渲染 展示-美妆 模板
		$.ajax("/mock/zhanshi_mz.json").done(function(responseData){			
			var html = template("zhanshi_xs_template", {products : responseData.data});
			$(".li-2").html(html);
		});
		
		// 渲染 展示-家电 模板
		$.ajax("/mock/zhanshi_jd.json").done(function(responseData){			
			var html = template("zhanshi_xs_template", {products : responseData.data});
			$(".li-3").html(html);
		});
		
		// 渲染 展示-家居 模板
		$.ajax("/mock/zhanshi_jj.json").done(function(responseData){			
			var html = template("zhanshi_xs_template", {products : responseData.data});
			$(".li-4").html(html);
		});
		
		// 渲染 展示-鞋包 模板
		$.ajax("/mock/zhanshi_xb.json").done(function(responseData){			
			var html = template("zhanshi_xs_template", {products : responseData.data});
			$(".li-5").html(html);
		});
		
		// 渲染 展示-食品 模板
		$.ajax("/mock/zhanshi_sp.json").done(function(responseData){			
			var html = template("zhanshi_xs_template", {products : responseData.data});
			$(".li-6").html(html);
		});
		
		// 渲染 楼层-香水 模板
		$.ajax("/mock/floor_xs.json").done(function(responseData){			
			var html = template("floor_xs_template", {products : responseData.data});
			$(".fx_main_middle").html(html);
		});
		
		// 渲染 楼层-美容 模板
		$.ajax("/mock/floor_mr.json").done(function(responseData){			
			var html = template("floor_mr_template", {products : responseData.data});
			$(".fm_main_middle").html(html);
		});
		
		// 渲染 楼层-家用电器 模板
		$.ajax("/mock/floor_jy.json").done(function(responseData){			
			var html = template("floor_jy_template", {products : responseData.data});
			$(".fjy_main_middle").html(html);
		});
	});
});