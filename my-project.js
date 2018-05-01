
// JavaScript Document
window.onload=function(){

	setInterval(fuTime,1000);
	fuTime();

	function fuTime(){
		var today=new Date();
		var y=today.getFullYear();
		var mt=today.getMonth()+1;
		var d=today.getDate();
		var h=today.getHours();
		var m=today.getMinutes();
		var s=today.getSeconds();
		var str='';
		var arrWeek=['星期一','星期二','星期三','星期四','星期五','星期六','星期天']
		var w=arrWeek[today.getDay()];

		str=y+"年"+mt+"月"+d+"日"+"&nbsp;&nbsp"+w+"<br>"+toTwo(h)+":"+toTwo(m)+":"+toTwo(s);

		document.getElementById("time").innerHTML=str;
	}
	function toTwo(n){
		return n<10? '0'+n:''+n;
	}
}
