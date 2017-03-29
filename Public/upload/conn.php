<?php
error_reporting(E_ALL ^ E_NOTICE);          //屏蔽警告函数
$conn = @ mysql_connect("localhost", "root", "vHP9XZT5vrymv7f3");    //数据库账号密码
mysql_select_db("Soil", $conn);     //数据库名
mysql_query("set names 'utf8'"); //使用utf中文编码;
	
	function getbh($id){
		$sql="select `image` from `sj_zwbh` where `id`='$id'";
		$str=@mysql_query($sql);
	    $res=@mysql_fetch_row($str);
	    return $res;	
	}
	function addbh($image,$id){
		$sql="update `sj_zwbh` set `image`='$image' where `id`='$id'";
		$str=@mysql_query($sql);	
	}
	//病害添加
	function getch($id){
		$sql="select `image` from `sj_zwchonghai` where `id`='$id'";
		$str=@mysql_query($sql);
	    $res=@mysql_fetch_row($str);
	    return $res;	
	}
	function addch($image,$id){
		$sql="update `sj_zwchonghai` set `image`='$image' where `id`='$id'";
		$str=@mysql_query($sql);	
	}
	//虫害添加
	function getcaoh($id){
		$sql="select `image` from `sj_zwcaohai` where `id`='$id'";
		$str=@mysql_query($sql);
	    $res=@mysql_fetch_row($str);
	    return $res;	
	}
	function addcaoh($image,$id){
		$sql="update `sj_zwcaohai` set `image`='$image' where `id`='$id'";
		$str=@mysql_query($sql);	
	}
	//草害添加
?>