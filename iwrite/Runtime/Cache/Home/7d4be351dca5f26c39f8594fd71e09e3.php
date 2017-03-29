<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<link rel="shortcut icon" href="/Iwrite/Public/img/logo.jpg" />
		<link rel="stylesheet" type="text/css" href="/Iwrite/Public/css/bootstrap.css" /> 
		<link rel="stylesheet" type="text/css" href="/Iwrite/Public/css/bootstrap-theme.min.css" />
		<link rel="stylesheet" type="text/css" href="/Iwrite/Public/css/Iwrite.css" /> 
		<link rel="stylesheet" type="text/css" href="/Iwrite/Public/weditor/dist/css/wangEditor.min.css" /> 
		<script type="text/javascript" src="/Iwrite/Public/js/jquery.min.js"></script>
		<script type="text/javascript" src="/Iwrite/Public/weditor/dist/js/wangEditor.min.js"></script>
		<script type="text/javascript" src="/Iwrite/Public/edit/ueditor.config.js"></script>
		<script type="text/javascript" src="/Iwrite/Public/edit/ueditor.all.min.js"></script>
		<script type="text/javascript" src="/Iwrite/Public/edit/lang/zh-cn/zh-cn.js"></script>
		<script type="text/javascript" src="/Iwrite/Public/js/bootstrap.min.js"></script>
		<script type="text/javascript" src="/Iwrite/Public/js/echarts.min.js"></script>
		<script type="text/javascript" src="/Iwrite/Public/upload/plupload.full.min.js"></script>
		<title>Iwrite</title>
	</head>

	<body class="body-style-cloud">
			<div id="mainDiv" class="cloudmaindiv navbar-fixed-top" style="background: url(/Iwrite/Public/img/Iwrite.jpeg);" align="center">
	<a href="<?php echo U('Cloud/edit');?>">
		<button class="btn btn-success btn-lg glyphicon glyphicon-pencil" style="margin-top: 300%;height: 50px;">记录点滴</button>
	</a>
</div>
			<!--左侧-->
			<div style="margin-left: 15%;width: 70%;position: absolute;font-family: '微软雅黑';height: 100%;position: absolute;">
				<ul id="myTab" class="nav nav-tabs ">
				  <li class="active"><a href="#home" data-toggle="tab">每日精选</a></li>
				  <li><a href="#ios" data-toggle="tab">发现精彩</a></li>
				  <li><a href="#settings" data-toggle="tab">经典著作</a></li>
				  <li><a href="#settings" data-toggle="tab">文库</a></li>
				  <div align="right">
			  			<button class="glyphicon glyphicon-user btn-link" style="margin-right:3%;height: 40px;width:40px;"></button>
			  	 </div>
				</ul>
				<div id="myTabContent" class="tab-content">
					<div class="tab-pane fade in active" id="home">
						<div class="spinner_Iwrite"></div>
					</div>
					<div class="tab-pane fade" id="ios">
						<div class="spinner_Iwrite"></div>
					</div>
					
				</div>
			</div>
			<!--右侧-->
			<div class="navbar-fixed-top" style="width: 15%;height: 100%;position: absolute;font-family: '微软雅黑';background-color: #e9e9e9;margin-left: 85%;" align="center"> 
	<ul class="list-group">
	  <div id="history1" class="index_right_div">
		  <li class="list-group-item " >编辑历史  </li>
		   <div style="display: none;" id="historydiv1">
			   <a id="a_index"><li class="list-group-item_two ">我的信息</li></a>	   
			   <a id="a_index"><li class="list-group-item_two ">我的信息</li></a>	
			   <li class="list-group-item_two ">我的信息</li>
			   <li class="list-group-item_two ">我的信息</li>
			   <li class="list-group-item_two ">我的信息</li>
		  </div>
	  </div>
	 <div id="history2" class="index_right_div">
		  <li class="list-group-item " >我的文章  </li>
		   <div style="display: none;" id="historydiv2">
			   <li class="list-group-item_two ">我的信息</li>	   
			   <li class="list-group-item_two ">我的信息</li>
			   <li class="list-group-item_two ">我的信息</li>
			   <li class="list-group-item_two ">我的信息</li>
			   <li class="list-group-item_two ">我的信息</li>
		  </div>
	 </div>
	 <div id="history3" class="index_right_div">
		  <li class="list-group-item " >返回大厅  </li>
		   <div style="display: none;" id="historydiv3">
			   <li class="list-group-item_two ">我的信息</li>	   
			   <li class="list-group-item_two ">我的信息</li>
			   <li class="list-group-item_two ">我的信息</li>
			   <li class="list-group-item_two ">我的信息</li>
			   <li class="list-group-item_two ">我的信息</li>
		  </div>
	  </div>
	  <div id="history4" class="index_right_div">
		  <li class="list-group-item " >云储存  </li>
		   <div style="display: none;" id="historydiv4">
			   <li class="list-group-item_two ">我的信息</li>	   
			   <li class="list-group-item_two ">我的信息</li>
			   <li class="list-group-item_two ">我的信息</li>
			   <li class="list-group-item_two ">我的信息</li>
			   <li class="list-group-item_two ">我的信息</li>
		  </div>
	  </div>
	</ul>
	<div align="center">
		<span class="label label-default">2016©Iwrite</span>
	</div>
</div>
<script>  
	$("#history1").hover(function(){
		$("#historydiv1").stop().show(500);
	},function(){  
        $("#historydiv1").hide(500);  
   });
   $("#history2").hover(function(){
		$("#historydiv2").stop().show(500);
	},function(){  
        $("#historydiv2").hide(500);  
   });
   $("#history3").hover(function(){
		$("#historydiv3").stop().show(500);
	},function(){  
        $("#historydiv3").hide(500);  
   });
   $("#history4").hover(function(){
		$("#historydiv4").stop().show(500);
	},function(){  
        $("#historydiv4").hide(500);  
   });
</script>
	</body>
</html>