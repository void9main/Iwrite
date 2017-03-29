//index
    $(function(){
    	//header 部分点击的字体改变 (高度为80px部分)
        $('.head_list ul li').click(function(){
            $('.head_list ul>li>a') .css('color','#666666');
            $('.head_list ul>li>a').eq( $(this).index() ).css('color','#0b53a5');
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
          
		//headr  部分的显示（新闻中心）
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
    
    });
//head 部分的缩小和放大部分
$(function(){
	$('.main').onepage_scroll({
		sectionContainer: '.page',
		loop:'false',
		afterMove: function(index){
			switch(index){
				case 1:
            		 $('.header').animate({ width: "100%",height: "80px",}, "1000");
		             $('.head_box').animate({ width: "1000px",height: "80px",}, "1000");
		             $('.head_list').animate({ width: "640px",height: "40px",marginTop:'20px'}, "1000");
		             $('.register').animate({ width: "140px",height: "40px",marginTop:'-60px'}, "1000");
		//           $('.logo_1').animate({ width: "180px",height: "40px"}, "1000");
		             $('.logo_p').animate({ width: "60px",height: "80px",marginTop:'-2px',marginLeft:'5px',}, "1000");
		            
		            //登录注册css
		             $('.login').animate({width:'60px',height:'30px',lineHeight:'30px',textAlign: 'center',fontSize:'16px'}) 	
					 $('.enroll').animate({width:'60px',height:'30px',lineHeight:'30px',textAlign: 'center',fontSize:'16px'})
					 
					 //新闻中心list问题
					 $('.list_none').show();
					 $('.newsC_list').css({'height':'205'});
					 $('.Zjia_list').css({'height':'140'});
     	 
					break;
					
				case 2:
					 $('.header').animate({ width: "100%",height: "40px",}, "1000");
			    	 $('.head_box').animate({ width: "1000px",height: "40px",}, "1000");
			         $('.head_list').animate({ width: "640px",height: "40px",marginTop:'0',zIndex: 100,}, "1000");
			         $('.register').animate({ width: "140px",height: "40px",marginTop:'-34px'}, "1000");
			//           $('.list_none').animate({ width: "100px",height: "35px"}, "1000");
			 		 $('.logo_p').animate({ width: "40px",height: "30px",marginTop:'5px',marginLeft:'25px',}, "1000"); 
			      
					 $('.login').animate({width:'40px',height:'20px',lineHeight:'20px',textAlign: 'center',fontSize:'14px'}); 	
					 $('.enroll').animate({width:'40px',height:'20px',lineHeight:'20px',textAlign: 'center',fontSize:'14px'});
					 
					
					 $('.list_none').hide();
					 $('.newsC_list').css({'height':'185'});
					 $('.Zjia_list').css({'height':'120'});
							
					break;
					
				case 3:
					break;
					
				case 4:
					break;
			}
		}
	});
});

//企业登录部分	
	var code ; //在全局 定义验证码
	function createCode(){ 
	code = new Array();
	var codeLength = 4;//验证码的长度
	var checkCode = document.getElementById("checkCode");
	checkCode.value = "";
	
	var selectChar = new Array(2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z');
	
	for(var i=0;i<codeLength;i++) {
	   var charIndex = Math.floor(Math.random()*32);
	   code +=selectChar[charIndex];
	}
	if(code.length != codeLength){
	   createCode();
	}
	checkCode.value = code;
	}
	
	function validate () {
	var inputCode = document.getElementById("input1").value.toUpperCase();
	
	if(inputCode.length <=0) {
	   alert("请输入验证码！");
	   return false;
	}
	else if(inputCode != code ){
	   alert("验证码输入错误！");
	   createCode();
	   return false;
	}
	else {
	   document.getElementById("myForm").submit()
	   return true;
	}
	}
	function formSubmit(){
	  document.getElementById("myForm").submit()
	}


//联系我们 contactUs
	// 百度地图API功能
	var map = new BMap.Map("allMap_contact");    // 创建Map实例
	map.centerAndZoom(new BMap.Point(120.11648,30.273307), 17);  // 初始化地图,设置中心点坐标和地图级别
	map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
	map.setCurrentCity("杭州");          // 设置地图显示的城市 此项是必须设置的
	map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放




