function showBigImg(obj,multiple,_json){
	

	var aimImg;
	var mirrorArea;
	var showA;
	var bigImg;
	
	amplification(obj,multiple,_json);
	function amplification(obj,multiple,_json){
		obj.style.position="relative";
		aimImg=obj.getElementsByTagName("img")[0];
		aimImg.style.width="100%";
		aimImg.style.height="100%";
		createMirror(obj,_json);//创建镜子
		showArea(obj,multiple,_json);
		obj.onmouseover=function(event){
			mirrorArea.style.display="block";
			showA.style.display="block";
		}
		obj.onmouseout=function(event){
			mirrorArea.style.display="none";
			showA.style.display="none";
		}
		obj.onmousemove=function(event){
			var e=event||window.event;
			let left=e.pageX-parseInt(mirrorArea.style.width)/2-obj.offsetLeft;
			let top=e.pageY-parseInt(mirrorArea.style.height)/2-obj.offsetTop;
			if(left<0){
				left=0;
			}else if(left>obj.offsetWidth-mirrorArea.offsetWidth){
				left=obj.offsetWidth-mirrorArea.offsetWidth
			}
			if(top<0){
				top=0;
			}else if(top>obj.offsetHeight-mirrorArea.offsetHeight){
				top=obj.offsetHeight-mirrorArea.offsetHeight
			}
			mirrorArea.style.left=left+"px";
			mirrorArea.style.top=top+"px";
			bigImg.style.left=(-1*left*multiple)+"px";
			bigImg.style.top=(-1*top*multiple)+"px";
		}
	}
	
	function createMirror(obj,_json){//创建镜子函数
		let DJson=setDefault(_json);//设置默认值
		mirrorArea=document.createElement("div");
		mirrorArea.style.cssText="display:none;position:absolute;width:"+DJson.width+"px;height:"+DJson.height+"px;background-color:rgba(0,0,0,0.5);";
		obj.appendChild(mirrorArea);
	}
	
	function showArea(obj,multiple,_json){//创建显示（放大）区域函数
		let DJson=setDefault(_json);
		showA=document.createElement("div");
		
		obj.appendChild(showA);
		bigImg=document.createElement("img");
		bigImg.style.cssText="position:absolute;";
		bigImg.style.width=aimImg.offsetWidth*multiple+"px";
		bigImg.style.height=aimImg.offsetHeight*multiple+"px";
		bigImg.src=aimImg.src;
		
		showA.appendChild(bigImg);
		showA.style.cssText="display:none;overflow:hidden;position:relative;width:"+(DJson.width*multiple)+"px;height:"+(DJson.height*multiple)+"px;";
		
		showA.style.left=obj.offsetWidth+10+"px";
		showA.style.top=-1*obj.offsetHeight-4+"px";
		//alert(aimImg.src);
		//console.log(aimImg.src);
		
		//showA.style.backgroundRepeat="no-repeat";
		
	}
	
	function setDefault(_json){//设置默认值函数
		let defaultJson={
			width:"10",
			height:"10"
		}
		if(_json){
			for(let key in _json){
				defaultJson[key]=_json[key];
			}
		}
		return defaultJson;
	}
}