// Login check
function log() {
	uname = document.getElementById("username").value;
	pword = document.getElementById("password").value;

	console.log(uname + pword)

	login(uname, pword);
}
// Log In check end


// SideNav Button Initialization
$(".button-collapse").sideNav();
// SideNav Scrollbar Initialization
var sideNavScrollbar = document.querySelector('.custom-scrollbar');
Ps.initialize(sideNavScrollbar);
// Side Nav iitialization

// Material Select Initialization 
$(document).ready(function () { $('.mdb-select').material_select(); });


$(document).ready(function () {
	var input = $('#manual-operations-input').pickatime({
		autoclose: true,
		'default': 'now'
	});

// Manually toggle to the minutes view
$('#check-minutes').click(function(e){
	e.stopPropagation();
	input.pickatime('show').pickatime('toggleView', 'minutes');
});

});

