function getFocus (txt) {
	// body... 
	txt.setAttribute("class", "txt_focus");
	txt.parentNode.parentNode.querySelector("div").removeAttribute("class");
}
function valiName(txtName){
	txtName.removeAttribute("class");
	var div=txtName.parentNode.parentNode.querySelector("div");
	if(/^\w{1,10}$/.test(txtName.value)){
		div.setAttribute("class", "vali_success");
		return true;
	}else{
		div.setAttribute("class", "vali_fail");
		return false;
	}
}
function valiPwd(txtPwd){
	txtPwd.removeAttribute("class");
	var div=txtPwd.parentNode.parentNode.querySelector("div");
	if(/^\d{6}$/.test(txtPwd.value)){
		div.setAttribute("class", "vali_success");
		return true;
	}else{
		div.setAttribute("class", "vali_fail");
		return false;
	}
}
function valiAll(e){
	var rname=valiName(document.forms[0].elements["name"]);
	var rpwd=valiName(document.forms[0].elements["pwd"]);
	if(!(rname&&rpwd)){
		if(e.preventDefault){
			e.preventDefault();
		}else{ 
			e.returnValue=false;
		}
	}
}