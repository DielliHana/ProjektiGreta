function regjistrimi(){
            
    var Name = document.getElementById('Name').value;   
    var People = document.getElementById('People').value;   
    var date = document.getElementById('date').value;   
    var Message = document.getElementById('Message').value;

if(!Name || !People || !date || !Message){
    alert('All fields must be filled!');
    return;
}else{
    alert('Registration ended succesfully!');
}