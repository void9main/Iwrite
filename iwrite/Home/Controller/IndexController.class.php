<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
	public function index(){
		$this->display();
	}
    public function Login(){
		$this->display();
	}  
	public function getaccount(){
		$name=session('name');
		$content=$name."申请Iwrite账号，时间：".date("Y-m-d H:i:s")."，邮箱：".I("post.email")."\n";
		$handle=fopen("Iwrite.txt", "a");
		fwrite($handle, $content);
		fclose($handle);
	}
	public function edit(){
		$this->display();
	}
}