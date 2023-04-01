function addUser(){
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let name = document.getElementById('fullname');
    let country = document.getElementById('country');
    let date = document.getElementById('date');
    let key = email.value;
    let data = {
    email: email.value,
    password: password.value,
    name: name.value,
    country: country.value,
    date: date.value
    }
    if(localStorage.getItem(key) == null){
    localStorage.setItem(key, JSON.stringify(data));
    email.value = "";
    password.value = "";
    name.value = "";
    country.value = "";
    date.value = "";
    alert("Congrats, you are registered")
    }
    else{
     alert("This user already exists")
    }
}
function login() {
    let user = document.getElementById('user');
    let password = document.getElementById('pass');
    if(localStorage.getItem(user.value) === null){
        user.value = "";
        pass.value = "";
        alert("This user does not exists")
        return;
    }
    let data = JSON.parse(localStorage.getItem(user.value));
    if(data.password == password.value){
        location.href = 'Sprint4page1.html?' + data.email
        window.open('Sprint4page1.html');
    }
    else{
        alert("Incorrect password");
    }
}