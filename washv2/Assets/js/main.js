// // var url="http://gcccsbsit.xyz/_petch2/api";

// // fetch("http://gcccsbsit.xyz/_petch2/api/tbl_pets").then((res)=>res.json()).then(function(data){
// // 	console.log(data);	
// // });
// var url="http://localhost/washv2/api";
// fetch("http://localhost/washv2/api/tbl_register").then((res)=>res.json()).then(function(data){
// 	console.log(data);	
// });
// var currentDate = new Date();

// var date = currentDate.getDate();
// var month = currentDate.getMonth(); //Be careful! January is 0 not 1
// var year = currentDate.getFullYear();

// var dateString = year + "-" +(month + 1) + "-" + date;
var url="http://localhost/washv2/api";


function x(val){
	return document.querySelector(val);
}

function profilepic(){
	fetch(url+"/tbl_users/fld_email/"+localStorage.email).then((res)=>res.json()).then(function(data){
		var ls = "";
		if (data.length <= 0) {
			ls+= '<img src="../img/user.png"></img>'
		}else{
			for (var i = 0; i < data.length; i++) {
				console.log(data);
				ls += '<img src="'+url+'/upload/'+data[i].fld_profilepic+'" style="height: 13rem"></img>';
			}
		}
		document.getElementById("profile").innerHTML= ls;
	});

}

function sidenavpic(){
	console.log('sidenavpic');
	fetch(url+"/tbl_users/fld_email/"+localStorage.email).then((res)=>res.json()).then(function(data){
		var ls = "";
		if (data.length <= 0) {
			ls+= '<img src="../img/user.png"  style="height: 11rem; border-radius: 100%;"></img>'
		}else{
			for (var i = 0; i < data.length; i++) {

				ls += '<img src="'+url+'/upload/'+data[i].fld_profilepic+'"  style="width: 150px; height: 150px; padding: 0; margin-top:10px; border-radius: 100%;""></img>';
			}
		}
		document.getElementById("sidepic").innerHTML= ls;
	});

}

// function userdata(){
// 	console.log('userdata');
// 	fetch(url+"/tbl_users/fld_email/"+localStorage.email).then((res)=>res.json()).then(function(data){
// 		var ls = "";
// 		if (data.length <= 0) {
// 			ls+= "<tr><td colspan='3'>Nothing Found</td></tr>"
// 		}else{
// 			for (var i = 0; i < data.length; i++) {

// 				console.log(localStorage.email)

// 				ls += "<tr>"
// 				ls += "<td> Name </td><td>" + data[i].fld_firstname + " " + data[i].fld_lastname + "</td></tr>";
// 				ls += "<tr><td> Sex </td><td>" + data[i].fld_sex + "</td></tr>";
// 				ls += "<tr><td> E-mail </td><td>" + data[i].fld_email + "</td></tr>";
// 				ls += "<tr><td> Contact Number </td><td>" + data[i].fld_contactnumber + "</td></tr>";
// 				ls += "<tr><td> Location </td><td>" + data[i].fld_location + "</td></tr>";
// 				ls += '<tr><td colspan=2"><center><button class="btn btn-lg blue-gradient btn-outline-white" style="color:white!important;" data-toggle="modal" data-target="#modalEditProfile" onclick="getdata(' + data[i].fld_userid + ') ">EDIT PROFILE</button></center></td></tr>'
// 			}
// 		}
// 		document.getElementById("usertbl").innerHTML= ls;
// 	});
// 	sidenavpic();
// }

function petdata(){
	fetch(url+"/tbl_pets/fld_userid/"+localStorage.userid).then((res)=>res.json()).then(function(data){
		var ls = "";
		if (data.length <= 0) {
			
		}else{
			for (var i = 0; i < data.length; i++) {

				console.log(localStorage.userid)
				console.log(data)

				if(data[i].fld_status == "Deceased"){

				}

				else{

					ls += '<div class="card rgba-white-strong"><div class="container-fluid"><center><a href="#"><img src="'+url+'/upload/'+data[i].fld_petpic+'" style="height: 13rem; padding-top: 1rem"></img></a> </center><br>';
					ls += '<table style="width:100%;"><tr><td> Pet Name </td><td> ' + data[i].fld_petname + '</td></tr>';
					ls += "<tr><td> Animal </td><td>" + data[i].fld_animal + "</td></tr>";
					ls += "<tr><td> Sex </td><td>" + data[i].fld_petsex + "</td></tr>";
					ls += "<tr><td> Pet Breed </td><td>" + data[i].fld_breed + "</td></tr>";
					ls += "<tr><td> Birthdate </td><td>" + data[i].fld_birthdate + "</td></tr>";
					ls += "<tr><td> Vaccination Date </td><td>" + data[i].fld_vaccinationdate + "</td>";				
					ls += '</tr></table><center><button class="btn btn-md blue-gradient btn-outline-white" style="color:white!important" onClick="deletepet(' + data[i].fld_petid + ')">REMOVE PET</button><button class="btn btn-md blue-gradient btn-outline-white" style="color:white!important" onClick="deceasedpet(' + data[i].fld_petid + ')">DECEASED</button></center><br></div></div>';
				}
			}
		}
		document.getElementById("petcard").innerHTML= ls;
	});

}

function receiveddata(){
	fetch(url+"/tbl_requests/fld_requestedid/"+localStorage.userid).then((res)=>res.json()).then(function(data){

		var ls = "";
		var lspet = "";
		if (data.length <= 0) {
			
		}else{
			for (var i = 0; i < data.length; i++) {

				if(data[i].fld_status == "Acquaintances"){

				}
				else{

					ls += '<div class="card rgba-white-strong"><div class="container-fluid"><center><a href="#"><img src="'+url+'/upload/'+data[i].fld_requesterprofilepic+'" style="height: 13rem; padding-top: 1rem"></img></a> </center><br>';
					ls += '<table style="width:100%; text-align: center">';
					ls += "<tr><td> Name </td><td>" + data[i].fld_requestername + "</td></tr>";
					ls += "<tr><td> Sex </td><td>" + data[i].fld_requestersex + "</td></tr>";				
					ls += '</table><center><button class="btn btn-md blue-gradient btn-outline-white" style="color:white!important" onClick="accept('+data[i].fld_transactionid+')">ACCEPT</button>';
					ls += '<button class="btn btn-md blue-gradient btn-outline-white" style="color:white!important" onClick="reject('+data[i].fld_transactionid+')">REJECT</button></center></div></div></div></div></div>';
				}
			}
		}
		document.getElementById("receivedtbl").innerHTML= ls;

		if(ls == ""){
			lspet += '<div class="card rgba-white-strong"><div class="container-fluid"><center><a href="#"><img src="'+url+'/upload/'+localStorage.profilepic+'" style="height: 13rem; padding-top: 1rem"></img></a> </center><br>';
			lspet += "<h3>No Received Requests</h3></div></div>";
		}

		else{

		}

		document.getElementById("notreceivedtbl").innerHTML = lspet;
	});
}

function sentdata(){
	fetch(url+"/tbl_requests/fld_requesterid/"+localStorage.userid).then((res)=>res.json()).then(function(data){

		var ls = "";
		var lspet = "";
		if (data.length <= 0) {

			
		}else{
			for (var i = 0; i < data.length; i++) {

				if(data[i].fld_status == "Acquaintances"){
					
				}
				else{

					ls += "<tr>"
					ls += "<td>" + data[i].fld_requestedid + "</td><td>" + data[i].fld_requestedname + "</td>";
					ls += '<td><center><button class="btn btn-md blue-gradient btn-outline-white" style="color:white!important;" onClick="reject('+data[i].fld_transactionid+')">CANCEL REQUEST</button></center></tr>'
				}
			}
		}
		document.getElementById("senttbl").innerHTML= ls;

		if(ls == ""){
			lspet = "<h3>No Sent Requests</h3>";
		}

		else{

		}

		document.getElementById("notsenttbl").innerHTML = lspet;
	});
}

function acquaintances(){
	fetch(url+"/tbl_register/").then((res)=>res.json()).then(function(data){

		var ls = "";
		var lsfriend = "";

		if (data.length <= 0) {
			
		}else{
			for (var i = 0; i < data.length; i++) {

				if((data[i].fld_requesterid == localStorage.userid && data[i].fld_status == "Acquaintances") || (data[i].fld_requestedid == localStorage.userid && data[i].fld_status == "Acquaintances")){

					if(data[i].fld_requestername == localStorage.fullname){
						ls += "<tr>"
						ls += "<td>" + data[i].fld_requestedid + "</td><td>" + data[i].fld_requestedname + "</td>";
						ls += '<td><center><button class="btn btn-md blue-gradient btn-outline-white" style="color:white!important;" onclick="getacquaintancesent(' + data[i].fld_requestedid + ')">VIEW OWNER INFO</button></center></tr>'
					} 

					else{	

						ls += "<tr>"
						ls += "<td>" + data[i].fld_requesterid + "</td><td>" + data[i].fld_requestername + "</td>";
						ls += '<td><center><button class="btn btn-md blue-gradient btn-outline-white" style="color:white!important;" onclick="getacquaintancereceive(' + data[i].fld_requesterid + ')">VIEW OWNER INFO</button></center></tr>'
					}

				}
				else{

				}
			}
		}
		document.getElementById("acquaintancetbl").innerHTML= ls;

		if(ls == ""){
			lsfriend += "<br><h4>You have no friends!</h4>";
		}
		else{

		}

		document.getElementById("notstiffyfriend").innerHTML= lsfriend;
	});
}
// User Insert Start

document.addEventListener('DOMContentLoaded',function(){

	try{
		x('#register').addEventListener('submit',function(e){
			let data = {
				fld_firstname:document.getElementById("userfname").value,
				fld_lastname:document.getElementById("userlname").value,
				fld_barangay:document.getElementById("userbarangay").value,
				fld_completeaddress:document.getElementById("usercaddress").value,
				fld_landmark:document.getElementById("userlmark").value,
				fld_email:document.getElementById("useremail").value,
				fld_contact:document.getElementById("usercnumber").value,
				fld_password:document.getElementById("userpassword").value,
			}
			document.getElementById("userfname").value = '';
			document.getElementById("userlname").value = '';
			document.getElementById("userbarangay").value = '';
			document.getElementById("usercaddress").value = '';
			document.getElementById("userlmark").value = '';
			document.getElementById("useremail").value = '';
			document.getElementById("usercnumber").value = '';
			document.getElementById("userpassword").value ='';
			e.preventDefault();

			fetch(url+"/insert/tbl_userreg",{
				method:"POST",
				body:JSON.stringify([data])
			}).then(function(data){
				
				console.log(data);
				if (data['status'] === 'error') {
					alert('Data Not Added. Error!');

				}else{
					alert('User Successfully Registered!');
					window.location = "../www/index.html";
				}
				userdata();
			});

		});
	}catch (err){

	}
});


// owner Insert Start

document.addEventListener('DOMContentLoaded',function(){

	try{
		x('#ownerregister').addEventListener('submit',function(e){
			let data = {
				fld_ownersfname:document.getElementById("ownerfname").value,
				fld_ownerslname:document.getElementById("ownerlname").value,
				fld_ownershopname:document.getElementById("ownershopname").value,
				fld_ownersbarangay:document.getElementById("ownerbarangay").value,
				fld_ownerscaddress:document.getElementById("ownercaddress").value,
				fld_ownersemail:document.getElementById("owneremail").value,
				fld_ownerscnumber:document.getElementById("ownercnumber").value,
				fld_ownerspassword:document.getElementById("ownerpassword").value,
			}
			document.getElementById("ownerfname").value = '';
			document.getElementById("ownerlname").value = '';
			document.getElementById("ownershopname").value = '';
			document.getElementById("ownerbarangay").value = '';
			document.getElementById("ownercaddress").value = '';
			document.getElementById("owneremail").value = '';
			document.getElementById("ownercnumber").value = '';
			document.getElementById("ownerpassword").value ='';
			e.preventDefault();

			fetch(url+"/insert/tbl_ownersinfo",{
				method:"POST",
				body:JSON.stringify([data])
			}).then(function(data){
				
				console.log(data);
				if (data['status'] === 'error') {
					alert('Data Not Added. Error!');

				}else{
					alert('User Successfully Registered!');
					window.location = "../www/index.html";
				}
				userdata();
			});

		});
	}catch (err){

	}
});


// Booking schedule start

document.addEventListener('DOMContentLoaded',function(){

	try{
		x('#userreserve').addEventListener('submit',function(e){
			let data = {
				fld_utransactionemail:document.getElementById("utransactemail").value,
				fld_utransactiondate:document.getElementById("utransactdatesched").value,
				fld_utransactiontservice:document.getElementById("utransactradiovalue").value,
				fld_utransactionmessage:document.getElementById("utransactmessage").value,
			}
			document.getElementById("utransactemail").value = '';
			document.getElementById("utransactdatesched").value = '';
			document.getElementById("utransactradiovalue").value = '';
			document.getElementById("utransactmessage").value = '';
			e.preventDefault();

			fetch(url+"/insert/tbl_usertransaction",{
				method:"POST",
				body:JSON.stringify([data])
			}).then(function(data){
				
				console.log(data);
				if (data['status'] === 'error') {
					alert('Data Not Added. Error!');

				}else{
					alert('Data Added.');
					// window.location = "../www/mainpage.html";
				}
				userdata();
			});

		});
	}catch (err){

	}
});
// booking schedule end

// Usergetdata
function userdata(){
	console.log('userdata');
	fetch(url+"/tbl_users/fld_email/"+localStorage.email).then((res)=>res.json()).then(function(data){
		var ls = "";
		if (data.length <= 0) {
			ls+= "<tr><td colspan='3'>Nothing Found</td></tr>"
		}else{
			for (var i = 0; i < data.length; i++) {

				console.log(localStorage.email)

				ls += "<tr>"
				ls += "<td> Name </td><td>" + data[i].fld_firstname + " " + data[i].fld_lastname + "</td></tr>";
				ls += "<tr><td> Sex </td><td>" + data[i].fld_sex + "</td></tr>";
				ls += "<tr><td> E-mail </td><td>" + data[i].fld_email + "</td></tr>";
				ls += "<tr><td> Contact Number </td><td>" + data[i].fld_contactnumber + "</td></tr>";
				ls += "<tr><td> Location </td><td>" + data[i].fld_location + "</td></tr>";
				ls += '<tr><td colspan=2"><center><button class="btn btn-lg blue-gradient btn-outline-white" style="color:white!important;" data-toggle="modal" data-target="#modalEditProfile" onclick="getdata(' + data[i].fld_userid + ') ">EDIT PROFILE</button></center></td></tr>'
			}
		}
		document.getElementById("usertbl").innerHTML= ls;
	});
	sidenavpic();
}
// Pet Insert Start

function addpet() {
	var str = document.getElementById('file2').value;
	var res = str.split("\\");
	console.log(res[2])
	let data = {
		fld_userid: localStorage.userid,
		fld_petname:document.getElementById("addpetname").value,
		fld_animal:document.getElementById("addanimal").value,
		fld_petsex:document.getElementById("addpetsex").value,
		fld_breed:document.getElementById("addbreed").value,
		fld_birthdate:document.getElementById("addbirthdate").value,
		fld_vaccinationdate:document.getElementById("addvaccinationdate").value,
		fld_location: localStorage.location,
		fld_status: "Alive",
		fld_userstatus: "Activated",
		fld_petpic: res[2]
	}


	fetch(url+"/insert/tbl_pets",{
		method:"POST",
		body:JSON.stringify([data])
	}).then(function(data){

		console.log(data);
		if (data['status'] === 'error') {
			alert('Data Not Added. Error!');

		}else{
			alert('Pet Successfully Registered.');
			console.log(data);
					// window.location = "../www/editprofile.html";
				}
				petdata();
				window.location = "../www/editprofile.html";
			});
}


// Pet Insert End

function sendrequest(){

	let data = {
		fld_requesterid: localStorage.userid,
		fld_requestername: localStorage.fullname,
		fld_requestersex: localStorage.sex,
		fld_requesteremail: localStorage.email,
		fld_requestercontactnumber: localStorage.contactnumber,
		fld_requesterfacebook: localStorage.facebook,
		fld_requestertwitter: localStorage.twitter,
		fld_requesterinstagram: localStorage.instagram,
		fld_requestedid: localStorage.requestedid,
		fld_requestedname: localStorage.requestedname,
		fld_requestedsex: localStorage.requestedsex,
		fld_requestedemail: localStorage.requestedemail,
		fld_requestedcontactnumber: localStorage.requestedcontactnumber,
		fld_requestedfacebook: localStorage.requestedfacebook,
		fld_requestedtwitter: localStorage.requestedtwitter,
		fld_requestedinstagram: localStorage.requestedinstagram,
		fld_status: "Stranger",
		fld_requesterprofilepic: localStorage.profilepic,
		fld_requestedprofilepic: localStorage.requestedprofilepic
	}

	console.log(data);

	fetch(url+"/insert/tbl_requests/",{
		method:"POST",
		body:JSON.stringify([data])
	}).then(function(data){

		console.log(data);
		if (data['status'] === 'error') {
			alert('Data Not Added. Error!');

		}else{
			alert('Friend Request Successfully Sent.');
			window.location = "userdashboard.html";
		}

	});
}

// Log-In
function login(){
	var uname = document.getElementById("username_login").value;
	var pword = document.getElementById("password_login").value;
	fetch(url+'/tbl_userreg/fld_email/'+uname).then(res=>res.json()).then(function(data){
		var ls = "";
		if(data.length <= 0){
			fetch(url+'/tbl_ownersinfo/fld_ownersemail/'+uname).then(res=>res.json()).then(function(datas){
				if(datas.length <= 0){
					window.alert("Invalid username or password. Please try again.");
				}else{
					if (datas[0].fld_ownersemail == uname && datas[0].fld_ownerspassword == pword) {
						window.location = "../www/ownerspage.html";
						localStorage.setItem('ownershopname', datas[0].fld_ownershopname);
					}
				}
			});
		}else{
			if(data[0].fld_status == 'Activate'){
				if (data[0].fld_email == uname && data[0].fld_password == pword) {
					localStorage.setItem('userid', data[0].fld_id);
					localStorage.setItem('userfname', data[0].fld_firstname + " " + data[0].fld_lastname);
					localStorage.setItem('userlname', data[0].fld_lastname);
					localStorage.setItem('userbarangay', data[0].fld_barangay);
					localStorage.setItem('usercaddress', data[0].fld_completeaddress);
					localStorage.setItem('userlmark',data[0].fld_landmark);
					localStorage.setItem('useremail', data[0].fld_email);
					localStorage.setItem('usercnumber', data[0].fld_contact);
					localStorage.setItem('userpassword', data[0].fld_password);
					window.location = "../www/mainpage.html";
				}
			}else if(data[0].fld_status == 'Deactivate'){
				toastr.warning("Please contact the administrator!");
			}else{
				toastr.warning("No account found!");
			}
			
		}
	});
}


// Log-In End

function getprofilepic(){

	fetch(url+'/tbl_users/fld_userid/'+localStorage.userid).then(res=>res.json()).then(function(data){

		var userpic = data[0].fld_profilepic;
		localStorage.setItem('profilepic', userpic);

	});

}

function getdata(id){
	
	fetch(url+'/tbl_users/fld_userid/'+id).then(res=>res.json()).then(function(data){

		getprofilepic();

		document.getElementById('firstname').value=	data[0].fld_firstname;
		document.getElementById('lastname').value=	data[0].fld_lastname;
		document.getElementById('pass').value=	data[0].fld_password;
		document.getElementById('email').value=	data[0].fld_email;
		document.getElementById('contactnumber').value=	data[0].fld_contactnumber;
		document.getElementById('location').value=	data[0].fld_location;
		document.getElementById('facebook').value=	data[0].fld_facebook;
		document.getElementById('twitter').value=	data[0].fld_twitter;
		document.getElementById('instagram').value=	data[0].fld_instagram;

		localStorage.setItem('edit_uID',data[0].fld_userid);

	});
	
}

function getpetdata(petid){
	
	fetch(url+'/tbl_pets/fld_petid/'+petid).then(res=>res.json()).then(function(data){
		document.getElementById('editpetname').value=	data[0].fld_petname;
		/*document.getElementById('editanimal').value=	data[0].fld_animal;
		document.getElementById('editpetsex').value=	data[0].fld_petsex;
		document.getElementById('editbreed').value=	data[0].fld_breed;
		document.getElementById('editbirthdate').value=	data[0].fld_birthdate;
		document.getElementById('editvaccinationdate').value=	data[0].fld_vaccinationdate;*/

		localStorage.setItem('edit_petID',data[0].fld_petid);

	});
}


function updateuser(){
	var str = document.getElementById('file').value;
	var res = str.split("\\");
	console.log(res[2])
	var data = {
		fld_firstname:document.getElementById("firstname").value,
		fld_lastname:document.getElementById("lastname").value,
		fld_email:document.getElementById("email").value,
		fld_password:document.getElementById("pass").value,
		fld_sex: localStorage.sex,
		fld_contactnumber:document.getElementById("contactnumber").value,
		fld_location: document.getElementById("location").value,
		fld_profilepic: res[2],
		fld_facebook: document.getElementById("facebook").value,
		fld_twitter: document.getElementById("twitter").value,
		fld_instagram: document.getElementById("instagram").value
	}

	localStorage.setItem('location', data.fld_location);
	updatepetloc(localStorage.edit_uID);

	fetch(url+"/update/tbl_users/fld_userid/"+localStorage.edit_uID,{
		method:"POST",
		body:JSON.stringify([data])
	}).then(function(datax){
		console.log(datax['status']);
		console.log(data);
		localStorage.setItem('fullname', data.fld_firstname + " " + data.fld_lastname);
		localStorage.setItem('sex', data.fld_sex);
		localStorage.setItem('email', data.fld_email);
		localStorage.setItem('contactnumber', data.fld_contactnumber);
		localStorage.setItem('location', data.fld_location);
		localStorage.setItem('facebook', data.fld_facebook);
		localStorage.setItem('twitter', data.fld_twitter);
		localStorage.setItem('instagram', data.fld_instagram);
		if (datax['status'] === 'error') {
			alert('An error has occured. Please try again.');

		}else{
			alert('Profile Successfully Updated.');
		}

	});

	var data2 = {
		fld_requestername: document.getElementById("firstname").value + " " + document.getElementById("lastname").value,
		fld_requesteremail: document.getElementById("email").value,
		fld_requestercontactnumber: document.getElementById("contactnumber").value,
		fld_requesterprofilepic: res[2],
		fld_requesterfacebook: document.getElementById("facebook").value,
		fld_requestertwitter: document.getElementById("twitter").value,
		fld_requesterinstagram: document.getElementById("instagram").value
	}

	var data3 = {
		fld_requestedname: document.getElementById("firstname").value + " " + document.getElementById("lastname").value,
		fld_requestedemail: document.getElementById("email").value,
		fld_requestedcontactnumber: document.getElementById("contactnumber").value,
		fld_requestedprofilepic: res[2],
		fld_requestedfacebook: document.getElementById("facebook").value,
		fld_requestedtwitter: document.getElementById("twitter").value,
		fld_requestedinstagram: document.getElementById("instagram").value
	}

	fetch(url+"/update/tbl_requests/fld_requesterid/"+localStorage.edit_uID,{
		method:"POST",
		body:JSON.stringify([data2])
	});

	fetch(url+"/update/tbl_requests/fld_requestedid/"+localStorage.edit_uID,{
		method:"POST",
		body:JSON.stringify([data3])
	});

	setTimeout(function(){
		profilepic();
		userdata();
	},1000);

	getprofilepic();

}

function updatepetloc(userid){

	var data = {
		fld_location: localStorage.location,
	}
	fetch(url+"/update/tbl_pets/fld_userid/"+userid,{
		method:"POST",
		body:JSON.stringify([data])
	}).then(function(data){

		console.log(data);
		if (data['status'] === 'error') {
			alert('An error has occured. Please try again.');

		}else{
					// alert('Pet Profile Successfully Updated.');
				}
			});
}

function updatepet(){

	var data = {
		fld_petname:document.getElementById("editpetname").value,
	}
	fetch(url+"/update/tbl_pets/fld_petid/"+localStorage.edit_petID,{
		method:"POST",
		body:JSON.stringify([data])
	}).then(function(data){

		console.log(data);
		if (data['status'] === 'error') {
			alert('An error has occured. Please try again.');

		}else{
			alert('Pet Profile Successfully Updated.');
		}
		petdata();
	});
}

function deletedata(id){
	fetch(url+'/delete/tbl_user/fld_id/'+id).then(function(data){
		userdata();
	})
}

function deletepet(id){
	fetch(url+'/delete/tbl_pets/fld_petid/'+id).then(function(data){
		window.alert("Pet Successfully Removed");
		window.location = "../www/editprofile.html";
	})
}

function hello(){
	fetch(url+"/tbl_users/fld_email/"+localStorage.email).then((res)=>res.json()).then(function(data){
		
		var hello = localStorage.fullname;
		document.getElementById("hello").innerHTML= hello;
	});
}

function search(location, animal, petsex){
	fetch(url+'/tbl_pets').then(res=>res.json()).then(function(data){
		var lspet = "";
		var ls = "";
		for(var i = 0; i < data.length; i++){
			if(data[i].fld_petsex == petsex && data[i].fld_animal == animal && data[i].fld_location == location){
				if(localStorage.userid == data[i].fld_userid  || data[i].fld_status == "Deceased" || data[i].fld_userstatus == "Deactivated"){


				} else{

					console.log(data[i].fld_petid);

					lspet += '<div class="card rgba-white-strong"><div class="container-fluid"><center><a href="#"><img src="img/dog.png" style="height: 11rem; padding-top: 1em"></a> </center><br>';
					lspet += '<table style="width:100%;"><tr><td> Pet Name </td><td> ' + data[i].fld_petname + '</td></tr>';
					lspet += "<tr><td> Animal </td><td>" + data[i].fld_animal + "</td></tr>";
					lspet += "<tr><td> Sex </td><td>" + data[i].fld_petsex + "</td></tr>";
					lspet += "<tr><td> Pet Breed </td><td>" + data[i].fld_breed + "</td></tr>";
						/*lspet += "<tr><td> Birthdate </td><td>" + data[i].fld_birthdate + "</td></tr>";
						lspet += "<tr><td> Vaccination Date </td><td>" + data[i].fld_vaccinationdate + "</td>";*/				
						lspet += '</tr></table><center><button class="btn btn-lg blue-gradient btn-outline-white" style="color:white!important" onClick="getownerdata('+localStorage.petowner+')">VIEW OWNER INFO</button></center><br></div></div>'
						
					}

				}
				else if(petsex == data[i].fld_petsex && animal == "" && location == data[i].fld_location){
					if(localStorage.userid == data[i].fld_userid || data[i].fld_status == "Deceased" || data[i].fld_userstatus == "Deactivated"){
						

					} else{

						localStorage.setItem('petowner',data[i].fld_userid);

						console.log(data[i].fld_userid);

						lspet += '<div class="card rgba-white-strong"><div class="container-fluid"><center><a href="#"><img src="img/dog.png" style="height: 11rem; padding-top: 1em"></a> </center><br>';
						lspet += '<table style="width:100%;"><tr><td> Pet Name </td><td> ' + data[i].fld_petname + '</td></tr>';
						lspet += "<tr><td> Animal </td><td>" + data[i].fld_animal + "</td></tr>";
						lspet += "<tr><td> Sex </td><td>" + data[i].fld_petsex + "</td></tr>";
						lspet += "<tr><td> Pet Breed </td><td>" + data[i].fld_breed + "</td></tr>";
						/*lspet += "<tr><td> Birthdate </td><td>" + data[i].fld_birthdate + "</td></tr>";
						lspet += "<tr><td> Vaccination Date </td><td>" + data[i].fld_vaccinationdate + "</td>";*/			
						lspet += '</tr></table><center><button class="btn btn-lg blue-gradient btn-outline-white" style="color:white!important" onClick="getownerdata('+localStorage.petowner+')">VIEW OWNER INFO</button></center><br></div></div>'
						
					}
				}
				else if(petsex == data[i].fld_petsex && animal == data[i].fld_animal && location == ""){
					if(localStorage.userid == data[i].fld_userid || data[i].fld_status == "Deceased" || data[i].fld_userstatus == "Deactivated"){
						

					} else{

						localStorage.setItem('petowner',data[i].fld_userid);

						console.log(data[i].fld_userid);

						lspet += '<div class="card rgba-white-strong"><div class="container-fluid"><center><a href="#"><img src="img/dog.png" style="height: 11rem; padding-top: 1em"></a> </center><br>';
						lspet += '<table style="width:100%;"><tr><td> Pet Name </td><td> ' + data[i].fld_petname + '</td></tr>';
						lspet += "<tr><td> Animal </td><td>" + data[i].fld_animal + "</td></tr>";
						lspet += "<tr><td> Sex </td><td>" + data[i].fld_petsex + "</td></tr>";
						lspet += "<tr><td> Pet Breed </td><td>" + data[i].fld_breed + "</td></tr>";
						/*lspet += "<tr><td> Birthdate </td><td>" + data[i].fld_birthdate + "</td></tr>";
						lspet += "<tr><td> Vaccination Date </td><td>" + data[i].fld_vaccinationdate + "</td>";*/			
						lspet += '</tr></table><center><button class="btn btn-lg blue-gradient btn-outline-white" style="color:white!important" onClick="getownerdata('+localStorage.petowner+')">VIEW OWNER INFO</button></center><br></div></div>'
						
					}
				}
				else if(petsex == "" && animal == data[i].fld_animal && location == data[i].fld_location){
					if(localStorage.userid == data[i].fld_userid || data[i].fld_status == "Deceased" || data[i].fld_userstatus == "Deactivated"){
						

					} else{

						localStorage.setItem('petowner',data[i].fld_userid);

						console.log(data[i].fld_userid);

						lspet += '<div class="card rgba-white-strong"><div class="container-fluid"><center><a href="#"><img src="img/dog.png" style="height: 11rem; padding-top: 1em"></a> </center><br>';
						lspet += '<table style="width:100%;"><tr><td> Pet Name </td><td> ' + data[i].fld_petname + '</td></tr>';
						lspet += "<tr><td> Animal </td><td>" + data[i].fld_animal + "</td></tr>";
						lspet += "<tr><td> Sex </td><td>" + data[i].fld_petsex + "</td></tr>";
						lspet += "<tr><td> Pet Breed </td><td>" + data[i].fld_breed + "</td></tr>";
						/*lspet += "<tr><td> Birthdate </td><td>" + data[i].fld_birthdate + "</td></tr>";
						lspet += "<tr><td> Vaccination Date </td><td>" + data[i].fld_vaccinationdate + "</td>";*/		
						lspet += '</tr></table><center><button class="btn btn-lg blue-gradient btn-outline-white" style="color:white!important" onClick="getownerdata('+localStorage.petowner+')">VIEW OWNER INFO</button></center><br></div></div>'
						
					}
				}
				else if(petsex == data[i].fld_petsex && animal == "" && location == ""){
					if(localStorage.userid == data[i].fld_userid || data[i].fld_status == "Deceased" || data[i].fld_userstatus == "Deactivated"){
						

					} else{

						localStorage.setItem('petowner',data[i].fld_userid);

						console.log(data[i].fld_userid);

						lspet += '<div class="card rgba-white-strong"><div class="container-fluid"><center><a href="#"><img src="img/dog.png" style="height: 11rem; padding-top: 1em"></a> </center><br>';
						lspet += '<table style="width:100%;"><tr><td> Pet Name </td><td> ' + data[i].fld_petname + '</td></tr>';
						lspet += "<tr><td> Animal </td><td>" + data[i].fld_animal + "</td></tr>";
						lspet += "<tr><td> Sex </td><td>" + data[i].fld_petsex + "</td></tr>";
						lspet += "<tr><td> Pet Breed </td><td>" + data[i].fld_breed + "</td></tr>";
						/*lspet += "<tr><td> Birthdate </td><td>" + data[i].fld_birthdate + "</td></tr>";
						lspet += "<tr><td> Vaccination Date </td><td>" + data[i].fld_vaccinationdate + "</td>";*/			
						lspet += '</tr></table><center><button class="btn btn-lg blue-gradient btn-outline-white" style="color:white!important" onClick="getownerdata('+localStorage.petowner+')">VIEW OWNER INFO</button></center><br></div></div>'
						
					}
				}

				else if(petsex == "" && animal == data[i].fld_animal && location == ""){
					if(localStorage.userid == data[i].fld_userid || data[i].fld_status == "Deceased" || data[i].fld_userstatus == "Deactivated"){
						

					} else{

						localStorage.setItem('petowner',data[i].fld_userid);

						console.log(data[i].fld_userid);

						lspet += '<div class="card rgba-white-strong"><div class="container-fluid"><center><a href="#"><img src="img/dog.png" style="height: 11rem; padding-top: 1em"></a> </center><br>';
						lspet += '<table style="width:100%;"><tr><td> Pet Name </td><td> ' + data[i].fld_petname + '</td></tr>';
						lspet += "<tr><td> Animal </td><td>" + data[i].fld_animal + "</td></tr>";
						lspet += "<tr><td> Sex </td><td>" + data[i].fld_petsex + "</td></tr>";
						lspet += "<tr><td> Pet Breed </td><td>" + data[i].fld_breed + "</td></tr>";
						/*lspet += "<tr><td> Birthdate </td><td>" + data[i].fld_birthdate + "</td></tr>";
						lspet += "<tr><td> Vaccination Date </td><td>" + data[i].fld_vaccinationdate + "</td>";*/			
						lspet += '</tr></table><center><button class="btn btn-lg blue-gradient btn-outline-white" style="color:white!important" data-toggle="modal" onClick="getownerdata('+localStorage.petowner+')">VIEW OWNER INFO</button></center><br></div></div>'
						
					}
				}

				else if(petsex == "" && animal == "" && location == data[i].fld_location){
					if(localStorage.userid == data[i].fld_userid || data[i].fld_status == "Deceased" || data[i].fld_userstatus == "Deactivated"){
						

					} else{

						localStorage.setItem('petowner',data[i].fld_userid);

						console.log(data[i].fld_userid);

						lspet += '<div class="card rgba-white-strong"><div class="container-fluid"><center><a href="#"><img src="img/dog.png" style="height: 11rem; padding-top: 1em"></a> </center><br>';
						lspet += '<table style="width:100%;"><tr><td> Pet Name </td><td> ' + data[i].fld_petname + '</td></tr>';
						lspet += "<tr><td> Animal </td><td>" + data[i].fld_animal + "</td></tr>";
						lspet += "<tr><td> Sex </td><td>" + data[i].fld_petsex + "</td></tr>";
						lspet += "<tr><td> Pet Breed </td><td>" + data[i].fld_breed + "</td></tr>";
						/*lspet += "<tr><td> Birthdate </td><td>" + data[i].fld_birthdate + "</td></tr>";
						lspet += "<tr><td> Vaccination Date </td><td>" + data[i].fld_vaccinationdate + "</td>";*/			
						lspet += '</tr></table><center><button class="btn btn-lg blue-gradient btn-outline-white" style="color:white!important" onClick="getownerdata('+localStorage.petowner+')">VIEW OWNER INFO</button></center><br></div></div>'
						
					}
				}

				else{

					
				}

			}		
			document.getElementById("stiffy").innerHTML= lspet;

			if(lspet == ""){
				ls = "<h3>No Results Found</h3>";
			}

			else{

			}

			document.getElementById("notstiffy").innerHTML = ls;
		});
}


function getownerdata(ownerid){
	console.log('getownerdata');
	fetch(url+'/tbl_users/fld_userid/'+ownerid).then(res=>res.json()).then(function(data){
		console.log(data);
		var ls = "";
		localStorage.setItem('requestedid', ownerid);
		localStorage.setItem('requestedname', data[0].fld_firstname + " " + data[0].fld_lastname);
		localStorage.setItem('requestedsex', data[0].fld_sex);
		localStorage.setItem('requestedemail', data[0].fld_email);
		localStorage.setItem('requestedcontactnumber', data[0].fld_contactnumber);
		localStorage.setItem('requestedfacebook', data[0].fld_requestedfacebook);
		localStorage.setItem('requestedtwitter', data[0].fld_requestedtwitter);
		localStorage.setItem('requestedinstagram', data[0].fld_requestedinstagram);
		localStorage.setItem('requestedprofilepic', data[0].fld_profilepic);

		getownerdata2(localStorage.requestedid);

	});
}

function getownerdata2(ownerid){
	fetch(url+'/tbl_requests/').then(res=>res.json()).then(function(data){

		for(var i = 0; i < data.length; i++){
			if((ownerid == data[i].fld_requestedid && localStorage.userid == data[i].fld_requesterid) || (ownerid == data[i].fld_requesterid && localStorage.userid == data[i].fld_requestedid)){

				localStorage.setItem('requesteridboy', data[i].fld_requesterid);
				localStorage.setItem('requestedidboy', data[i].fld_requestedid);
				localStorage.setItem('statusboy', data[i].fld_status);
			}
		}

		gotoinfo();

	});
}

function gotoinfo(){
	window.location = "ownerinfo.html";
}

function showownerdata(ownerid){

	var ls = "";

	fetch(url+'/tbl_users/fld_userid/'+ownerid).then(res=>res.json()).then(function(data){
		console.log(data[0].fld_profilepic);
		if((localStorage.requestedidboy == localStorage.userid || localStorage.requesteridboy == localStorage.userid) && (localStorage.requestedidboy == ownerid || localStorage.requesteridboy == ownerid) && localStorage.statusboy == "Acquaintances"){

			ls += '<center><a href="#"><img src="'+url+'/upload/'+data[0].fld_profilepic+'" style="height: 11rem;" alt="'+data[0].fld_profilepic+'"></a> </center> <br>'
			ls += '<table style="width:100%;">';
			ls += "<tr><td> Owner Name </td><td>" + localStorage.requestedname + "</td></tr>";
			ls += "<tr><td> Sex </td><td>" + localStorage.requestedsex + "</td></tr>";
			ls += "<tr><td> Email </td><td>" + localStorage.requestedemail+ "</td></tr>";		
			ls += "<tr><td> Contact Number </td><td>" + localStorage.requestedcontactnumber + "</td></tr>";				
			ls += '</table><center><button class="btn btn-lg red-gradient btn-outline-white" style="color:white!important" onClick="">ALREADY FRIENDS</button></center>'
		}

		else if((localStorage.requestedidboy == localStorage.userid || localStorage.requesteridboy == localStorage.userid) && (localStorage.requestedidboy == ownerid || localStorage.requesteridboy == ownerid) && localStorage.statusboy == "Stranger"){

			ls += '<center><a href="#"><img src="img/user.png" style="height: 11rem;"></a> </center> <br>'
			ls += '<table style="width:100%;">';
			ls += "<tr><td> Owner Name </td><td>" + localStorage.requestedname + "</td></tr>";
			ls += "<tr><td> Sex </td><td>" + localStorage.requestedsex + "</td></tr>";		
			ls += '</table><center><button class="btn btn-lg red-gradient btn-outline-white" style="color:white!important" onClick="">REQUEST ALREADY SENT</button></center>'

		}
		else{

			ls += '<center><a href="#"><img src="img/user.png" style="height: 11rem;"></a> </center> <br>'
			ls += '<table style="width:100%;">';
			ls += "<tr><td> Owner Name </td><td>" + localStorage.requestedname + "</td></tr>";
			ls += "<tr><td> Sex </td><td>" + localStorage.requestedsex + "</td></tr>";		
			ls += '</table><center><button class="btn btn-lg blue-gradient btn-outline-white" style="color:white!important" onClick="sendrequest()">SEND REQUEST</button></center>'
		}

		document.getElementById("stiffyuh").innerHTML= ls;

	});

}

function getuserfeedback(){

	var ls = "";
	var lsfeed = "";

	fetch(url+'/tbl_feedback/fld_revieweeid/'+localStorage.requestedid).then(res=>res.json()).then(function(data){

		for(var i = 0; i < data.length; i++){
			ls += '<p>"' + data[i].fld_feedback + '"  - ' + data[i].fld_reviewername + '</p>';
		}

		document.getElementById("userfeedback").innerHTML= ls;

		if(ls == ""){
			lsfeed += "<p>This user has no feedback yet</p>";
		}
		else{
		}

		document.getElementById("userfeedbackstiffy").innerHTML= lsfeed;
	});

}

function getreceiveddata(receivedid){

	fetch(url+'/tbl_requests/fld_requesterid/'+receivedid).then(res=>res.json()).then(function(data){
		
		var ls = "";

		ls += '<div class="modal fade" id="receivedinfo'+receivedid+'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content">';
		ls += '<div class="card rgba-white-strong"><div class="container-fluid"><center><a href="#"><img src="img/user.png" style="height: 11rem; padding-top: 1em"></a> </center><br>';
		ls += '<table style="width:100%;">';
		ls += "<tr><td> Name </td><td>" + data[0].fld_requestername + "</td></tr>";
		ls += "<tr><td> Sex </td><td>" + data[0].fld_requestersex + "</td></tr>";			
		ls += '</table><center><button class="btn btn-lg blue-gradient btn-outline-white" style="color:white!important" onClick="accept('+receivedid+')">ACCEPT</button>';
		ls += '<button class="btn btn-lg blue-gradient btn-outline-white" style="color:white!important" onClick="reject('+data[0].fld_transactionid+')">REJECT</button></center></div></div></div></div></div>';

		document.getElementById("receivedmodal").innerHTML= ls;
	});
}

function getacquaintancesent(acquaintanceid){

	fetch(url+'/tbl_requests/fld_requestedid/'+acquaintanceid).then(res=>res.json()).then(function(data){

		for(var i=0;i<data.length;i++){
			if(data[i].fld_requesterid == localStorage.userid){
				localStorage.setItem('relationshipid', data[i].fld_transactionid)
			}
		}
		
		var ls = "";

		localStorage.setItem('friendid', acquaintanceid);
		localStorage.setItem('friendname', data[0].fld_requestedname);

		ls += '<div class="card rgba-white-strong"><div class="container-fluid"><center><a href="#"><img src="'+url+'/upload/'+data[0].fld_requestedprofilepic+'" style="height: 13rem; padding-top: 1em"></img></a> </center><br>';
		ls += '<table style="width:100%;">';
		ls += "<tr><td> ID </td><td>" + data[0].fld_requestedid + "</td></tr>";
		ls += "<tr><td> Name </td><td>" + data[0].fld_requestedname + "</td></tr>";
		ls += "<tr><td> Sex </td><td>" + data[0].fld_requestedsex + "</td></tr>";
		ls += "<tr><td> Email </td><td>" + data[0].fld_requestedemail + "</td></tr>";
		ls += "<tr><td> Contact Number </td><td>" + data[0].fld_requestedcontactnumber + "</td></tr>";
		ls += '<tr><td colspan="2" style="font-size: 2em!important"><center><i class="fab fa-facebook-square text-primary" onClick="facebook()"></i>&nbsp&nbsp<i class="fab fa-twitter text-primary" onClick = "twitter()"></i>&nbsp&nbsp<i class="fab fa-instagram text-primary" onClick = "instagram()"></i>&nbsp&nbsp<i class="fab fa-facebook-messenger text-primary" onClick = "messenger()"></i></center></td></tr>';		
		ls += '</table><center>';
		ls += ' <p class="btn btn-md blue-gradient btn-outline-white" onClick="givefeedback()">GIVE USER FEEDBACK</p>';
		ls += '<p class="btn btn-md blue-gradient btn-outline-white" onClick="reportuserform()">REPORT USER</p>';
		ls += '<p class="btn btn-md blue-gradient btn-outline-white" onClick="removefriend()">REMOVE FRIEND</p></center></div></div>';

		document.getElementById("acquaintance").innerHTML= ls;
		getfriendpet(localStorage.friendid);
	});
}

function getacquaintancereceive(acquaintanceid){

	fetch(url+'/tbl_requests/fld_requesterid/'+acquaintanceid).then(res=>res.json()).then(function(data){

		for(var i=0;i<data.length;i++){
			if(data[i].fld_requestedid == localStorage.userid){
				localStorage.setItem('relationshipid', data[i].fld_transactionid)
			}
		}
		
		var ls = "";

		localStorage.setItem('friendid', acquaintanceid);
		localStorage.setItem('friendname', data[0].fld_requestername);

		ls += '<div class="card rgba-white-strong"><div class="container-fluid"><center><a href="#"><img src="'+url+'/upload/'+data[0].fld_requesterprofilepic+'" style="height: 13rem; padding-top: 1em"></img></a> </center><br>';
		ls += '<table style="width:100%;">';
		ls += "<tr><td> ID </td><td>" + data[0].fld_requesterid + "</td></tr>";
		ls += "<tr><td> Name </td><td>" + data[0].fld_requestername + "</td></tr>";
		ls += "<tr><td> Sex </td><td>" + data[0].fld_requestersex + "</td></tr>";
		ls += "<tr><td> Email </td><td>" + data[0].fld_requesteremail + "</td></tr>";
		ls += "<tr><td> Contact Number </td><td>" + data[0].fld_requestercontactnumber + "</td></tr>";
		ls += '<tr><td colspan="2" style="font-size: 2em!important"><center><i class="fab fa-facebook-square text-primary" onClick="facebook()"></i>&nbsp&nbsp<i class="fab fa-twitter text-primary" onClick = "twitter()"></i>&nbsp&nbsp<i class="fab fa-instagram text-primary" onClick = "instagram()"></i>&nbsp&nbsp<i class="fab fa-facebook-messenger text-primary" onClick = "messenger()"></i></center></td></tr>';		
		ls += '</table><center>';
		ls += ' <p class="btn btn-md blue-gradient btn-outline-white" onClick="givefeedback()">GIVE USER FEEDBACK</p>';
		ls += '<p class="btn btn-md blue-gradient btn-outline-white" onClick="reportuserform()">REPORT USER</p>';
		ls += '<p class="btn btn-md blue-gradient btn-outline-white" onClick="removefriend()">REMOVE FRIEND</p></center></div></div>';

		document.getElementById("acquaintance").innerHTML= ls;
		getfriendpet(localStorage.friendid);
	});
}

function getfriendpet(friendpetid){
	fetch(url+'/tbl_pets/fld_userid/'+friendpetid).then(res=>res.json()).then(function(data){
		
		var ls = "";

		for (var i = 0; i < data.length; i++) {
			if(data[i].fld_status == "Deceased"){

			} else{
				
				ls += '<div class="card rgba-white-strong"><div class="container-fluid"><center><a href="#"><img src="'+url+'/upload/'+data[i].fld_petpic +'" style="height: 13rem; padding-top: 1rem"></img></a> </center><br>';
				ls += '<table style="width:100%;"><tr><td> Pet Name </td><td> ' + data[i].fld_petname + '</td></tr>';
				ls += "<tr><td> Animal </td><td>" + data[i].fld_animal + "</td></tr>";
				ls += "<tr><td> Sex </td><td>" + data[i].fld_petsex + "</td></tr>";
				ls += "<tr><td> Pet Breed </td><td>" + data[i].fld_breed + "</td></tr>";
				ls += "<tr><td> Birthdate </td><td>" + data[i].fld_birthdate + "</td></tr>";
				ls += "<tr><td> Vaccination Date </td><td>" + data[i].fld_vaccinationdate + "</td>";				
				ls += '</tr></table><br></div></div>';
			}
		}

		document.getElementById("friendpet").innerHTML = ls;
	});
}

function accept(receivedid){

	var data = {
		fld_status: "Acquaintances"
	}
	fetch(url+"/update/tbl_requests/fld_transactionid/"+receivedid,{
		method:"POST",
		body:JSON.stringify([data])
	}).then(function(data){

		console.log(data);
		if (data['status'] === 'error') {
			alert('An error has occured. Please try again.');

		}else{
			alert('Request has been accepted');
			window.location = "../www/receivedrequest.html"
		}
		petdata();
	});
}

function deceasedpet(deceasedid){

	var data = {
		fld_status: "Deceased"
	}
	fetch(url+"/update/tbl_pets/fld_petid/"+deceasedid,{
		method:"POST",
		body:JSON.stringify([data])
	}).then(function(data){

		console.log(data);
		if (data['status'] === 'error') {
			alert('An error has occured. Please try again.');

		}else{
			window.alert("Your pet has been successfully registered as deceased.");
			window.location = "../www/editprofile.html"
		}
		petdata();
	});
}

function reject(receivedid){
	fetch(url+'/delete/tbl_requests/fld_transactionid/'+receivedid).then(function(data){
		window.alert("Action done.");
		localStorage.setItem('requestedidboy', "");
		localStorage.setItem('requesteridboy', "");
		window.location = "../www/sentrequest.html"
	});
}

function logout(){
	localStorage.clear();
	window.location = "index.html";
}


$(document).ready(function (e) {
	$("#uploadimage").on('submit',(function(e) {
		e.preventDefault();
		updateuser();
		$.ajax({
	url: url + "/ajax_php_file.php", // Url to which the request is send
	type: "POST",             // Type of request to be send, called as method
	data: new FormData(this), // Data sent to server, a set of key/value pairs (i.e. form fields and values)
	contentType: false,       // The content type used when sending data to the server.
	cache: false,             // To unable request pages to be cached
	processData:false,        // To send DOMDocument or non processed data file it is set to false
	success: function(data)   // A function to be called if request succeeds
	{

	}
});
	}));
});

$(document).ready(function (e) {
	$("#addpet").on('submit',(function(e) {
		e.preventDefault();
		addpet();
		$.ajax({
	url: url + "/ajax_php_file.php", // Url to which the request is send
	type: "POST",             // Type of request to be send, called as method
	data: new FormData(this), // Data sent to server, a set of key/value pairs (i.e. form fields and values)
	contentType: false,       // The content type used when sending data to the server.
	cache: false,             // To unable request pages to be cached
	processData:false,        // To send DOMDocument or non processed data file it is set to false
	success: function(data)   // A function to be called if request succeeds
	{

	}
});
	}));
});

	// Social Media Start

	function facebook(){

		fetch(url+"/tbl_users/fld_userid/"+localStorage.friendid).then((res)=>res.json()).then(function(data){

			if (data[0].fld_facebook == "") {
				window.alert("Facebook account is unavailable.");
			}else{
				window.location = "https://www.facebook.com/" + data[0].fld_facebook;

			}

		});

	}

	function twitter(){

		fetch(url+"/tbl_users/fld_userid/"+localStorage.friendid).then((res)=>res.json()).then(function(data){

			if (data[0].fld_twitter == "") {
				window.alert("Twitter account is unavailable.");
			}else{
				window.location = "https://www.twitter.com/" + data[0].fld_twitter;

			}

		});

	}

	function instagram(){

		fetch(url+"/tbl_users/fld_userid/"+localStorage.friendid).then((res)=>res.json()).then(function(data){

			if (data[0].fld_instagram == "") {
				window.alert("Instagram account is unavailable.");
			}else{
				window.location = "https://www.instagram.com/" + data[0].fld_instagram;

			}

		});

	}

	function messenger(){

		fetch(url+"/tbl_users/fld_userid/"+localStorage.friendid).then((res)=>res.json()).then(function(data){

			if (data[0].fld_facebook == "") {
				window.alert("Messenger account is unavailable.");
			}else{
				window.location = "https://www.messenger.com/t/" + data[0].fld_facebook;

			}

		});

	}

	// Social Media End

	// Feedback Start

	function givefeedback(){

		fetch(url+"/tbl_feedback/fld_revieweeid/"+localStorage.friendid).then((res)=>res.json()).then(function(data){

			let data2 = {		
				fld_reviewerid: localStorage.userid,
				fld_reviewername: localStorage.fullname,
				fld_revieweeid: localStorage.friendid,
				fld_feedback: ""
			}

			var feedbackcount = 0;

			for(var i =0; i < data.length; i++){
				if (data[i].fld_reviewerid == localStorage.userid){
					feedbackcount = feedbackcount + 1;
					localStorage.setItem('feedbackid', data[i].fld_feedbackid);
				}
			}

			if (feedbackcount >= 1){
				window.location = "../www/feedback form.html";
			}
			else{

				console.log(data2);
				console.log(feedbackcount);

				fetch(url+"/insert/tbl_feedback",{
					method:"POST",
					body:JSON.stringify([data2])
				});

				window.alert("Your feedback form has been prepared. Please click the button again to proceed.");

			}

		});	

	}

	function feedbackuser(){

		var ls = "";

		fetch(url+"/tbl_users/fld_userid/"+localStorage.friendid).then((res)=>res.json()).then(function(data){

			ls += '<center><img src="' + url + '/upload/' + data[0].fld_profilepic + '" style="height: 11em;"></a><br> ' + data[0].fld_firstname + " " + data[0].fld_lastname + '</center>'

			document.getElementById("feedbackuser").innerHTML= ls;
			feedbackinfo(localStorage.feedbackid);

		});

	}

	function feedbackinfo(feedbackid){

		fetch(url+'/tbl_feedback/fld_feedbackid/' + localStorage.feedbackid).then(res=>res.json()).then(function(data){

			console.log(data);
			document.getElementById('feedback').value =	data[0].fld_feedback;

		});

	}

	function submitfeedback(){

		var data = {
			fld_rating: document.getElementbyId("rating").value,
			fld_feedback: document.getElementById("feedback").value,

		}	

		fetch(url+"/update/tbl_feedback/fld_feedbackid/"+localStorage.feedbackid,{
			method:"POST",
			body:JSON.stringify([data])
		}).then(function(data){

			console.log(data);
			if (data['status'] === 'error') {
				alert('Data Not Added. Error!');

			}else{
				alert('Thank you for giving your feedback!');
				window.location = "../www/friend.html";
			}

		});

	}

	// Feedback End

	// Report User Start 

	function reportuserform(){
		window.location = "../www/report.html"
	}

	function reportuser2(){

		let data = {
			fld_reporterid: localStorage.userid,
			fld_reportedid: localStorage.friendid,
			fld_reportedname: localStorage.friendname,
			fld_category: document.getElementById("category").value,
			fld_reason: document.getElementById("reason").value,
			fld_reportdate: dateString,
		}

		if(data.fld_reporterid == "" || data.fld_reportedname == "" || data.fld_category || data.fld_reason == ""){
			alert('Please fill in all the fields.');
		} 
		else{

			fetch(url+"/insert/tbl_reports",{
				method:"POST",
				body:JSON.stringify([data])
			}).then(function(data){
				
				console.log(data);
				if (data['status'] === 'error') {
					alert('Data Not Added. Error!');

				}else{
					alert('Your report has been sent.\n\nThe admin will review this and take the necessary actions against the user.');
					console.log(data);
					window.location = "../www/friend.html";
				}
				
			});

		}

	}

	// Report User End

	function removefriend(){

		let data2 = {
			fld_requesterid: localStorage.userid,
			fld_requestername: localStorage.fullname,
			fld_requestedid: localStorage.friendid,
			fld_requestedname: localStorage.friendname,
		}


		var r = confirm("Action cannot be undone. Would you like to continue?");
		if (r == true) {

			fetch(url+"/insert/tbl_relationshiparchive/",{
				method:"POST",
				body:JSON.stringify([data2])
			});

			fetch(url+"/delete/tbl_requests/fld_transactionid/"+localStorage.relationshipid).then((res)=>res.json()).then(function(data){
			});
			window.location = "../www/friend.html";

		} else {

		}

	}

	function myfeedback(){
		var ls = "";
		var lsfeed = "";

		fetch(url+'/tbl_feedback/fld_revieweeid/'+localStorage.userid).then(res=>res.json()).then(function(data){

			for(var i = 0; i < data.length; i++){
				ls += '<p>"' + data[i].fld_feedback + '"  - ' + data[i].fld_reviewername + '</p>';
			}

			document.getElementById("myfeedback").innerHTML= ls;

			if(ls == ""){
				lsfeed += "<br><p>You have yet to be given some feedbacks.<br>Interact more with others to let them get to know you!</p>";
			}		
			else{
			}

			document.getElementById("myfeedbackstiffy").innerHTML= lsfeed;
		});
	}