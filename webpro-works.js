// JavaScript Document
function addEvent(o,evt,func){
  if(o.attachEvent)o.attachEvent('on'+evt,func);
    else if(o.addEventListener)o.addEventListener(evt,func,false);
}


addEvent(window,'load',webFunc)

function webFunc(){
	

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
		var arrWeek=['星期日','星期一','星期二','星期三','星期四','星期五','星期六']
		var w=arrWeek[today.getDay()];

		str=y+"年"+mt+"月"+d+"日"+"&nbsp"+w+"&nbsp"+toTwo(h)+":"+toTwo(m)+":"+toTwo(s);

		document.getElementById("time").innerHTML=str;
	}
	function toTwo(n){
		return n<10? '0'+n:''+n;
	}

// .........................................................


	var nUl=document.getElementById('menu');//菜单栏导航
	var nLi=nUl.getElementsByTagName('li');

	for(var i=0; i<nLi.length; i++){

		nLi[i].index=i;
		nLi[3].style.color='#15d9fa';
		nLi[i].onclick=function(){
			for(var j=0; j<nLi.length; j++){nLi[j].style.color='';}
	
			this.style.color='#15d9fa';

		}
	}
//......................................................................
//我的作品页面代码

		var oTurnicon=document.getElementById('turnicon');
		var oTble=document.getElementById('table');	
		var oHeight=document.getElementById('float-box');		 		
	
		oTurnicon.onclick=function(){
			if(oTble.style.display==='none'){
				
				oHeight.style.height='400px';
				setTimeout(function(){
					oTble.style.display='table';
					oTurnicon.style.backgroundImage='url(images/icon/up.png)';
					oTurnicon.title='点击收起';
				},300)
				
			}
			else{
				
				oHeight.style.height='40px';
				oTble.style.display='none';
				oTurnicon.style.backgroundImage='url(images/icon/down.png)';
				oTurnicon.title='点击展开';
			}
		


}


}