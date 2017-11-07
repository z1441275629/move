/**
 * Created by Avery on 2017/2/15.
 * Edited by Avery on 2017/2/15 9:56.
 */

function getStyle(obj,attr){//获取css样式
    if(obj.currentStyle){//ie
        return obj.currentStyle[attr];
    }
    else{
        return getComputedStyle(obj,null)[attr];
    }
}

function move(obj,json){  	// 属性值可以不加px 透明度是用0-1之间的数值
    //clearInterval(obj.timer)	// 清除正在执行的定时器
	var iCur={},iTarget={};
    var iSpeed  = {};

	
	for(var attr in json){
		//var timer[attr]=null;
		if(attr=="opacity"){
			iCur[attr] = parseFloat(getStyle(obj,"opacity"))*100;
			iTarget[attr] = parseInt(json[attr]*100);
		}else{
			iCur[attr] = Math.round(parseFloat(getStyle(obj,attr)));
			iTarget[attr] = parseInt(json[attr]);
		}
		iSpeed[attr] = (iTarget[attr] - iCur[attr])/100;//获取相对速度
       // iSpeed[attr] = iSpeed[attr]>0?Math.ceil(iSpeed[attr]):Math.floor(iSpeed[attr]);//上下取整
	}	
		
	var count=0;	
	obj.timer=setInterval(function(){
		for(let attr in json){
				
			if(count<100){
				iCur[attr]+=iSpeed[attr];
				if(attr == "opacity"){
					obj.style.filter ='alpha(opacity:'+(iCur[attr])+')';
					obj.style.opacity =(iCur[attr])/100;
				}else{
					obj.style[attr] =iCur[attr]+"px";
				}	
			}else{
				clearInterval(obj.timer);
			}
			
		}
		count++;
			
	},16);
}