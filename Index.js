function topNav(){
    var x = document.getElementById("topNav");
    if(x.className ===  "topNav"){
        x.className += "responsive";
    }else{
        x.className ="topNav";
    }
}
document.getElementById('menuButton').addEventListener('click', function(){
    document.getElementById('menu').style.display='block';
});
document.getElementById('contactButton').addEventListener('click', function(){
    document.getElementById('contact').style.display='block';
});
document.querySelector('#menu b-button c-display-topright large').addEventListener('click', function(){
    document.getElementById('menu').style.display='none';
});
document.querySelector('#contact b-button c-display-topright l-large').addEventListener('click', function(){
    document.getElementById('contact').style.display='none';
});
document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault();

    alert('Form submitted succesfully!');
    this.reset();

    document.getElementById('contact').style.display='none';
});