require(["config"], function(){
	require(["jquery"], function($){
		var isUsernameExist = true; // 标记用户名是否存在 true:存在   false:不存在
		$(".username").blur(function(){
			/* 使用ajax动态验证用户名是否已存在 */
			ajax({
				type : "get",
				url : "check.php",
				data : {username : this.value},
				dataType : "json",
				success : function(respData){
					if (respData.status === 1){
						$("#username_info").innerText = "用户名已被占用";
						isUsernameExist = true;
					} else {
						$("#username_info").innerText = "可用";
						isUsernameExist = false;
					}
			}
		});
		
		
		$("#btn").onclick = function(){
			if (!isUsernameExist) {
				/* 通过ajax向服务器发送注册用户信息，保存注册用户 */
				ajax({
					type : "post",
					url : "register.php",
					data : {
						username : $("#username").value,
						password : $("#password").value,
						
					},
					dataType : "json",
					success : function(data){
						if (data.status === 1) { // 注册成功
							location = "login.html";
						} else {
							$("#error").innerText = "注册失败，请稍候重试";
						}
					}
				});
			}
	});
});