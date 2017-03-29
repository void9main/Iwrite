<?php
return array(
	//'配置项'=>'配置值'
	/* 数据库设置 */
    'DB_TYPE'               => 'mysql',     // 数据库类型
    'DB_HOST'               => 'localhost', // 服务器地址
    'DB_NAME'               => 'soil',          // 数据库名
    'DB_USER'               => 'root',      // 用户名
    'DB_PWD'                => 'root',          // 密码
    'DB_PORT'               => 3306,        // 端口
    'DB_PREFIX'             => 'sj_',    // 数据库表前缀
    'DB_SUFFIX'             => '',          // 数据库表后缀
    'DB_FIELDTYPE_CHECK'    => false,       // 是否进行字段类型检查
    'DB_FIELDS_CACHE'       => true,        // 启用字段缓存
    'DB_CHARSET'            => 'utf8',      // 数据库编码默认采用utf8
    'DB_DEPLOY_TYPE'        => 0, // 数据库部署方式:0 集中式(单一服务器),1 分布式(主从服务器)
    'DB_RW_SEPARATE'        => false,       // 数据库读写是否分离 主从式有效
    'DB_FIELDS_CACHE'		=>TRUE,		//关闭字段缓存，true为打开（默认）
    'DB_BACKUP'             =>"/Public/backup/", //数据库备份地址
    'DB_DEBUG'  			=>  TRUE, // 数据库调试模式 开启后可以记录SQL日志
     /* 模板相关配置 */
    'TMPL_PARSE_STRING' => array(
        '__IMAGE__'  => __ROOT__ . '/Public/image',
        '__IMG__' 	 => __ROOT__ . '/Public/img', 
        '__CSS__'    => __ROOT__ . '/Public/css',
        '__JS__'     => __ROOT__ . '/Public/js',
        '__EDIT__'   => __ROOT__ . '/Public/edit',
        '__UPLOAD__' => __ROOT__ . '/Public/upload',
        '__UPIMAGE__' => __ROOT__ . '/Public/upimage',
        '__WEDITOR__' => __ROOT__ . '/Public/weditor',
    ),
    'DEFAULT_CONTROLLER'    =>  'Index', // 默认控制器名称
    'DEFAULT_ACTION'        =>  'index', // 默认操作名称
    'DB_FIELD_CACHE'        =>  false,
    'URL_HTML_SUFFIX' => 'html',
    "ERROR_PAGE"     =>'/Home/Index/404.html',
    '__CLASS__'      => __ROOT__ . '/Home/Class', 			//内部类地址
);