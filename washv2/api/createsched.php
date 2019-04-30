<?php  
require_once("db1.php");

$shopname = $_POST['shopname'];
$email = $_POST['email'];
$dateselected = $_POST['dateselected'];
$service = $_POST['service'];
$message = $_POST['message'];
$address = $_POST['address'];

$sql = $db->query("INSERT INTO tbl_usertransaction(fld_utransactionemail, fld_utransactiondate, fld_utransactiontservice, fld_utransactionmessage, fld_utransactshop, fld_utransactionaddress) VALUES('$email','$dateselected','$service','$message','$shopname','$address')");

$sql1 = $db->query("INSERT INTO tbl_userstatusrequest(fld_ustshopname, fld_ustdate, fld_status) VALUES('$shopname', '$dateselected', 'Pending')");

echo json_encode(array('response'=>'success'));

?>