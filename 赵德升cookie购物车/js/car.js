window.onload=function(){
/*
var ids=document.getElementsByClassName("NO");
var names=document.getElementsByClassName("name");
var plus=document.getElementsByClassName("plus");
var minus=document.getElementsByClassName("minus");
var numInput=document.getElementsByClassName("numInput");
var trs=document.getElementsByTagName("tr");
var prices=document.getElementsByClassName("price");
var sums=document.getElementsByClassName("sum");
*/
var ids=getClass("NO");
var names=getClass("name");
var plus=getClass("plus");
var minus=getClass("minus");
var numInput=getClass("numInput");
var trs=getClass("tr");
var prices=getClass("price");
var sums=getClass("sum");
console.log(ids);

var arr=[];
var arrStr=[];
var _cookie=getCookie("goodsInf");
if(_cookie==""){
	//页面加载的时候计算初始的金额
	for(var i=0;i<sums.length;i++){
		var danjia=prices[i].firstElementChild.innerHTML.split("￥")[1];
		console.log(danjia);
		var num=numInput[i].value;
		var sum=danjia*num;
		sums[i].firstElementChild.innerHTML="￥"+sum;
	}
}else{
	//根据cookie改变页面
		//数据转换string==>Array==>JSON
	var arr111=_cookie.split("},{");
	console.log(arr111);
	for(var i=0;i<arr111.length;i++){
		
		numInput[i].value=arr111[i].split("\",\"")[3].split("\":\"")[1];
		
		var danjia=prices[i].firstElementChild.innerHTML.split("￥")[1];
		console.log(danjia);
		var num=numInput[i].value;
		var sum=danjia*num;
		sums[i].firstElementChild.innerHTML="￥"+sum;
	}
}


//加号的点击事件
for(var i=0;i<plus.length;i++){
	plus[i].index=i;
	plus[i].onclick=function(event){
		var e=event || window.event;
		e.preventDefault;
		//改变input的值
		var m=this.index;
		
		numInput[m].value++;
		//计算该商品总价并赋值至页面
			//获取单价
		var danjia=prices[m].firstElementChild.innerHTML.split("￥")[1];
		console.log(danjia);
		var num=numInput[m].value;
		var sum=danjia*num;
		sums[m].firstElementChild.innerHTML="￥"+sum;
		
		saveToCookie();
	}
}
//减号的点击事件
for(var j=0;j<minus.length;j++){
	minus[j].index=j;
	minus[j].onclick=function(event){
		var e=event || window.event;
		e.preventDefault;
		var n=this.index;
		//var num=numInput[n].value;
		if(numInput[n].value>1){
			numInput[n].value--;
		}
		var danjia=prices[n].firstElementChild.innerHTML.split("￥")[1];
		console.log(danjia);
		var num=numInput[n].value;
		var sum=danjia*num;
		sums[n].firstElementChild.innerHTML="￥"+sum;
		
		saveToCookie();
	}
}
//input失去焦点时，先判断内容是否为数字，然后计算总价格
for(var i=0;i<numInput.length;i++){
	numInput[i].index=i;
	numInput[i].onblur=function(){
		var nn=this.index;
		//console.log(nn);
		if(parseInt(numInput[nn].value)>0){
			var danjia=prices[nn].firstElementChild.innerHTML.split("￥")[1];
			//console.log(danjia);
			var num=parseInt(numInput[nn].value);
			numInput[nn].value=num;
			var sum=danjia*num;
			sums[nn].firstElementChild.innerHTML="￥"+sum;
		}else{
			numInput[nn].value=1;
			var danjia=prices[nn].firstElementChild.innerHTML.split("￥")[1];
			//console.log(danjia);
			var num=parseInt(numInput[nn].value);
			numInput[nn].value=num;
			var sum=danjia*num;
			sums[nn].firstElementChild.innerHTML="￥"+sum;
		}
		
		saveToCookie();
	}
}
//保存到cookie
function saveToCookie(){
	//console.log([1,'agga',46,'好',[12,'en'],{name:'zhao',id:'111'}].toString());//数组里面的JOSN会转换为[object Object]
	//console.log({name:'zhao',id:'111'}.toString());//[object Object]
	//console.log(JSON.stringify({name:'zhao',id:'111'}));//{"name":"zhao","id":"111"}
	
	for(var i=0;i<sums.length;i++){
		arr[i]=new Object;
		arr[i].goodsId=ids[i].firstElementChild.innerHTML;
		arr[i].goodsName=names[i].firstElementChild.innerHTML;
		arr[i].goodsPrice=prices[i].firstElementChild.innerHTML;
		arr[i].goodsNum=numInput[i].value;
		arr[i].goodsSum=sums[i].firstElementChild.innerHTML;
		var strJSON=JSON.stringify(arr[i]);
		arrStr[i]=strJSON;
	}
	//console.log(arrStr);
	var str=arrStr.toString();
	console.log(str);
	saveCookie("goodsInf",str,30);
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

}