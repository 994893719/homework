/**
 * Created by JetBrains WebStorm.
 * User: Administrator
 * Date: 18-7-24
 * Time: 下午12:45
 * To change this template use File | Settings | File Templates.
 */
var get={
    byId:function(id){
        return document.getElementById(id);
    },
    byClass:function(clsname,oParent){
         var arr=[];
         var reg=new RegExp("(^| )"+clsname+"( |$)");
         var aElme=this.byTag("*",oParent);
         for(var i=0;i<aElme.length;i++) reg.test(aElme[i].className)&&arr.push(aElme[i]);
         return arr;
    },
    byTag:function(el,obj){
       return(obj||document).getElementsByTagName(el);
    }
};
function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj,false)[attr];
    }
};