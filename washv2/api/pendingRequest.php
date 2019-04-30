<?php  
require_once("db1.php");
$list = array();
if(isset($_GET['userReq'])){
	$ownershopname = $_GET['ownershopname'];
	$sql = $db->query("SELECT * FROM tbl_userstatusrequest WHERE fld_ustshopname ='$ownershopname' AND fld_status ='Pending' ORDER BY fld_ustid DESC");
}else if(isset($_GET['viewReq'])){
	$id = $_GET['id'];
	$sql = $db->query("SELECT * FROM tbl_usertransaction WHERE fld_utransacid ='$id'");
}

while($rows=mysqli_fetch_assoc($sql)){
	$list[] = $rows;
}

echo json_encode($list);
?>