//实现一个函数：遍历指定节点下的所有直接子节点

	/*function getChildren(curr){
		console.log(
			curr.nodeType!=1 && curr.nodeType!=9 && curr.nodeType!=10 ? curr.nodeValue:curr.nodeName
		);
		var children=curr.childNodes;
		if(children){
			for(var i=0,len=children.length;i<len;i++){
				console.log(
					children[i].nodeType!=1 && children[i].nodeType!=9 && children[i].nodeType!=10 ? children[i].nodeValue:children[i].nodeName
				);
			}
		}
	}
	window.onload=function(){
		getChildren(document.body);
	}*/

//实现一个函数：遍历指定节点下的所有子节点

	/*window.onload=function(){
		var tabs=["|-"];
		(function (curr){
			console.log(
				tabs.join("")+ (curr.nodeType!=1 && curr.nodeType!=9 && curr.nodeType!=10 ? curr.nodeValue:curr.nodeName)
			);
			var children=curr.childNodes;
			if(children){
				tabs.unshift("\t");
				for(var i=0,len=children.length;i<len;i++){
					arguments.callee(children[i]);
				}
				tabs.shift();
			}
		})(document.body);
	}*/

//实现一个函数：遍历指定节点下的所有子节点

	/*window.onload=function(){
		var tabs=["|-"];
		//遍历元素树
		(function (curr){
			console.log(tabs.join("")+curr.nodeName);
			var children=curr.children;
			if(children){
				tabs.unshift("\t");
				for(var i=0,len=children.length;i<len;i++){
					arguments.callee(children[i]);
				}
				tabs.shift();
			}
		})(document.body);
	}*/

//遍历API--------NodeIterator

/*window.onload=function(){
	var tabs=["|-"];
	//创建迭代器对象
	var iterator=document.createNodeIterator(document, NodeFilter.SHOW_ALL, null,false);
	//使用循环推动迭代器跳向下一个节点
	var node;
	while ((node=iterator.nextNode())!=null) {
		// statement
		console.log(
			tabs.join("")+(node.nodeType!=1 && node.nodeType!=9 && node.nodeType!=10 ? node.nodeValue:node.nodeName)
		);
		if(node.childNodes.length!=0){
			tabs.unshift("\t");
		}else {
			var next=iterator.nextNode();
			if(next==null){
				break;
			}else if(node.nextSibling!=next){
				tabs.shift();
			}
			iterator.previousNode();
		}
	}
}*/

//遍历API---------TreeWalker（遍历时同NodeIterator）

/*window.onload=function(){
	var tabs=["|-"];
	//创建迭代器对象
	var iterator=document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null,false);
	//使用迭代器跳向任意一个节点
	var node=iterator.lastChild();
	node=iterator.lastChild();
	console.log(node);
}*/

//将表格中的偶数行背景改为blue

/*window.onload=function(){
	var table=document.getElementById("data");
	var tbady=document.getElementByTagName("tbady")[0];
	var trs=document.getElementsByTagName("tr");
	for(var i=0,len=trs.length;i<len;i++){
		if(i%2!=0){
			trs[i].className="blue";
		}
	}
}*/

//实现购物车客户端计算

function calc(btn){
	//this-->window
	//修改数量
	console.log("nidn");
	var td=btn.parentNode;
	var span=td.getElementsByTagName("span")[0];
	var n=parseInt(span.innerHTML);
	if(btn.innerHTML=="+"){
		n++;
	}else if(n!=1){
		n--;
	}
	span.innerHTML=n;
	//计算小计
	var tr=td.parentNode;
	var tds=tr.getElementsByTagName("td");
	var tdPrice=tds[1];
	var price=parseFloat(tdPrice.innerHTML.slice(1));
	var sub=price*n;
	tds[3].innerHTML="&yen;"+sub.toFixed(2);
	//计算总计
	var table=document.getElementById("data");
	var tbody=table.getElementsByTagName("tbody");
	var trs=tbody.getElementsByTagName("tr");
	for(var i=0,len=trs.length,total=0;i<len;i++){
		td=trs[i].getElementsByTagName("td")[3];
		total+=parseFloat(td.innerHTML.slice(1));
	}
	var tds=table.getElementsByTagName("td");
	tds[tds.length-1].innerHTML="&yen;"+total.toFixed(2);
}

//加减开关列表

function toggle(span){
	if(span.className=="open"){ 
		span.className="closed";
		document.querySelector("ul.tree ul.show"). className="hide";
	}else{
		var openSpan=document.querySelector("ul.tree span.open");
		if(openSpan){
			span.className="closed";
			document.querySelector("ul.tree ul.show").className="hide";
		}
		span.className="open";
		document.querySelector("ul.tree span.open+ul").className="show";
	}
		
}