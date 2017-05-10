window.onload=function(){
	var cookies=document.cookie.split("; ");
	for(var i=0;i<cookies.length;i++){
		if(cookies[i].indexOf("userName")!=-1){
			location.replace("5_3_loginResult.html");
		}
	}
}
function submitForm(){
	var form=document.forms[0]
	var userName=form.userName.value;
	var userPwd=form.userPwd.value;
	var radios=form.noLoginPeriod;
	for(var i=0,len=radios.length;i<len;i++){
		if(radios[i].checked){
			var expires=new Date(new Date().getTime()+1000*3600*24*radios[i].value);
			document.cookie="userName="+userName+";expires="+expires.toGMTString();
			document.cookie="userPwd="+userPwd+";expires="+expires.toGMTString();
			break;
		}
	}
	form.submit();
}