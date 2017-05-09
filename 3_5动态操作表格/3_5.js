window.onload=function(){
	//创建表头
	var table=document.createElement("table");
	var thead=table.createTHead();
	var tr=thead.insertRow();
	for(var key in data[0]){
		var th=document.createElement("th");
		th.innerHTML=key;
		tr.appendChild(th);
	}
	var th=document.createElement("th");
	th.innerHTML="operate";
	tr.appendChild(th);
	//表格中添加数据
	var tbody=table.createTBody();
	for(var i=0;i<data.length;i++){
		var tr=tbody.insertRow();
		for(var key in data[i]){
			var td=tr.insertCell();
			td.innerHTML=data[i][key];
		}
		//创建删除按钮
		var td=tr.insertCell();
		var btn=document.createElement("button");
		btn.innerHTML="删除";
		td.appendChild(btn);
		btn.onclick=function(){
			var tr=this.parentNode.parentNode;
			var id=tr.cells[0].innerHTML;
			if(confirm("是否删除"+id+"?")){
				table.deleteRow(tr.rowIndex);
			} 
		}
	}
	document.getElementById("data").appendChild(table);
}