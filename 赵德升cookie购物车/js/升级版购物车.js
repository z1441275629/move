window.onload=function(){

	var ids=document.getElementsByClassName("NO");
	var names=document.getElementsByClassName("name");
	var plus=document.getElementsByClassName("plus");
	var minus=document.getElementsByClassName("minus");
	var numInput=document.getElementsByClassName("numInput");
	var trs=document.getElementsByTagName("tr");
	var prices=document.getElementsByClassName("price");
	var sums=document.getElementsByClassName("sum");
	var check=document.getElementsByClassName("check");
	var deletes=document.getElementsByClassName("delete");
	
	var table=document.getElementsByTagName("table")[0];
	var zongshu=document.getElementById("zongshu");
	var zongjinge=document.getElementById("zongjinge");
	//console.log(zongshu+","+zongjinge);
	
	var arr=[];
	var arrStr=[];
	var _cookie=getCookie("goodsInf");
	console.log(_cookie);
	if(_cookie==""){
		//页面加载的时候计算初始的金额
		for(var i=0;i<sums.length;i++){
			var danjia=prices[i].firstElementChild.innerHTML.split("￥")[1];
			console.log(danjia);
			var num=numInput[i].value;
			var sum=danjia*num;
			sums[i].firstElementChild.innerHTML="￥"+sum;
		}
		
		sumAll();
		zongLiang()
	}else{
		//根据cookie改变页面
			//数据转换string==>Array==>JSON
		var arr111=_cookie.split("},{");
		//console.log(arr111);
		for(var i=0;i<arr111.length;i++){
			
			numInput[i].value=arr111[i].split("\",\"")[3].split("\":\"")[1];
			
			
			var danjia=prices[i].firstElementChild.innerHTML.split("￥")[1];
			//console.log(danjia);
			var num=numInput[i].value;
			var sum=danjia*num;
			sums[i].firstElementChild.innerHTML="￥"+sum;
			
			var isChecked=arr111[i].split("\",\"")[5].split(":")[1].split("\"")[0];
			console.log(isChecked);
			if(isChecked.indexOf("true")!=-1){
				check[i].firstElementChild.checked=true;
			}else{
				check[i].firstElementChild.checked=false;
			}
			
		}
		
		sumAll();
		zongLiang()
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
			//console.log(danjia);
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
			//console.log(danjia);
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
			arr[i].goodsChecked=check[i].firstElementChild.checked;
			//arr[i].goodsChecked="true";
			var strJSON=JSON.stringify(arr[i]);
			arrStr[i]=strJSON;
		}
		//console.log(arrStr);
		var str=arrStr.toString();
		//console.log(str);
		saveCookie("goodsInf",str,30);
		
		sumAll();
		
		zongLiang();
	}
	//计算总金额并赋值到页面上
	function sumAll(){
		var totalSum=0;
		for(var i=0;i<sums.length;i++){
			//console.log(check[i].firstElementChild.checked);
			if(check[i].firstElementChild.checked==true){
				totalSum+=Number(sums[i].firstElementChild.innerHTML.split("￥")[1]);
				//console.log(Number(sums[i].firstElementChild.innerHTML.split("￥")[1]));
			}
		}
		zongjinge.innerHTML="￥"+totalSum;
	}
	
	//复选框的点击事件（计算总金额）需要用事件监听的方法写，因为复选框本身有点击事件
	/*function sunForCheckboxChanged(){
		for(var i=0;i<check.length;i++){
//			check[i].firstElementChild.onclick=function(){
//				sumAll();
//			}
			check[i].firstElementChild.adEventLister("click",sumAll,false);
		}
	}*/
	
	for(var i=0;i<check.length;i++){
		check[i].firstElementChild.addEventListener("click",saveToCookie,false);
		//saveToCookie();
	}
	
	//全选
	var quanxuan=document.getElementById("quanxuan");
	quanxuan.addEventListener("click",_quanxuan,false);
	function _quanxuan(){
		for(var i=0;i<check.length;i++){
			check[i].firstElementChild.checked=true;
		}
		saveToCookie();
	}
	//反选
	var fanxuan=document.getElementById("fanxuan");
	fanxuan.addEventListener("click",_fanxuan,false);
	function _fanxuan(){
		for(var i=0;i<check.length;i++){
			//console.log(check[i].firstElementChild.checked);
			if(check[i].firstElementChild.checked==true){
				check[i].firstElementChild.checked=false;
			}else{
				check[i].firstElementChild.checked=true;
			}
		}
		saveToCookie();
	}
	
	//点击删除按钮删除一行（删除该商品）
	function deleteGood(){
		//this.parentNode.parentNode.remove();
		table.deleteRow(this.parentNode.parentNode.rowIndex);
		saveToCookie();
	}
	for(var i=0;i<deletes.length;i++){
		deletes[i].firstElementChild.addEventListener("click",deleteGood,false);
	}
	
	//求所选东西的总数量
	function zongLiang(){
		var zongjianshu=0;
		for(var i=0;i<numInput.length;i++){
			if(check[i].firstElementChild.checked==true){
				zongjianshu+=Number(numInput[i].value);
			}
		}
		zongshu.innerHTML = zongjianshu;
	}
	
}