/**
 * Created by JetBrains WebStorm.
 * User: Administrator
 * Date: 18-7-24
 * Time: 下午12:46
 * To change this template use File | Settings | File Templates.
 */
/* 下拉菜单 */
(function(){
var oBtn1=get.byId("btn1");
var oBtn2=get.byId("btn2");
var oBtn3=get.byId("btn3");
var oTop=get.byId("top");
var oTl=get.byClass("tl",oTop)[0];
var oLi1=get.byTag("li",oTl);
var oLi2=get.byTag("li",oTm);
var oLi3=get.byTag("li",oTr);
var oTm=get.byClass("tm",oTop)[0];
var oTr=get.byClass("tr",oTop)[0];
oBtn1.onclick=function(){
    if(oTl.style.display=="block"){
        oTl.style.display="none"
    } else{
         oTl.style.display="block";
    }
for(var i=0;i<oLi1.length;i++){
  oLi1[i].onclick=function(){
         oTl.style.display="none";
}}};
oBtn2.onclick=function(){
    if(oTm.style.display=="block"){
        oTm.style.display="none"
    } else{
         oTm.style.display="block";
    }
for(var i=0;i<oLi2.length;i++){
  oLi2[i].onclick=function(){
         oTm.style.display="none";
}}};
oBtn3.onclick=function(){
    if(oTr.style.display=="block"){
        oTr.style.display="none"
    } else{
         oTr.style.display="block";
    }
for(var i=0;i<oLi3.length;i++){
  oLi3[i].onclick=function(){
         oTr.style.display="none";
}}};
})();
/*登陆界面*/
(function(){
var oClose=get.byId("close");
var oSub=get.byId("sub");
var oLog=get.byId("log");
var oBlock=get.byId("block");
var oLogn=get.byId("logn");
var oA=get.byTag("a",oLogn)[0];
oLog.onclick = function (e) {
    if(e && e.stopPropagation){
        e.stopPropagation();
    }else{
        window.event.cancelBubble = true;
    }
}
oA.onclick=function(){
        show();
 }
function show(){
    oLog.style.display="block";
    oBlock.style.display="block";
}
oClose.onclick=oSub.onclick=function(){
    oLog.style.display="none";
    oBlock.style.display="none";
};
})();
/*幻灯片*/
(function(){
    oPro=get.byId("pro");
    oList=get.byId("list");
    oUl=get.byTag("ul",oPro);
    oUl1=get.byTag("ul",oList)[0];
    oUl2=get.byTag("ul",oList)[1];
    oli1=get.byTag("li",oUl1);
    oli2=get.byTag("li",oUl2);
    var num=0;
    var time=null;
    var alpha=0;
for(var j=0;j<oli1.length;j++){
        oli1[j].index=j;
        oli1[j].onclick=function(){
            showp(this.index);
        }
    }
oli2[1].onclick=function(){
     num=4;
     for(var i=0;i<oli1.length;i++)
        oli1[i].className="";
        oli1[num].className="cur";
       clearInterval(time);
        for(var i=0;i<oUl.length;i++)
        {
            oUl[i].style.opacity=0;
            oUl[i].style.fliter="alpha(opacity=0)";
        }
     time=setInterval(function(){
         alpha+=2;
         alpha>100 && (alpha=100);
         oUl[num].style.opacity=1;
         oUl[num].style.filter = "alpha(opacity = " + alpha + ")";
         alpha==100 &&clearInterval(time);
     },120)
}
oli2[0].onclick = function(){
    if(num<4){
     for(var i=0;i<oli1.length;i++)
        oli1[i].className="";
        oli1[num+1].className="cur";
        console.log(num);
 }
        clearInterval(time)
         if(num==4){
            clearInterval(time)
            }
            else num++
      for(var i=0;i<oUl.length;i++){
            oUl[i].style.opacity=0;
            oUl[i].style.fliter="alpha(opacity=0)";
            }
      time=setInterval(function(){
         alpha+=2;
         alpha>100 && (alpha=100);
         oUl[num].style.opacity=1;
         oUl[num].style.filter = "alpha(opacity = " + alpha + ")";
         alpha==100 &&clearInterval(time);
     },120)
}
    function showp(a){
        num=a;
        var alpha=0;
    for(var i=0;i<oli1.length;i++)
        oli1[i].className="";
        oli1[num].className="cur";
        clearInterval(time);
        for(var i=0;i<oUl.length;i++)
        {
            oUl[i].style.opacity=0;
            oUl[i].style.fliter="alpha(opacity=0)";
        }
    time=setInterval(function(){
         alpha+=2;
         alpha>100 && (alpha=100);
         oUl[num].style.opacity=1;
         oUl[num].style.filter = "alpha(opacity = " + alpha + ")";
         alpha==100 &&clearInterval(time);
     },120)
    }
})();
/*轮播图*/
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
        var oPic=get.byId("pic");
        var lBtn =get.byId("lbtn");
        var rBtn= get.byId("rbtn");
        var oUl = get.byTag("ul",oPic)[0];
        var oLi = get.byTag("li",oUl);
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
    oPic.onmouseover = lBtn.onmouseover=rBtn.onmouseover=function(){
        clearInterval(timer)
    }
     oPic.onmouseout =lBtn.onmouseout=rBtn.onmouseout= function(){
         timer = setInterval(autoPlay,1000)
    }
    function autoPlay(){
        lBtn.onclick()
    }
    timer = setInterval(autoPlay,1000)
})();
