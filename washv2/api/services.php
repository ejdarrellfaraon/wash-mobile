<?php  
require_once("db1.php");

$list = array();
$sql=$db->query("SELECT * FROM tbl_ownersinfo");
while($rows=mysqli_fetch_assoc($sql)){
	$list[] = $rows;
}

echo json_encode($list, JSON_PRETTY_PRINT);

?>