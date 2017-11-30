// 定义模块，加载头部尾部
define(["jquery", "cookie"], function($){
	$.ajax("/html/include/header.html").done(function(data){
		// 将加载的头部静态资源添加到 .header 盒子中
		// $(data).appendTo(".header");
		$(".header").html(data);
	}).done(function(){
		// 判断是否有登录用户
		var user = $.cookie("login_user");
		if (user)
			$(".login_reg").html(`欢迎您：<a href="#">${user}</a>`);
	}).done(function(){
		// 绑定搜索框事件
		$(".search .word").keyup(function(){
			var _word = $(this).val(),
				_url = "https://suggest.taobao.com/sug?code=utf-8&q="+ _word +"&callback=?";
			$.getJSON(_url, function(data){
				$(".search .info").html(JSON.stringify(data));
			})
		});
	});

	$(".footer").load("/html/include/footer.html");
});