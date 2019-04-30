
var urla = "http://localhost/washv2/";
pendingRequest();
function pendingRequest(){
  var ownershopname = localStorage.getItem("ownershopname");
  $.getJSON(urla+"api/pendingRequest.php?userReq", {ownershopname:ownershopname}, function(data){
    var body="";
    data.map(e=>{
      body+='<div class="card testimonial-card"><div class="card-up" style="background-color: #2D4871"></div>';
      body+='<div class="avatar mx-auto white">';
      body+='<img src="../Assets/img/auto.jpg" class="rounded-circle" alt="woman avatar"></div><div class="card-body">';
      body+='<h4 class="card-title">'+ownershopname+'</h4><hr>';
      body+='<table class="table table-bordered table-responsive-md table-striped text-center"><tr><td class="pt-3-half">';
      body+='<span class="table-up"><a href="#!" class="indigo-text">Request No.</a></span>';
      body+='</td><td class="pt-3-half">';
      body+='<span class="table-up"><a href="#!" class="indigo-text">Date</a></span>';
      body+='</td><td class="pt-3-half">';
      body+='<span class="table-up"><a href="#!" class="indigo-text">Status</a></span></td></tr><tr>';
      body+='<td class="pt-3-half" contenteditable="true">'+e.fld_ustid+'</td>';
      body+='<td class="pt-3-half"><span class="table-up"><a href="#!" class="text">'+e.fld_ustdate+'</a></span></td><td><span class="table-remove">';
      body+='<button onclick="viewRequest('+e.fld_ustid+')" type="button" class="btn btn-danger btn-sm m-0" data-toggle="modal" data-target="#modalrequest">View</button></span></td></tr></table></div></div><br>';
    });
    $('#request').html(body);
  });
}

function viewRequest(id){
  $.getJSON(urla+"api/pendingRequest.php?viewReq&id="+id, function(data){
    data.map(e=>{
     $('#email').text(e.fld_utransactionemail);
     $('#address').text(e.fld_utransactionaddress);
     $('#services').text(e.fld_utransactiontservice);
     $('#message').text(e.fld_utransactionmessage);
     localStorage.setItem("request_id", e.fld_utransacid);
   })

  });
}

function updateRequest(){
  var id = localStorage.getItem("request_id");
  var timesched = $('#timesched').val();
  $.post(urla+"api/acceptrequest.php",{id:id,timesched:timesched},function(){
    toastr.success("Request accepted!");
    pendingRequest();
    $('#modalrequest').modal('hide');
  });
}