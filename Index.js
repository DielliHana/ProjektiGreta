function topNav(){
    var x = document.getElementById("topNav");
    if(x.className ===  "topNav"){
        x.className += "responsive";
    }else{
        x.className ="topNav";
    }
}
function menuButton(){
    var menuModal = document.getElementById('menu');
    menuModal.style.display = (menuModal.style.display === 'block') ? 'none' : 'block';
}
function contactButton(){
    var contactModal = document.getElementById('contact');
    contactModal.style.display = (contactModal.style.display === 'block') ? 'none' : 'block';
}
window.onclick = function (event) {
    var modals = document.getElementsByClassName('m-modal-content');
    for(var i =0; i<modals.length;i++){
        var modal = modals[i];
        if(event.target == modal){
            modal.parentElement.style.display = 'none';
        }
    }
};