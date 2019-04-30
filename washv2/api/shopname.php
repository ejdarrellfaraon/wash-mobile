<?php  
require_once("db1.php");
$id=$_GET['id'];
$list = array();
$sql=$db->query("SELECT * FROM tbl_ownersinfo WHERE fld_ownersid = '$id'");
$rows=mysqli_fetch_assoc($sql);

echo json_encode($rows, JSON_PRETTY_PRINT);

?>