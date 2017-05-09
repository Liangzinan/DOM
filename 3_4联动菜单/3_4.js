function createSelect(arr){
	var select=document.createElement("select");
	select.add(new Option("-请选择-",-1))
	for(var i=0;i<arr.length;i++){
			select.add(new Option(arr[i].name,arr[i].id));
	}
	select.onchange=function(){
		//从最后一个节点开始删除当前select之后的所有节点
		while(this!=this.parentNode.lastChild){
			this.parentNode.removeChild(this.parentNode.lastChild);
		}
		var i=this.selectedIndex;
		var cate=arr[i-1];
		if(cate.children){
			createSelect(cate.children);
		}
	}
	var div=document.querySelector("div[id=category]");
	div.appendChild(select);
}
window.onload=function(){
	createSelect(categories);
}