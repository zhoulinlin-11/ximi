

function Swiper(sel){
	this.dom = document.querySelector(sel);
	this.slides = document.querySelectorAll(".slide");
	this.len = this.slides.length; //总图片有8张
	this.cIndex = 0; // 默认显示第0张
	this.slides[this.cIndex].style.display="block";
	this.pIndex = 0;
	this.play(); //默认自动播放
}
Swiper.prototype.play = function(){
	console.log("幻灯片开始播放");
	var that = this;
	setInterval(function(){
		that.cIndex++;
		//1.每隔3秒 让cIndex++
		//2.页面切换到 第新的cIndex
		if(that.cIndex>=that.len){
			that.cIndex = 0;  //超过第7张开始显示第0张
		}
			that.goSlide(that.cIndex);   //实现切换
	},3000)
}
Swiper.prototype.goSlide = function(n){
	// console.log("我正在切换页面"+n);
	this.slides[this.pIndex].style.display = "none";
	this.slides[n].style.display = "block";
	this.pIndex = n;
}
	// var swiper1 = new Swiper(".swiper");