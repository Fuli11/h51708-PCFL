require(["config"], function(){
	require(["load"], function($){
		$("#btn").onclick = function(){
			post(
				"login.php", 
				{username:$("#username").value,password:$("#password").value},
				function(respData){
					if (respData.status === 1) {
						// 登录成功，将登录成功用户数据保存到 cookie 中
						var user = respData.data;
						cookie("login_user", JSON.stringify(user), {path:"/"});
						// 跳转到个人信息页面
						location = "userinfo.html";
					} else {
						$("#error").innerText = "用户名或密码错误";
					}
				},
				"json");
		}
	});
});