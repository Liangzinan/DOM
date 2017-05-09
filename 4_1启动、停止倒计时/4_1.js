function calc(){//计算当前时间距离目标时间的时间差
	var now=new Date();
	var targetTime=new Date(now.toLocaleDateString()+" 17:30:00");
	if(now<=targetTime){
		var ms=targetTime-now;
		var s=ms/1000;
		var h=Math.floor(s/3600);
		h<10 && (h="0"+h);
		var m=Math.floor(s%3600/60);
		m<10 && (m="0"+m);
		var s=Math.floor(s%3600%60);
		s<10 && (s="0"+s);
		document.getElementById("timer").innerHTML=h+":"+m+":"+s;
	}
	else{
		document.getElementById("timer").innerHTML="00:00:00";
		clearInterval(timer);
		timer=null;
	}
}
var timer=null;
window.onload=function(){
	calc();
	timer=setInterval(calc, 1000);
}
function stop(btn){
	if(timer){
		clearInterval(timer);
		timer=null;
		btn.innerHTML="启动倒计时";
	}else{
		calc();
		timer=setInterval(calc, 1000);
		btn.innerHTML="停止倒计时";
	}	
}