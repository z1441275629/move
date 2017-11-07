function  getId(id){ //根据ID获取元素
	return document.getElementById(id);
}
function calcDate(n){ //计算n天后的时间
	var oDate = new Date();
	oDate.setDate(oDate.getDate()+n);
	return oDate;
}
function getStyle(obj,attr){  //获取样式的兼容写法
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return window.getComputedStyle(obj,null)[attr];
	}
}
function getClass(str){  // 通过class获取元素的兼容写法
	var all = document.getElementsByTagName("*");
	var res = [];
	for(var i=0;i<all.length;i++){
		if(all[i].className.indexOf(str)!=-1){
			res.push(all[i]);
		}
	}
	return res;
}
function addClass(obj,str){   // 添加一个className
	if(obj.className.indexOf(str)==-1){
		obj.className +=" "+str;
	}
}
function removeClass(obj,str){   //删除一个className
	obj.className = obj.className.replace(str,"");
}


//存储cookie
function changeDate(_expire){
	var d=new Date();
	d.setDate(d.getDate()+_expire);
	return d;
}
function saveCookie(name,value,_expire){
	document.cookie=encodeURIComponent(name)+"="+encodeURIComponent(value)+";expires="+changeDate(_expire);
}

//获取cookie
function getCookie(key){
	var data=decodeURIComponent(document.cookie).replace(/\s/g,"").split(";");
	for(var i=0;i<data.length;i++){
		if(data[i].split("=")[0]==key){
			return decodeURIComponent(data[i].split("=")[1]);
		}
	}	
}
//删除cookie
function deletCookie(key){
	saveCookie(key,"",-1);
}


function ajax(url, fnSucc, fnFaild)
{
	//1.创建Ajax对象
	var oAjax=null;
	
	if(window.XMLHttpRequest)
	{
		//所有现代浏览器 (IE7+、Firefox、Chrome、Safari 以及 Opera) 都内建了 XMLHttpRequest 对象。
		oAjax=new XMLHttpRequest();
	}
	else
	{
		/*IE7及以下版本使用*/
		oAjax=new ActiveXObject("Microsoft.XMLHTTP");

	}
	
	//2.连接服务器
	oAjax.open('GET', url, true);
	
	//3.发送请求
	oAjax.send();
	
	//4.接收服务器的返回
	oAjax.onreadystatechange=function ()
	{
		if(oAjax.readyState==4)	//完成
		{
			if(oAjax.status==200)	//成功
			{
				fnSucc(oAjax.responseText);
			}
			else
			{
				if(fnFaild)
					fnFaild(oAjax.status);
			}
		}
	};
}