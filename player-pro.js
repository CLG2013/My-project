function addEvent(o,evt,func){
  if(o.attachEvent)o.attachEvent('on'+evt,func);
    else if(o.addEventListener)o.addEventListener(evt,func,false);
}


addEvent(window,'load',playerPro);

function playerPro(){

	var oConte=document.getElementById('conte');
	var oList=document.getElementById('music-list');
	var aLi=oList.getElementsByTagName('li');
	var oInfor=document.getElementById('muic-infor');
	var oBefore=document.getElementById('before');
	var oPlay=document.getElementById('play');
	var oPlayer=document.getElementById('player');
	var oNext=document.getElementById('next');
	var allTime=document.getElementById('alltime');
	var playTime=document.getElementById('playtime');
	var oProgress1=document.getElementById('progress1');
	var oProgress3=document.getElementById('progress3');
	var oProgress2=document.getElementById('progress2');
	var oProgress4=document.getElementById('progress4');



// .......................................................
// 
// 
	var arrList=[
				'music/心愿.mp3','music/风吹麦浪.mp3',
				'music/滴答.mp3','music/山鬼.mp3',
				'music/雪之梦.mp3','music/Attention.mp3',
				'music/蝴蝶泉边.mp3','music/红昭愿.mp3',
				'music/银河纪元（匆匆那年改编）.mp3','music/take my home country roads.mp3',
				'music/美人.mp3','music/月光倾城.mp3'

				];

	var num=0;
	var arrName=[];
	var musicName='';
	var path='';


//......................................................
	
	for(var i=0; i<arrList.length; i++){

			 path=arrList[i];

		for(var j=6; j<path.length-4;j++){
			musicName+=path.charAt(j);
		}
		arrName.push(musicName);
		musicName='';

	}
	for(var i=0; i<arrName.length;i++){
		var Li=i+1;
		oList.innerHTML+='<li>'+'&nbsp;&nbsp;&nbsp'+Li+'.'+'&nbsp'+arrName[i];

	}

	num=parseInt(arrList.length*Math.random());
	if(num>0){oBefore.style.backgroundImage='url(images/icon/before1.png)';}
	if(num<arrList.length){oNext.style.backgroundImage='url(images/icon/next1.png)';}
	oPlayer.src=arrList[num];
	oConte.innerHTML='本地音乐（'+arrList.length+'首)';
	oInfor.innerHTML='当前正在播放'+'<br>'+arrName[num];
	aLi[num].style.color='#15d9fa';
	allTime.innerHTML='00:00';
	playTime.innerHTML='00:00';
	oProgress1.style.width='0';
	oPlayer.volume=0.8;
	oProgress3.style.width=oPlayer.volume*240;


	function toTwo(n) {return n<10? '0'+n:''+n;}
	var Timer1=setInterval(fnTime,100);

	fnRotate();
	fnClick2();

	oPlay.onmouseover=function fnPrompt(){
		if(oPlayer.paused){oPlay.title='点击播放';}
		else{oPlay.title='点击暂停';}
	}


	
//................................................................
	function fnTime(){
		var time1=parseInt(oPlayer.duration);
		var time2=parseInt(oPlayer.currentTime);
		if(!isNaN(time1)){
		allTime.innerHTML=toTwo(parseInt(time1/60))+':'+toTwo(time1%60);
		playTime.innerHTML=toTwo(parseInt(time2/60))+':'+toTwo(time2%60);
		}else{allTime.innerHTML='00:00';playTime.innerHTML='00:00'}

		allTime.style.color='rgb(200,200,200)';

		oProgress1.style.width=parseInt(time2/time1*240)+'px';

		if(oPlayer.paused){
		oPlay.style.backgroundImage='url(images/icon/play-ico.png)';
		playTime.style.color='rgb(200,200,200)';

		}
		else{oPlay.style.backgroundImage='url(images/icon/puased.png)';}

		oProgress4.onmouseover=function(){
			fnVioce();
			var vioce=parseInt(oPlayer.volume*100);
			oProgress4.title='当前音量'+vioce+'%,'+'点击调整音量';
			
		}	
		oProgress3.onmouseover=function(){
			fnVioce();
			var vioce=parseInt(oPlayer.volume*100);
			oProgress3.title='当前音量'+vioce+'%,'+'点击调整音量';
			
		}
		function fnVioce(){		
			oProgress4.onclick=function(e){
			var x=0;
			x=e.offsetX;
			oPlayer.volume=x/240;
			oProgress3.style.width=x+'px';
		}}
		

		oProgress2.onclick=function(e){
			oPlayer.currentTime='';
			var x=0;
			x=e.offsetX;
			oPlayer.currentTime=x/240*time1;
			oProgress1.style.width=x+'px';
		}


	}

	oPlay.onclick=function fnClick1(){
		
		if(oPlayer.paused){
			oPlayer.play();			
			oPlay.style.backgroundImage='url(images/icon/puased.png)';
			fnTurn();
			Timer1=setInterval(fnTime,100);
		}
		else{
			oPlayer.pause();
			clearInterval(Timer1);
			oPlay.style.backgroundImage='url(images/icon/play-ico.png)';
			fnTurn();
		}
	}

	function fnClick2(){for(var i=0; i<arrList.length; i++){
		aLi[i].index=i;
		aLi[i].onclick=function(){
			num=this.index;
			if(num>0){oBefore.style.backgroundImage='url(images/icon/before1.png)';}
			else{oBefore.style.backgroundImage='url(images/icon/before0.png)';}
			oPlayer.src='';
			for(var i=0;i<arrList.length;i++){aLi[i].style.color='';}
			oPlayer.src=arrList[num];
			oPlayer.play();
			oInfor.innerHTML='当前正在播放'+'<br>'+arrName[num];
			aLi[num].style.color='#15d9fa';
			fnTime();
			fnTurn();
				}
			}
			
		}
		
	// function autoPlay(){	// 		if(oPlayer.paused){
	// 				aLi[num].style.color='';
	// 			 	num=parseInt(arrList.length*Math.random());
	// 			 	oPlayer.src=arrList[num];
	// 			 	fnTime();
	// 				fnTurn();
	// 				oInfor.innerHTML='当前正在播放'+'<br>'+arrName[num];}
	// 				aLi[num].style.color='#15d9fa';
	// 			if(oPlayer.paused){
	// 			 	var Timer3=setTimeout(function(){
	// 					oPlayer.play();
	// 				},2000);}
				
	// 		}

	function fnTurn(){
		function fn1(num){
					
					for(var i=0;i<arrList.length;i++){aLi[i].style.color='';}
					oPlayer.currentTime=0;
					oPlayer.src=arrList[num];
					fnTime();
		oBefore.onclick=function(){if(num>1){num--; fn1(num);}else{num=0;fn2(num);}}
					
					oPlayer.play();
					oNext.style.backgroundImage='url(images/icon/next1.png)';
					oBefore.style.backgroundImage='url(images/icon/before1.png)';
					oInfor.innerHTML='当前正在播放'+'<br>'+arrName[num];
					aLi[num].style.color='#15d9fa';
					if(oPlayer.paused){oPlay.style.backgroundImage='url(images/icon/puased.png)';}
						}
		function fn2(num){
				
				for(var i=0;i<arrList.length;i++){aLi[i].style.color='';}
				oBefore.style.backgroundImage='url(images/icon/before0.png)';
				
				oPlayer.src='';
				oPlayer.src=arrList[num];
				fnTime();
				oPlayer.play();
				oInfor.innerHTML='当前正在播放'+'<br>'+arrName[num];
				aLi[num].style.color='#15d9fa';
				if(oPlayer.paused){oPlay.style.backgroundImage='url(images/icon/puased.png)';}
			}	
		oBefore.onclick=function(){if(num>1){num--; fn1(num);}else{num=0;fn2(num);}}
		oNext.onclick=function(){if(num<arrList.length-1){num++; fn1(num);}else{num=0; fn2(num);}}


	}



//...............................................................................

	var oIcon=document.getElementById('music-ico');
	var oMwarper=document.getElementById('music-wraper');
	oIcon.onclick=function(){
		if(oMwarper.style.display==='none'){
			oMwarper.style.display='table';
			oIcon.title='点击收起界面'
		}else{oMwarper.style.display='none';oIcon.title='点击展开音乐界面'}	}

		function fnRotate(){	
			var deg=0;
			var rotateTime= setInterval(function(){
				if(!oPlayer.paused){
				if(deg>360){deg=0;}
				deg+=12;
				oIcon.style.transform='rotate('+deg+'deg)';
				oIcon.style.backgroundImage='url(images/icon/mu-ico2.png)';
				oIcon.style.opacity=1;
			}
		},50);
		
		}
	











///......................................................................
// ///
// <!-- 
// var winWidth = 0;
// var winHeight = 0;
// function findDimensions() //函数：获取尺寸
// {
// //获取窗口宽度
// if (window.innerWidth)
// winWidth = window.innerWidth;
// else if ((document.body) && (document.body.clientWidth))
// winWidth = document.body.clientWidth;
// //获取窗口高度
// if (window.innerHeight)
// winHeight = window.innerHeight;
// else if ((document.body) && (document.body.clientHeight))
// winHeight = document.body.clientHeight;
// //通过深入Document内部对body进行检测，获取窗口大小
// if (document.documentElement  && document.documentElement.clientHeight && document.documentElement.clientWidth)
// {
// winHeight = document.documentElement.clientHeight;
// winWidth = document.documentElement.clientWidth;
// }
// //结果输出至两个文本框

// document.getElementById('wraper').style.transform='scale('+winWidth/360+')';
// document.getElementById('wraper').style.marginTop=(winWidth/360-1)*600/2;

// }
// findDimensions();
//调用函数，获取数值
// window.onresize=findDimensions;
//-->
//
//
//


}