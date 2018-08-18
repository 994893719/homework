/**
 * Created by JetBrains WebStorm.
 * User: Administrator
 * Date: 18-8-8
 * Time: 下午2:39
 * To change this template use File | Settings | File Templates.
 */
//淡入淡出
(function(){
 more($(".mytb"));
 more($(".collect"));
 more($(".search"));
 more($(".gate"));
 more($(".mark"));
 function more(obj) {
     var oP=obj.find("p");
   obj.hover(function () {
      oP.stop().slideDown("slow");
   },function () {
       oP.stop().slideUp("slow");
   })
 }
})();
//宝贝店铺
(function(){
var aSpan=$(".sub span a");
var tExt=$(".sub input");
    //console.log(tExt)
var arrText=["宝贝搜索","店铺搜索"];
var icur=0
tExt.val(arrText[0]);
    aSpan.each(function(index){
        $(this).click(function(){
            icur=index;
            aSpan.removeClass("cur").eq(index).addClass("cur");
            tExt.val(arrText[index]);
        })
    })
    tExt.focus(function(){
        tExt.val("");
    })
    tExt.blur(function(){
        tExt.val(arrText[icur]);
    })
})();
// 导航 
(function () {
    var aDiv=$(".nav div");
    var aLi=$(".sub ul li");
    var aUli=$(".nav ul li");
    aUli.eq(0).addClass("cur")
    aLi.eq(0).addClass("cur");
    aLi.each(function(index){
        $(this).click(function(){
            //console.log(index);
            
            aLi.removeClass('cur').eq(index).addClass("cur");
            aDiv.hide().eq(index).slideDown("slow");
        })
    })
    aUli.each(function (index) {
        $(this).mouseover(function () {
            aUli.removeClass("cur").eq(index).addClass("cur");
        })
    })
})();
// 幻灯片
(function () {
    var aPic=$("#pic li");
    var aList=$("#list li");
    aPic.hide().eq(0).show();
    var time=null;
    var icur=0;
    autoplay();
    function autoplay(){
        clearInterval(time);
        time=setInterval(function () {
            icur++;
            icur >= aPic.length && (icur = 0);
            aList.removeClass("cur").eq(icur).addClass("cur");
            aPic.stop().hide().eq(icur).show("slow");
            //console.log(icur);
        },2000)
    }
   aPic.hover(function () {
       clearInterval(time);
   },function () {
       autoplay();
   });

    aList.each(function(index){
        //$(this).stop();
        $(this).hover(function () {
                clearInterval(time);
                icur=index;
            },function () {
                autoplay();
            });
        $(this).mouseover(function(){
            //console.log(index)
            //aPic.stop();
            if(aList.eq(index).hasClass("cur")){
                aList.stop();
            }
            else
            {
            aList.removeClass("cur").eq(index).addClass("cur");
            aPic.stop().hide().eq(index).show("slow");
            }
        })
    })
})();
//倒计时
(function(){
    var h=23;
    var m=59;
    var s=59;
    setInterval(function(){
        if(m<10&&s<10){
            $('#time').html(h+'&nbsp;&nbsp;'+'0'+m+'&nbsp;&nbsp;'+'0'+s);
        }else if(m<10&&s>=10){
            $('#time').html(h+'&nbsp;&nbsp;'+'0'+m+'&nbsp;&nbsp;'+s);
        }else if(m>=10&&s<10){
            $('#time').html(h+'&nbsp;&nbsp;'+m+'&nbsp;&nbsp;'+'0'+s);
        }else {
            $('#time').html(h+'&nbsp;&nbsp;'+m+'&nbsp;&nbsp;'+s);
        }
        s--;
        if(s<0){
        //如果秒数少于0就变成59秒
            s=59;
            m--;
        }
        if(m<0){
            m=59;
            h--;
        }
    },1000)
})();
//滚动条
(function(){
    var timeId=null;
    var oBox = document.getElementById("fix");
    var posTop = oBox.offsetTop;
    window.onscroll = function(){
        var scrollTop = window.pageYOffset  //用于FF    解决 找根元素的起始点不一致的情况；
            || document.documentElement.scrollTop
            || document.body.scrollTop
            || 0;

        if(oBox.offsetTop==posTop+scrollTop){
            clearTimeout(timeId);
        }
        else{
            timeId=setTimeout(function(){
                /*
                                var iSpeed=(scrollTop-oBox.offsetTop)/6;
                             iSpeed>0?iSpeed=Math.ceil(iSpeed):iSpeed=Math.floor(iSpeed);
                */
                oBox.style.top = posTop + scrollTop + 'px';//console.log(iSpeed);
            },300)
        }
        //console.log(scrollTop);
        //console.log(oBox.offsetTop);

    }
})();
//蒙版
(function(){
  $(".goods ul li").hover(function(){
     $(this).siblings().find("i").addClass("opacity_bg");
     $(this).find("em").stop().show("slow");
    },function(){
     $(this).siblings().find("i").removeClass("opacity_bg");
     $(this).find("em").stop().hide("slow");
    })
/******************************************************************************/
  $(".dress .ul1 li").hover(function(){
     $(this).siblings().find("i").addClass("opacity_bg");
     $(this).parent().siblings().children().find("i").addClass("opacity_bg");
     $(this).find("em").stop().show("slow");
    },function(){
     $(this).siblings().find("i").removeClass("opacity_bg");
     $(this).parent().siblings().children().find("i").removeClass("opacity_bg");
     $(this).find("em").stop().hide("slow");
    })
     $(".dress .ul2 li").hover(function(){
     $(this).siblings().find("i").addClass("opacity_bg");
     $(this).parent().siblings().children().find("i").addClass("opacity_bg");
     $(this).find("em").stop().show("slow");
    },function(){
     $(this).siblings().find("i").removeClass("opacity_bg");
     $(this).parent().siblings().children().find("i").removeClass("opacity_bg");
     $(this).find("em").stop().hide("slow");
    })
/*************************************************************************/
   $(".sam .ul1 li").hover(function(){
     $(this).siblings().find("i").addClass("opacity_bg");
     $(this).parent().siblings().children().find("i").addClass("opacity_bg");
     $(this).find("em").stop().show("slow");
    },function(){
     $(this).siblings().find("i").removeClass("opacity_bg");
     $(this).parent().siblings().children().find("i").removeClass("opacity_bg");
     $(this).find("em").stop().hide("slow");
    })
     $(".sam .ul2 li").hover(function(){
     $(this).siblings().find("i").addClass("opacity_bg");
     $(this).parent().siblings().children().find("i").addClass("opacity_bg");
     $(this).find("em").stop().show("slow");
    },function(){
     $(this).siblings().find("i").removeClass("opacity_bg");
     $(this).parent().siblings().children().find("i").removeClass("opacity_bg");
     $(this).find("em").stop().hide("slow");
    })
    $(".sam .ul3 li").hover(function(){
     $(this).siblings().find("i").addClass("opacity_bg");
     $(this).parent().siblings().children().find("i").addClass("opacity_bg");
     $(this).find("em").stop().show("slow");
    },function(){
     $(this).siblings().find("i").removeClass("opacity_bg");
     $(this).parent().siblings().children().find("i").removeClass("opacity_bg");
     $(this).find("em").stop().hide("slow");
    })
})();