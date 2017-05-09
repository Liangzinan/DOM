var unselArr=[];
var selArr=[];
window.onload=function(){
	(function(){
		var unsel=document.getElementById("unsel");
		unselArr=unsel.innerHTML.replace(/^\s*<option>/,"").replace(/<\/option>\s*$/,"").split(/<\/option>\s*<option>/);
	})();
}
function move(btn){
		switch (btn.innerHTML) {
			case "&gt;&gt;":
				// statements_1
				selArr=selArr.concat(unselArr);
				unselArr=[];
				break;
			case "&lt;&lt;":
				// statements_1
				unselArr=unselArr.concat(selArr);
				selArr=[];
				break;
			case "&gt;":
			// statements_1
				var opts=document.querySelectorAll("select#unsel option");
				for(var i=opts.length-1;i>=0;i--){//倒着遍历是为了防止删除对下面的元素产生影响
					if(opts[i].selected){
						selArr.push(unselArr.splice(i,1)[0]);
					}
				}
				break;
			case "&lt;":
			// statements_1
				if(selArr.length!=0){
					var opts=document.querySelectorAll("select#sel option");
						for(var i=opts.length-1;i>=0;i--){
							if(opts[i].selected){
								unselArr.push(selArr.splice(i,1)[0]);
						}
					}
				}
				break;
			default:
				// statements_def
				break;
		}
		unselArr.sort();
		selArr.sort();
		show();
}
function show(){
	var unsel=document.getElementById("unsel");
	if(unselArr.length==0){
		unsel.innerHTML="";
	}else{
		unsel.innerHTML="<option>"+unselArr.join("</option><option>")+"</option>";
	}
	var sel=document.getElementById("sel");
	if(selArr.length==0){
		sel.innerHTML="";
	}else{
		sel.innerHTML="<option>"+selArr.join("</option><option>")+"</option>";
	}
	 
}