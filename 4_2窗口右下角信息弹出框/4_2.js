var adv={
	duration:2500,//总时长3秒
	interval:10,//移动一步的时间间隔
	div:null,
	height:0,
	init:function(){
		this.div=document.getElementById("msg");
		this.height=parseFloat(getComputedStyle(this.div).height);
	},
	moveUpStep:function(){
		var self=this;//用局部变量self转接this指的当前对象
		var bottom=parseFloat(getComputedStyle(self.div).bottom);
		bottom+=self.height*self.interval/self.duration;
		self.div.style.bottom=bottom+"px";
		if(bottom<=0){
			setTimeout(function(){
			self.moveUpStep();
			}, self.interval);
		}
	},
	startMoveUp:function(){
		var self=this;
		setTimeout(function(){
			self.moveUpStep();
		}, self.interval);
	},
	moveDownStep:function(){
		var self=this;
		var bottom=parseFloat(getComputedStyle(self.div).bottom);
		bottom-=self.height*self.interval/self.duration;
		self.div.style.bottom=bottom+"px";
		if(bottom>=-self.height){
			setTimeout(function(){
			self.moveDownStep();
			}, self.interval);
		}else{
			setTimeout(function(){
			self.moveUpStep();
			}, 5000);
		}
	},
	startMoveDown:function(){
		var self=this;
		setTimeout(function(){
			self.moveDownStep();
		}, self.interval);
	}
}
window.onload=function(){
	adv.init();
	adv.startMoveUp();
	document.querySelector("#msg a").onclick=function(){
		adv.startMoveDown();
	}
}