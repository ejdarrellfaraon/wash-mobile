
function logout(){
    window.location.assign("index.html");
    localStorage.removeItem("userbarangay");
    localStorage.removeItem("usercaddress");
    localStorage.removeItem("usercnumber");
    localStorage.removeItem("useremail");
    localStorage.removeItem("userfname");
    localStorage.removeItem("userid");
    localStorage.removeItem("userlmark");
    localStorage.removeItem("userlname");
    localStorage.removeItem("userpassword");
}