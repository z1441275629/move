//参数说明：url是需要跳转的页面路径；sendMsg是一个对象，里面是需要传递的键值对
//无返回值
//调用环境：父页面
function gogogo(url,sendMsg){
	var str="";
	for(let key in sendMsg){
		str+=encodeURIComponent(key)+"="+encodeURIComponent(sendMsg[key])+"&";//这样会在最后面多一个“&”
	}
	str=str.slice(0,str.length-1);
	//console.log(str);
	location.href=""+url+"?"+str;
}


//参数说明：不需要参数；
//返回值：键值对json数组，键用key取，值用value取；
//调用环境：子页面（或其他的网页）
function getMsgFromLocation(){
	var dizhi=decodeURIComponent(location.href);
	var allMsg=dizhi.split("?")[1];//长字符串
	allMsg=allMsg.replace(/%20/g," ");//把（%20）转换为空格
	var arrAll=allMsg.split("&");
	var arrJson=[];
	for(var i=0;i<arrAll.length;i++){
		arrJson[i]={};
		arrJson[i].key=arrAll[i].split("=")[0];
		arrJson[i].value=arrAll[i].split("=")[1];
	}
	//console.log(arrJson);
	return arrJson;
}
//示例
/*
 gogogo("bb.html",{
					name:"付正义",
					sex:"男",
					age:"3岁"
				}
 ); 
 */
/*
 var data=getMsgFromLocation();
*/