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

// .........................................................


	var nUl=document.getElementById('nav');//菜单栏导航
	var nLi=nUl.getElementsByTagName('li');

	for(var i=0; i<nLi.length; i++){

		nLi[i].index=i;
		nLi[i].onclick=function(){
			for(var j=0; j<nLi.length; j++){nLi[j].style.background='';}
	
			this.style.background='#15d9fa';

		}
	}


	var pUl=document.getElementById('products');//产品栏导航
	var pLi=pUl.getElementsByTagName('li');

	for(var i=0; i<pLi.length; i++){

		pLi[i].index=i;
		pLi[i].onclick=function(){
			for(var j=0; j<pLi.length; j++){pLi[j].style.background='';}
			
			this.style.background='#15d9fa';
		}
	}



// .........................................................


var oBan=document.getElementById('banner');
	var oUl=document.getElementById('ul-li');
	var aLi=oUl.getElementsByTagName('li');
	var oPic=document.getElementById('pic');
	var num=0;

	var arrUrl=['images/icon/c0.png',
				'images/banner/c1.jpg',
				'images/banner/c2.jpg',
				'images/banner/c3.png',
				'images/banner/c4.jpg',
				'images/banner/c5.jpg'];

	for(var i=0; i<arrUrl.length; i++){
					oUl.innerHTML+='<li></li>';}

	aLi[num].style.background='#15d9fa';
	oPic.src=arrUrl[num];

 				function fn1(){
	 				oPic.src= arrUrl[num];
					for(var i=0; i<aLi.length; i++){aLi[i].style.background='';}
					aLi[num].style.background='#15d9fa';}

				function fuClick(){
	     			for(var j=0; j<arrUrl.length; j++){
							aLi[j].index=j;
					aLi[j].onclick=function(){num=this.index; fn1(); }}}
	
				function fuAto(){ 

				fn1();
				fuClick();
				
				num++;
				num%=aLi.length;
		
	}

				
				setInterval(fuAto,2000);


		
		
		 		
	

	


}
