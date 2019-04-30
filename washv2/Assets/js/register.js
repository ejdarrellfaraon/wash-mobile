var urla = "http://localhost/washv2/";
function register(){
	var userfname = $('#userfname').val();
	var userlname = $('#userlname').val();
	var userbarangay = $('#userbarangay').val();
	var usercaddress = $('#usercaddress').val();
	var userlmark = $('#userlmark').val();
	var useremail = $('#useremail').val();
	var usercnumber = $('#usercnumber').val();
	var userpassword = $('#userpassword').val();

	$.post(urla+"api/register.php",{userfname:userfname, 
		userlname:userlname, 
		userbarangay:userbarangay, 
		usercaddress:usercaddress, 
		userlmark:userlmark,
		useremail:useremail,
		usercnumber:usercnumber,
		userpassword:userpassword
	},function(){
		toastr.success("Registered!");
	})

}
