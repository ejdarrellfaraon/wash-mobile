<?php  
require_once("db1.php");
$userfname = $_POST['userfname'];
$userlname = $_POST['userlname'];
$userbarangay = $_POST['userbarangay'];
$usercaddress = $_POST['usercaddress'];
$userlmark = $_POST['userlmark'];
$useremail = $_POST['useremail'];
$usercnumber = $_POST['usercnumber'];
$userpassword = $_POST['userpassword'];

$sql = $db->query("INSERT INTO tbl_userreg(fld_firstname, fld_lastname, fld_barangay, fld_completeaddress, fld_landmark, fld_email, fld_contact, fld_password, fld_status) VALUES('$userfname','$userlname','$userbarangay', '$usercaddress', '$userlmark', '$useremail', '$usercnumber', '$userpassword', 'New User')");

echo json_encode(array('response'=>'success'));
?>