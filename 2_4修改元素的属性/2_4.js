window.onload=function(){
	var ul=document.body.querySelector("ul");
	var lis=ul.querySelectorAll("li");
	var nums=[];
	while(nums.length!=lis.length){
		var num=parseInt(Math.random()*lis.length+1);
		if(nums.indexOf(num)==-1){
			nums.push(num);
		}
	}
	for(var i=0;i<lis.length;i++){
		lis[i].dataset.i=nums[i];
	}        
	//将类数组对象变为数组类型对象
	lis=Array.prototype.slice.call(lis);    
	lis.sort(function(a,b){
		return a.dataset.i-b.dataset.i;
	});
	for(var i=0;i<lis.length;i++){
		lis[i]="<li data-i='"+lis[i].dataset.i+"'>"+lis[i].innerHTML+"</li>";
	}
	ul.innerHTML=lis.join("");
}