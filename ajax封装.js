//参数
/*
obj{
	"method":"get",
	"content":"str",//请求的参数（键值对）
	"url":"url",//请求的地址
	"isYiBu":true,
	"fn":func
}
*/

function ajax_DeSheng(_obj){
	var obj={
		"method":"get",
		"isYiBu":true,
		"fn":null
	}
	for(let key in _obj){
		obj.key=_obj.key;
	}
	var xhr=new XMLHttpRequest();
	let str=obj.url;
	if(obj.method.toLowerCase()=="get"){
		str+="?"+obj.content;
	}
	xhr.open(obj.method,str,obj.isYiBu);
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4 && xhr.status==200){
			obj.fn(xhr.responseText);
		}
	}
	if(obj.method.toLowerCase()=="get"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(obj.content);
	}else{
		xhr.send();
	}
	
}
