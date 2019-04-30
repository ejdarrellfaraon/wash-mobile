<?php 	
include_once 'db.php';
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Header:*');
header('Content-type:application/json');
$db = new Connection;

$request = explode('/',rtrim($_REQUEST['res'],'/'));


switch ($_SERVER['REQUEST_METHOD']){
	case 'GET':	
	if(count($request)==1){
		$db->select('*')->from($request[0]);
	}else if(count($request)==3){
		$db->select('*')->from($request[0])->where($request[1],$request[2]);
	}
	$db->querys();

	case 'POST':
	if($request[0]=='insert'){
		$db->insert($request[1]);
	}
	case 'PUT':
	if($request[0]=='update'){
		$db->update($request[1],$request[2],$request[3]);
	}

	case 'DELETE':
	if($request[0]=='delete'){
		$db->delete($request[1],$request[2],$request[3]);
	}
}



 ?>