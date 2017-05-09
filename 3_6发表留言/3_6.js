window.onload=function(){
	var form=document.forms["msgForm"];
	var txtName=form.elements["userName"];
	txtName.onfocus=function(){
		var reg=/^(\s*|请输入您的姓名)$/
		if(reg.test(this.value)){
			this.value="";
			this.className="";
		}	
	}
	txtName.onblur=function(){
		if(this.value==""){
			this.value="请输入您的姓名";
			this.className="hintText";
		}
	}
	var txtcontent=form.elements["content"];
	txtcontent.onfocus=function(){
		var reg=/^(\s*|请输入留言内容)$/
		if(reg.test(this.value)){
			this.value="";
			this.className="";
		}	
	}
	txtcontent.onblur=function(){
		if(this.value==""){
			this.value="请输入留言内容";
			this.className="hintText";
		}
	}
	//点击已阅读，启用提交
	var chb=form.querySelector("input[type='checkbox']");
	var btn=form.querySelector("input[type='button']");
	chb.onclick=function(){
		btn.disabled=!chb.checked;
	}
	//验证是否输入
	btn.onclick=function(){
		if(/^(\s*|请输入您的姓名)$/.test(txtName.value)){
			txtName.focus();
		}else if(/^(\s*|请输入留言内容)$/.test(txtcontent.value)){
			txtcontent.focus();
		}else {
			form.submit();
		}
	}
}