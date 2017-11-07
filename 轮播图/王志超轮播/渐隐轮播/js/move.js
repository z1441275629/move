function getStyle(DOM,name){
		if(DOM.currentStyle){
			return DOM.currentStyle[name];
		}else{
			return getComputedStyle(DOM,false)[name];
		}
	}
function moremove(DOM,JSON){
        
        clearInterval(DOM.timer);

        DOM.timer = setInterval(function(){
             
            for(var attr in JSON){
              //speed设置
              if(attr == 'opacity'){

                var speed = (JSON[attr] - Math.round(parseFloat(getStyle(DOM,attr))*100))/10   
              
              }else{
                

                var speed = (JSON[attr] - parseInt(getStyle(DOM,attr)))/10  
              
              }
             
              speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);


                if(JSON[attr] == Math.round(parseFloat(getStyle(DOM,attr))*100)){

                   clearInterval(DOM.timer)  

                }else{
                    if(attr == 'opacity'){
                       //非ie
                       DOM.style.opacity = (Math.round(parseFloat(getStyle(DOM,attr))*100) + speed)/100 

                       //ie

                       DOM.style.filter = 'alpha(opacity='+(getStyle(DOM,attr)*100+speed)+')'

                    }else{

                      DOM.style[attr] = parseInt(getStyle(DOM,attr)) + speed +"px"

                    }
                 
                }

            }

        },30)

}
function move(DOM,attr,target){
  clearInterval(DOM.timer)
  DOM.timer=setInterval(function(){
    if(attr=='opacity'){
      var cur=Math.round(parseFloat(getStyle(DOM,attr))*100)
    }else{
      var cur=parseInt(getStyle(DOM,attr));
    }
    var speed=(target-cur)/8;
    speed=speed>0?Math.ceil(speed):Math.floor(speed);
    if(cur==target){
      clearInterval(DOM.timer)
    }else{
      if(attr=='opacity'){
        DOM.style.filter='alpha(opacity:'+(cur+speed)+')'
        DOM.style.opacity=(cur+speed)/100
      }else{
        DOM.style[attr]=cur+speed+'px';
      }
    }
  },30)
}