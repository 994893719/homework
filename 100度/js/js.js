/* 搜索框 */
;(function () {
  var aA=$(".menu ul li a");
  var oText=$(".menu input");
  var arrText=['例如:我喜欢自己的风格qqqqqqq',
      '例如:你是吃什么东东',
      '例如:他不喜允吃，只能做一些简单的事',
      '例如:我只考了60分',
      '例如:他是要拿奖学金'];
    var icur=0;
    aA.each(function(index){
        $(this).click(function(){
            icur=index;
            oText.val(arrText[icur]);
            aA.attr('class','');
            $(this).attr('class','cur');
        })
    });
    oText.focus(function(){
        if($(this).val()==arrText[icur]){
           $(this).val('');
        }
      });
    oText.blur(function(){
        if($(this).val()==''){
            $(this).val(arrText[icur])
        }
     })
})();
/* 文字滚动 */
;(function(){
 var oNews=$(".news");
 var oL=$(".menu ol");
 var $BtnUp = $('#ubtn');
 var $BtnDown = $('#dbtn');
 var time=null;
//    <li><b>萱萱</b><span>5分钟前</span><a href="##">写了一篇新文章：那些灿烂华美的瞬间</a></li>
    var arrDate=[
        {'name':'萱萱','time':5,'title':'写了一篇新文章：那些灿烂华美的瞬间'},
        {'name':'阿强','time':5,'title':'写了一篇新文章：那些灿烂华美的瞬间'},
        {'name':'阿迪','time':5,'title':'写了一篇新文章：那些灿烂华美的瞬间'},
        {'name':'阿德','time':5,'title':'写了一篇新文章：那些灿烂华美的瞬间'}
]
    var str="";
    var iH=0;
    var iNow=0;
    for(var i=0;i<arrDate.length;i++){
        str+='<li><b>'+arrDate[i].name+'</b><span>'+arrDate[i].time+'分钟前</span><a href="##">'+arrDate[i].title+'</a></li>'
    }
    oL.html(str);
    iH = oL.find('li').height();
    $BtnUp.click(function(){
         doMove(-1);
     })
    $BtnDown.click(function(){
        doMove(1);
    })
    oNews.hover(function(){
         clearInterval(time);
     },function(){
           autoPlay()
     })
    autoPlay();
    function autoPlay(){
         time = setInterval(function(){
             doMove(-1);
         },2000)
     }
     function doMove(index){
         iNow +=index;
         if(Math.abs(iNow)>arrDate.length-1)iNow = 0;
         if(iNow>0)iNow=-(arrDate.length-1)
         oL.animate({'top':iH*iNow},1000)
     }
})();
/* 产品切换 */
;(function(){
    tab($('.tab1'),$('.ltr ul'),'click');
    tab($('.tab2'),$('.suby ul li'),'click');
    tab($('.tab3'),$('.know ul'),'click');
    tab($('.tab4'),$('.piao ul'),'click');
   function tab(oList,oContent,ev) {
           var aH=oList.children();
           oContent.hide().eq(0).show();
           aH.each(function (index) {
               $(this).on(ev,function(){
                aH.removeClass('cur');
                $(this).addClass('cur');
                oContent.hide().eq(index).show();
               })
           })
   }
})();
/* 图片切换 */
(function () {
    var oOl=$(".rec ol")
    var oUl=$(".rec .ul3 li");
    var oLi=$(".rec ol li img");
    var oP=$(".rec p");
    var arrText = ['爸爸，你去哪里了?',"人是要吃饭才能写代码的","美女是修要修行的.."];
    var tid = null;
    var iNow = 0;
    fade();
    function fade() {
        oUl.each(function (index) {
            if(iNow!=index){
                oUl.eq(index).fadeOut().css('zIndex',1);
                oLi.eq(index).removeClass('cur');
            }else{
                oUl.eq(index).fadeIn().css('zIndex',2);
                oLi.eq(index).addClass('cur')
            }
            oP.text(arrText[iNow]);
        })
    }
    oLi.click(function(){
        iNow=oLi.index(this);
        fade();
    })
    autoPlay();
    function autoPlay(){
        tid = setInterval(function(){
            iNow++;
            iNow = iNow%3;
            fade()
        },3000)
    }
    oOl.hover(
        function(){
            clearInterval(tid)
        },
        function(){
            autoPlay();
        }
    )
    oUl.hover(
        function(){
            clearInterval(tid)
        },
        function(){
            autoPlay();
        }
    )
})();
// 广告
(function (){
    $(".act a ").hover(function(e){
     $(".act img").show();
    },function () {
        $(".act img").hide();
    });
})();
// BBS
(function () {
    var bbs=$('.bbs');
    var oUl=$(".bbs ul");
    var aLi=$('.bbs ul li');
    aLi.each(function (index) {
     $(this).mouseover(function () {
         aLi.removeClass("ho").eq(index).addClass("ho");
     })
    })
})();
