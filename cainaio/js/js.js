/**
 * Created by JetBrains WebStorm.
 * User: zhouweizhen
 * To change this template use File | Settings | File Templates.
 */

// pic in or out
(function(){
        function fadeIn(obj){
             var iCur = getStyle(obj,'opacity');
             if(iCur==1)return false;
             var val = 0;
             clearInterval(obj.timer);
             obj.timer=setInterval(function(){
                 var iSpeed = 5;
                 if(val==100){
                    clearInterval(obj.timer)
                 }else{
                     val +=iSpeed;
                     obj.style.opacity = val/100;
                     obj.style.filter = "alpha(opacity="+val+")";
                 }
             },30)
        }
        function fadeOut(obj){
          var iCur = getStyle(obj,'opacity');
             if(iCur==0)return false;
             var val = 100;
             clearInterval(obj.timer);
             obj.timer=setInterval(function(){
                 var iSpeed = -5;
                 if(val==0){
                    clearInterval(obj.timer)
                 }else{
                     val +=iSpeed;
                     obj.style.opacity = val/100;
                     obj.style.filter = "alpha(opacity="+val+")";
                 }
             },30)
        }
        var oPic = get.byId("pic");
        var aImg = get.byTagName("li",oPic);
        var bgLeft = get.byClsName("lbg",oPic)[0];
        var bgRight = get.byClsName("rbg",oPic)[0];
        var leftBtn = get.byClsName("lbtn",oPic)[0];
        var rightBtn = get.byClsName("rbtn",oPic)[0];
        bgLeft.onmouseover=leftBtn.onmouseover = function(){
               leftBtn.style.display = "block";
         }
        bgLeft.onmouseout =leftBtn.onmouseout= function(){
               leftBtn.style.display = "none"
        }
        bgRight.onmouseover =rightBtn.onmouseover = function(){
                    rightBtn.style.display = "block";
                }
        bgRight.onmouseout =rightBtn.onmouseout= function(){
                            rightBtn.style.display = "none";
                        }
        var num = 0;
        var timId = null;
        leftBtn.onclick = function(){
            clearInterval(timId)
            if(num==0){
                num = aImg.length-1;
            }else{
                num--;
            }
            for(var i=0;i<aImg.length;i++){
                fadeOut(aImg[i]);
            }
            fadeIn(aImg[num]);
        }
       rightBtn.onclick = function(){
            clearInterval(timId)
            if(num==aImg.length-1){
                num =0;
            }else{
                num++;
            }
            for(var i=0;i<aImg.length;i++){
                fadeOut(aImg[i]);
            }
            fadeIn(aImg[num]);
        }
})();
// share
(function(){
  var time=null;
  var oShare=get.byId("share");
  var aLi=get.byTagName("li",oShare);
  function move(obj,width,i,time){
    var speed;
    if(i==1){
        speed=obj.offsetLeft/10;
        speed=speed?Math.ceil(speed):Math.floor(speed);
        if(speed!=0){
            obj.style.left=obj.offsetLeft-speed+"px";
        }
        else{
            clearInterval(time);
        }
    }
      else{
        speed=(width-obj.offsetLeft)/10;
        speed=speed?Math.ceil(speed):Math.floor(speed);
         if(speed != 0){
                obj.style.left = obj.offsetLeft + speed +"px";
            }else{
                clearInterval(time);
            }
        }
    }
     oShare.onmouseover = function(){
        clearInterval(time);
        time = setInterval(function(){move(oShare,210,1,time)},20);
    }
     oShare.onmouseout = function(){
        clearInterval(time);
        time = setInterval(function(){move(oShare,210,-1,time)},20);
    }
})();
//产品轮播
 (function(){
      function move(obj,old,tag){
        clearInterval(obj.timer);
        obj.timer = setInterval(function(){
            var Speed = (tag-old)/10;
            Speed = Speed>0 ? Math.ceil(Speed):Math.floor(Speed);
            if(old== tag){
                clearInterval(obj.timer);
            }else{
                old +=Speed;
                obj.style.left = old + "px";
            }
        },20)
}
        var oList=get.byId("plist");
        var lBtn =get.byId("lbtn");
        var rBtn= get.byId("rbtn");
        var oUl = get.byTagName("ul",oList)[0];
        var oLi = get.byTagName("li",oUl);
        var timer = null;
        var num = 0;
     oUl.innerHTML +=oUl.innerHTML;
     oUl.style.width=oLi[0].offsetWidth*oLi,length+"px";
     lBtn.onclick = function(){
        if(num == oLi.length/2){
            num = 0;
            oUl.style.left = 0 ;
        }
        move(oUl, -num* oLi[0].offsetWidth, -(num+1)*oLi[0].offsetWidth);
        num++;
    }
    rBtn.onclick = function(){
         if(num == 0){
            num = oLi.length/2;
            oUl.style.left = oUl.offsetWidth/2 + "px" ;
        }
        move(oUl, -num* oLi[0].offsetWidth, -(num-1)*oLi[0].offsetWidth);
        num--;     
    }
    oList.onmouseover = lBtn.onmouseover=rBtn.onmouseover=function(){
        clearInterval(timer)
    }
     oList.onmouseout = function(){
         timer = setInterval(autoPlay,3000)
    }
    function autoPlay(){
        lBtn.onclick()
    }
    timer = setInterval(autoPlay,1000)
})();
//注册
var oReg = get.byId("registe");
var oBlock = get.byId("block");
var oClose = get.byId("close");

oReg.onclick = function (e) {
    if(e && e.stopPropagation){
        e.stopPropagation();
    }else{
        window.event.cancelBubble = true;
    }
}
function showReg() {
    oReg.style.display='block';
    oBlock.style.display='block';
}
oClose.onclick = function (f) {
    oReg.style.display = 'none';
    oBlock.style.display = 'none';
}


 

