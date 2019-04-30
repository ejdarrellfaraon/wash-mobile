<?php  
require_once("db1.php");

$id = $_POST['id'];
$timesched = $_POST['timesched'];

$sql = $db->query("UPDATE tbl_userstatusrequest SET fld_status='Accepted' WHERE fld_ustid ='$id'");
$sql1 = $db->query("UPDATE tbl_usertransaction SET fld_timesched='$timesched' WHERE fld_utransacid ='$id'");

echo json_encode(array('response' => 'success'));
?>