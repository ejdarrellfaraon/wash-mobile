var url="http://localhost/washtv2/api";


function x(val){
	return document.querySelector(val);
}

function userdata(){
	fetch(url+"/tbl_users/fld_email/"+localStorage.email).then((res)=>res.json()).then(function(data){
		var ls = "";
		if (data.length <= 0) {
			ls+= "<tr><td colspan='3'>Nothing Found</td></tr>"
		}else{
			for (var i = 0; i < data.length; i++) {
				// ls += "<tr>"
				// ls += "<td>" + data[i].fld_firstname + " " + data[i].fld_lastname + "</td>";
				// ls += "<td>" + data[i].fld_sex + "</td>";
				// ls += "<td>" + data[i].fld_email + "</td>";
				// ls += "<td>" + data[i].fld_contactnumber + "</td>";
				// ls += "<td>" + data[i].fld_location + "</td>";				
				// ls += "</tr>";

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

}

function petdata(){
	fetch(url+"/tbl_pets/fld_userid/"+localStorage.userid).then((res)=>res.json()).then(function(data){
		var ls = "";
		if (data.length <= 0) {
			
		}else{
			for (var i = 0; i < data.length; i++) {
				// ls += "<tr>"
				// ls += "<td>" + data[i].fld_firstname + " " + data[i].fld_lastname + "</td>";
				// ls += "<td>" + data[i].fld_sex + "</td>";
				// ls += "<td>" + data[i].fld_email + "</td>";
				// ls += "<td>" + data[i].fld_contactnumber + "</td>";
				// ls += "<td>" + data[i].fld_location + "</td>";				
				// ls += "</tr>";

				console.log(localStorage.userid)
				console.log(data)

				// ls += "<tr>"
				// ls += "<td> Pet Name </td><td>" + data[i].fld_petname + "</td></tr>";
				// ls += "<tr><td> Animal </td><td>" + data[i].fld_animal + "</td></tr>";
				// ls += "<tr><td> Sex </td><td>" + data[i].fld_petsex + "</td></tr>";
				// ls += "<tr><td> Pet Breed </td><td>" + data[i].fld_breed + "</td></tr>";
				// ls += "<tr><td> Birthdate </td><td>" + data[i].fld_birthdate + "</td></tr>";
				// ls += "<tr><td> Vaccination Date </td><td>" + data[i].fld_vaccinationdate + "</td>";				
				// ls += "</tr>";

				ls += '<div class="card rgba-white-strong"><div class="container-fluid"><center><a href="#"><img src="../img/dog.png" style="height: 11rem; padding-top: 1em"></a> </center><br>';
				ls += '<table style="width:100%;"><tr><td> Pet Name </td><td> ' + data[i].fld_petname + '</td></tr>';
				ls += "<tr><td> Animal </td><td>" + data[i].fld_animal + "</td></tr>";
				ls += "<tr><td> Sex </td><td>" + data[i].fld_petsex + "</td></tr>";
				ls += "<tr><td> Pet Breed </td><td>" + data[i].fld_breed + "</td></tr>";
				ls += "<tr><td> Birthdate </td><td>" + data[i].fld_birthdate + "</td></tr>";
				ls += "<tr><td> Vaccination Date </td><td>" + data[i].fld_vaccinationdate + "</td>";				
				ls += '</tr></table><center><button class="btn btn-lg blue-gradient btn-outline-white" style="color:white!important" onClick="deletepet(' + data[i].fld_petid + ')">DELETE PET</button></center><br>';
			}
		}
		document.getElementById("petcard").innerHTML= ls;
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
			document.getElementById("userpassword").value = '';
			e.preventDefault();	

			fetch(url+"/insert/tbl_register",{
				method:"POST",
				body:JSON.stringify([data])
			}).then(function(data){
				
				console.log(data);
				if (data['status'] === 'error') {
					alert('Data Not Added. Error!');

				}else{
					alert('Success !');
					window.location = "./index.html";
				}
				userdata();
			});

		});
	}catch (err){

	}
});

// User Insert End


// Log-In

function login(uname,pword){

	fetch(url+'/tbl_register').then(res=>res.json()).then(function(data){
		var ls = "";
		if(data.length <= 0){
			ls += "<h5> Nothing Found </h5>"
		} else{
			for (var i = 0; i < data.length; i++) {
				if (data[i].fld_email == uname && data[i].fld_password == pword) {
					localStorage.setItem('userid', data[i].fld_id);
					localStorage.setItem('userfname', data[i].fld_firstname + " " + data[i].fld_lastname);
					localStorage.setItem('userlname', data[i].fld_lastname);
					localStorage.setItem('userbarangay', data[i].fld_barangay);
					localStorage.setItem('usercaddress', data[i].fld_completeaddress);
					localStorage.setItem('userlmark',data[i].fld_landmark);
					localStorage.setItem('useremail', data[i].fld_email);
					localStorage.setItem('usercnumber', data[i].fld_contactnumber);
					localStorage.setItem('userpassword', data[i].fld_password);
					window.location = "../mainpage.html";
				} else {
					alert("Invalid username or password. Please try again.");
				}
			}
		}
	});
}

// Log-In End


// Booking schedule start

document.addEventListener('DOMContentLoaded',function(){

	try{
		x('#servicebook').addEventListener('submit',function(e){
			let data = {
				fld_servicedate:document.getElementById("date_schedule").value,
				fld_servicelandmark:document.getElementById("landmark").value,
				fld_servicetypecar:document.getElementById("optioncar").value,
				fld_servicetype:document.getElementById("servicetype").value,
			}
				document.getElementById("date_schedule").value = '';
				document.getElementById("landmark").value = '';
				document.getElementById("optioncar").value = '';
				document.getElementById("servicetype").value = '';
				e.preventDefault();

			fetch(url+"/insert/tbl_service",{
				method:"POST",
				body:JSON.stringify([data])
			}).then(function(data){
				
				console.log(data);
				if (data['status'] === 'error') {
					alert('Data Not Added. Error!');

				}else{
					alert('Data Added.');
					window.location = "../www/mainpage.html";
				}
				userdata();
			});

		});
	}catch (err){

	}
});

// booking schedule end




function getdata(id){
	
	fetch(url+'/tbl_users/fld_userid/'+id).then(res=>res.json()).then(function(data){
		document.getElementById('firstname').value=	data[0].fld_firstname;
		document.getElementById('lastname').value=	data[0].fld_lastname;
		document.getElementById('pass').value=	data[0].fld_password;
		document.getElementById('email').value=	data[0].fld_email;
		document.getElementById('contactnumber').value=	data[0].fld_contactnumber;
		document.getElementById('location').value=	data[0].fld_location;

		localStorage.setItem('edit_uID',data[0].fld_userid);

		/*document.getElementById('comp_email').innerHTML+=data[0].fldEmail;
		document.getElementById('comp_address').innerHTML+=data[0].fldAddress;
		document.getElementById('comp_contact').innerHTML+=data[0].fldContactNo;
		document.getElementById('comp_fax').innerHTML+=data[0].fldFax;
		document.getElementById('comp_web').innerHTML+=data[0].fldWebsite;*/
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

		/*document.getElementById('comp_email').innerHTML+=data[0].fldEmail;
		document.getElementById('comp_address').innerHTML+=data[0].fldAddress;
		document.getElementById('comp_contact').innerHTML+=data[0].fldContactNo;
		document.getElementById('comp_fax').innerHTML+=data[0].fldFax;
		document.getElementById('comp_web').innerHTML+=data[0].fldWebsite;*/
	});
}

/*function updatedata(){

	var data = {
		fld_username:document.getElementById("uname").value,
		fld_fname:document.getElementById("fname").value,
		fld_lname:document.getElementById("lname").value,
	}
		fetch(url+"/update/tbl_user/fld_id/"+localStorage.edit_uID,{
			method:"POST",
			body:JSON.stringify([data])
		}).then(function(data){
			userdata();
		});
}
*/

function updateuser(){

	var data = {
		fld_firstname:document.getElementById("firstname").value,
		fld_lastname:document.getElementById("lastname").value,
		fld_email:document.getElementById("email").value,
		fld_password:document.getElementById("pass").value,
		fld_contactnumber:document.getElementById("contactnumber").value,
		fld_location: document.getElementById("location").value
	}
		fetch(url+"/update/tbl_users/fld_userid/"+localStorage.edit_uID,{
			method:"POST",
			body:JSON.stringify([data])
		}).then(function(data){

			console.log(data);
				if (data['status'] === 'error') {
					alert('An error has occured. Please try again.');

				}else{
					alert('Profile Successfully Updated.');
				}
			userdata();
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
			petdata();
		})
}

function hello(){
	fetch(url+"/tbl_users/fld_email/"+localStorage.email).then((res)=>res.json()).then(function(data){
		
		var hello = localStorage.fullname;
		document.getElementById("hello").innerHTML= hello;
	});
}

// function search(sanimal,sgender){
// 	fetch(url+"/tbl_pets/fld_animal/"+sanimal).then((res)=>res.json()).then(function(data){
// 		var ls = "";
// 		if (data.length <= 0) {
// 			ls+= "<tr><td colspan='3'>Nothing Found</td></tr>"
// 		}else{
// 			for (var i = 0; i < data.length; i++) {

// 				console.log(data[i].fld_animal);

// 					if (data[i].fld_animal == sanimal || data[i].fld_petsex == sgender) {
// 					ls += '<div class="card rgba-white-strong"><div class="container-fluid"><center><a href="#"><img src="../img/dog.png" style="height: 11rem; padding-top: 1em"></a> </center><br>';
// 					ls += '<table style="width:100%;"><tr><td> Pet Name </td><td> ' + data[i].fld_petname + '</td></tr>';
// 					ls += "<tr><td> Animal </td><td>" + data[i].fld_animal + "</td></tr>";
// 					ls += "<tr><td> Sex </td><td>" + data[i].fld_petsex + "</td></tr>";
// 					ls += "<tr><td> Pet Breed </td><td>" + data[i].fld_breed + "</td></tr>";
// 					ls += "<tr><td> Birthdate </td><td>" + data[i].fld_birthdate + "</td></tr>";
// 					ls += "<tr><td> Vaccination Date </td><td>" + data[i].fld_vaccinationdate + "</td>";				
// 					ls += '</tr></table><center><button class="btn btn-lg blue-gradient btn-outline-white" style="color:white!important" onClick="deletepet(' + data[i].fld_petid + ')">DELETE PET</button></center>';
// 				} 
// 					else {
// 					console.log("None found");
// 					}
// 				}
// 				// ls += "<tr>"
// 				// ls += "<td>" + data[i].fld_firstname + " " + data[i].fld_lastname + "</td>";
// 				// ls += "<td>" + data[i].fld_sex + "</td>";
// 				// ls += "<td>" + data[i].fld_email + "</td>";
// 				// ls += "<td>" + data[i].fld_contactnumber + "</td>";
// 				// ls += "<td>" + data[i].fld_location + "</td>";				
// 				// ls += "</tr>";

// 				console.log(data)

// 				/*ls += "<tr>"
// 				ls += "<td> Name </td><td>" + data[i].fld_firstname + " " + data[i].fld_lastname + "</td></tr>";
// 				ls += "<tr><td> Sex </td><td>" + data[i].fld_sex + "</td></tr>";
// 				ls += "<tr><td> E-mail </td><td>" + data[i].fld_email + "</td></tr>";
// 				ls += "<tr><td> Contact Number </td><td>" + data[i].fld_contactnumber + "</td></tr>";
// 				ls += "<tr><td> Location </td><td>" + data[i].fld_location + "</td></tr>";
// 				ls += '<tr><td colspan=2"><center><button class="btn btn-lg blue-gradient btn-outline-white" style="color:white!important;" data-toggle="modal" data-target="#modalEditProfile" onclick="getdata(' + data[i].fld_userid + ') ">EDIT PROFILE</button></center></td></tr>'
			
// 		}
// 		document.getElementById("result").innerHTML= ls;
// 	});

// }

function static(){
	fetch(url+"/tbl_pets/fld_animal/Dog").then((res)=>res.json()).then(function(data){
		var lspet = "";
		if (data.length <= 0) {
			
		}else{
			for (var i = 0; i < data.length; i++) {
				// ls += "<tr>"
				// ls += "<td>" + data[i].fld_firstname + " " + data[i].fld_lastname + "</td>";
				// ls += "<td>" + data[i].fld_sex + "</td>";
				// ls += "<td>" + data[i].fld_email + "</td>";
				// ls += "<td>" + data[i].fld_contactnumber + "</td>";
				// ls += "<td>" + data[i].fld_location + "</td>";				
				// ls += "</tr>";

				console.log(localStorage.userid)

				// ls += "<tr>"
				// ls += "<td> Pet Name </td><td>" + data[i].fld_petname + "</td></tr>";
				// ls += "<tr><td> Animal </td><td>" + data[i].fld_animal + "</td></tr>";
				// ls += "<tr><td> Sex </td><td>" + data[i].fld_petsex + "</td></tr>";
				// ls += "<tr><td> Pet Breed </td><td>" + data[i].fld_breed + "</td></tr>";
				// ls += "<tr><td> Birthdate </td><td>" + data[i].fld_birthdate + "</td></tr>";
				// ls += "<tr><td> Vaccination Date </td><td>" + data[i].fld_vaccinationdate + "</td>";				
				// ls += "</tr>";

				lspet += '<div class="card rgba-white-strong"><div class="container-fluid"><center><a href="#"><img src="../img/dog.png" style="height: 11rem; padding-top: 1em"></a> </center><br>';
				lspet += '<table style="width:100%;"><tr><td> Pet Name </td><td> ' + data[i].fld_petname + '</td></tr>';
				lspet += "<tr><td> Animal </td><td>" + data[i].fld_animal + "</td></tr>";
				lspet += "<tr><td> Sex </td><td>" + data[i].fld_petsex + "</td></tr>";
				lspet += "<tr><td> Pet Breed </td><td>" + data[i].fld_breed + "</td></tr>";
				lspet += "<tr><td> Birthdate </td><td>" + data[i].fld_birthdate + "</td></tr>";
				lspet += "<tr><td> Vaccination Date </td><td>" + data[i].fld_vaccinationdate + "</td>";				
				lspet += '</tr></table><center><button class="btn btn-lg blue-gradient btn-outline-white" style="color:white!important" data-toggle="modal" data-target="#modalview' + data[i].fld_userid +'">VIEW OWNER INFO</button></center></div></div>'

				lspet +=' <div class="modal fade" id="modalview'+data[i].fld_userid+'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content">';
				lspet += '<center> <a href="#"><img src="../img/user.png" style="height: 11rem; padding-top: 1em"></a> </center> <br><table><tr>'
				lspet += "<td> Name </td><td>" + data[i].fld_firstname + " " + data[i].fld_lastname + "</td></tr>";
				lspet += "<tr><td> Sex </td><td>" + data[i].fld_sex + "</td></tr>";
				lspet += "<tr><td> E-mail </td><td>" + data[i].fld_email + "</td></tr>";
				lspet += "<tr><td> Contact Number </td><td>" + data[i].fld_contactnumber + "</td></tr>";
				lspet += "<tr><td> Location </td><td>" + data[i].fld_location + "</td></tr></table>";
				lspet += ' </div> </div> </div>';
			}
		}
		document.getElementById("searchpet").innerHTML= lspet;
	});

}
