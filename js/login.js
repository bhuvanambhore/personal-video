function login(){

const user=document.getElementById("username").value;

const pass=document.getElementById("password").value;

if(user==="admin" && pass==="Admin@2026"){

localStorage.setItem("loggedIn","true");

window.location="index.html";

}else{

document.getElementById("msg").innerText="Invalid username or password";

}

}
