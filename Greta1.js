function topNav(){
    var x = document.getElementById("topNav");
    if(x.className ===  "topNav"){
        x.className += "responsive";
    }else{
        x.className ="topNav";
    }
}