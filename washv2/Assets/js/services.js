
var urla = "http://localhost/washv2/";
services();
function services(){
  $.ajax({
    url:"http://localhost/washv2/api/services.php",
    method:"GET",
    dataType:"JSON",
    success:function(data){
      var body="";
      data.map(e=>{

        body+='<div class="card">';
        body+='<div class="view overlay">';
        body+='<img class="card-img-top" src="../Assets/img/auto.jpg" alt="Card image cap"><a>';
        body+='<div class="mask rgba-white-slight"></div></a></div>';
        body+='<button onclick="showname(\''+e.fld_ownersid+'\')" class="btn-floating btn-action ml-auto mr-4" data-toggle="modal" data-target="#modalLoginAvatar" style="background-color:#304352"><i class="fas fa-eye pl-1"></i></button>';
        body+='<div class="card-body">';
        body+='<h4 class="card-title">'+e.fld_ownershopname+'</h4><hr>';
        body+='<p class="card-text"><b>Shop Name:</b> '+e.fld_ownershopname+'</p>';
        body+='<p class="card-text"><b>Barangay:</b> '+e.fld_ownersbarangay+'</p>';
        body+='<p class="card-text"><b>Address:</b> '+e.fld_ownerscaddress+'</p>';
        body+='<p class="card-text"><b>Contact Number:</b> '+e.fld_ownerscnumber+'</p></div>';
        body+='<div class="rounded-bottom text-center pt-3" style="background-color:#304352 ">';
        body+='<ul class="list-unstyled list-inline font-small">';
        body+='<li class="list-inline-item pr-2"><a href="#" class="white-text"><i class="far fa-comments pr-1"></i>12</a></li>';
        body+='<li class="list-inline-item pr-2"><a href="#" class="white-text"><i class="fab fa-facebook-f pr-1"> </i>21</a></li>';
        body+='<li class="list-inline-item"><a href="#" class="white-text"><i class="fab fa-twitter pr-1"></i>5</a></li></ul></div></div><br>';
      });
      $('#servicess').html(body);
    }
  });
}

function showname(id){
  $.ajax({
    url:"http://localhost/washv2/api/shopname.php",
    method:"",
    data:{id:id},
    dataType:"JSON",
    success:function(data){
      var shopname = data.fld_ownershopname;
      $('#name').html(shopname)
    }

  });
}


function createSched(){
  var shopname = $('#name').text();
  var email = localStorage.getItem("useremail");
  var dateselected = $('#utransactdatesched').val();
  var service = $('#menu').val();
  var message = $('#utransactmessage').val();
  var address = localStorage.getItem("usercaddress");
  $.ajax({
    url:"http://localhost/washv2/api/createSched.php",
    method:"POST",
    data:{shopname:shopname,
      email:email,
      dateselected:dateselected,
      service:service,
      message:message,
      address:address
    },
    dataType:"JSON",
    success:function(){
      alert("SUCCESS");
    }
  })
}

































