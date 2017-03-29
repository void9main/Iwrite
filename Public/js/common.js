//header 部分点击的字体改变 (高度为80px部分)
    $(function(){
        $('.head_list ul li').click(function(){
            $('.head_list ul>li>a') .css('color','#666666');
            $('.head_list ul>li>a').eq( $(this).index() ).css('color','#0b53a5');
        });
          
//S_head 部分点击的字体改变  缩小部分的(高度为40px部分)
    $('.S_head ul li').click(function(){
        $('.S_head ul>li>a') .css('color','#666666');
        $('.S_head ul>li>a').eq( $(this).index() ).css('color','#0b53a5');
    });
 
        
//headr  部分的显示（专家智库）
    $(".Zjia").hover(
        function () {
            $('.Zjia_list').css("display" ,'block')
        },
        function () {
            $('.Zjia_list').css("display" ,'none')
        }
    );     
    });
    

//headr  部分的显示（新闻中心）
$(function () {

    $(".newsC").hover(
        function () {
            $('.newsC_list').css("display" ,'block')
        },
        function () {
            $('.newsC_list').css("display" ,'none')
        }
    );
    
//btn部分（点击之后 变色）
    $('.btn_List li').click(function(){
        $('.btn_List li a') .css('color','#666666');
        $('.btn_List li a').eq( $(this).index() ).css('color','#0b53a5');
    });

})




//个人注册部分验证密码强度的
$(function(){ 
	$('#pass').keyup(function () { 
		var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g"); 
		var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g"); 
		var enoughRegex = new RegExp("(?=.{6,}).*", "g"); 
	
		if (false == enoughRegex.test($(this).val())) { 
			$('#level').removeClass('pw-weak'); 
			$('#level').removeClass('pw-medium'); 
			$('#level').removeClass('pw-strong'); 
			$('#level').addClass(' pw-defule'); 
			 //密码小于六位的时候，密码强度图片都为灰色 
		} 
		else if (strongRegex.test($(this).val())) { 
			$('#level').removeClass('pw-weak'); 
			$('#level').removeClass('pw-medium'); 
			$('#level').removeClass('pw-strong'); 
			$('#level').addClass('pw-strong'); 
			 //密码为八位及以上并且字母数字特殊字符三项都包括,强度最强 
		} 
		else if (mediumRegex.test($(this).val())) { 
			$('#level').removeClass('pw-weak'); 
			$('#level').removeClass('pw-medium'); 
			$('#level').removeClass('pw-strong'); 
			$('#level').addClass('pw-medium'); 
			 //密码为七位及以上并且字母、数字、特殊字符三项中有两项，强度是中等 
		} 
		else { 
			$('#level').removeClass('pw-weak'); 
			$('#level').removeClass('pw-medium'); 
			$('#level').removeClass('pw-strong'); 
			$('#level').addClass('pw-weak'); 
			 //如果密码为6为及以下，就算字母、数字、特殊字符三项都包括，强度也是弱的 
		} 
		return true; 
	}); 
}) 

	//foot
	$(function(){ 
		$('.wx').mouseover(function(){
			$('.move_wx').stop(true).css({'display':'block'}).animate({top:100},1000);			
		})
		$('.wx').mouseout(function(){
			$('.move_wx').animate({top:600}).css({'display':'none'});			
		})
	})


	//简历部分thml的js
	//上传照片部分
	$(function(){
	   $('#clickA_resume').click(function(){
	        $("#photoFile_resume").click()
	    });
	});

  //图片上传预览    IE是用了滤镜。
function previewImage(file)
{
  var MAXWIDTH  = 260; 
  var MAXHEIGHT = 180;
  var div = document.getElementById('preview');
  if (file.files && file.files[0])
  {
      div.innerHTML ='<img id=imghead>';
      var img = document.getElementById('imghead');
      img.onload = function(){
        var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
        img.width  =  rect.width;
        img.height =  rect.height;
//                 img.style.marginLeft = rect.left+'px';
        img.style.marginTop = rect.top+'px';
      }
      var reader = new FileReader();
      reader.onload = function(evt){img.src = evt.target.result;}
      reader.readAsDataURL(file.files[0]);
  }
  else //兼容IE
  {
    var sFilter='filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
    file.select();
    var src = document.selection.createRange().text;
    div.innerHTML = '<img id=imghead>';
    var img = document.getElementById('imghead');
    img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
    var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
    status =('rect:'+rect.top+','+rect.left+','+rect.width+','+rect.height);
    div.innerHTML = "<div id=divhead style='width:"+rect.width+"px;height:"+rect.height+"px;margin-top:"+rect.top+"px;"+sFilter+src+"\"'></div>";
  }
}
function clacImgZoomParam( maxWidth, maxHeight, width, height ){
    var param = {top:0, left:0, width:width, height:height};
    if( width>maxWidth || height>maxHeight )
    {
        rateWidth = width / maxWidth;
        rateHeight = height / maxHeight;
         
        if( rateWidth > rateHeight )
        {
            param.width =  maxWidth;
            param.height = Math.round(height / rateWidth);
        }else
        {
            param.width = Math.round(width / rateHeight);
            param.height = maxHeight;
        }
    }
    param.left = Math.round((maxWidth - param.width) / 2);
    param.top = Math.round((maxHeight - param.height) / 2);
    return param;
}
 
 //(工作经历)获取你要即使编辑的元素，这边就是td啦    
    var tds=document.getElementsByTagName("td");
    for (var i=0;i<tds.length;i++){
        tds[i].onclick=function () {
            var t=this.innerHTML;
            this.innerHTML="<input type='text' class='txt' value="+t+">";
            var txt=document.getElementsByClassName("txt")[0];
            var that=this;
            txt.focus();
            txt.onblur=function () {
                that.innerHTML=txt.value;
                txt.style.display="none";
            }
            txt.onclick=function (event) {
				if (event.stopPropagation){
					event.stopPropagation();
				}else {
					even.cancelBubble();
				}
            }
        }

    }
    
//智库专家  专家风采  html 
  //图片的跳转
    $(document).ready(function () {
        //初始化
        init();
        function init() {
            $(".pic_mien").css("left","630px");
            $(".pic_mien:eq(0)").css("left","0px");
        }
        
        var l=0;
        var ll=$(".pic_mien").length;
        $(".next_mien").click(function () {
            l++;
            if(l>=ll){
                l=0;
            }
            $(".pic_mien:eq("+l+")").css({"left":"0"}).siblings().css("left","630px");
        });
        $(".prev_mien").click(function () {
            if(l<=0){
                l=ll;
            }
            l--;
            $(".pic_mien:eq("+l+")").css({"left":"0"}).siblings().css("left","630px");
        })
    })


