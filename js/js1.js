$(function(){
	$("#user").focus(function(){
		var text_value=$(this).val();
		if(text_value=="用户名")
			$(this).val("");


	})
	$("#user").blur(function(){
		var text_value=$(this).val();
		if(text_value=="")
			$(this).val("用户名");
	})

	$("#keyw").focus(function(){
		text_key=$(this).val();
		if(text_key=="密码")
			$(this).val("");
	})
	$("#keyw").blur(function(){
		text_key=$(this).val();
		if(text_key=="")
			$(this).val("密码");

	})
})