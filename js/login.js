function login(){

let role=document.getElementById("role").value;

let email=document.getElementById("email").value;

let password=document.getElementById("password").value;

if(role=="" || email=="" || password==""){

alert("Please fill all fields.");

return;

}

if(role=="admin"){

window.location.href="admin/dashboard.html";

}

else if(role=="student"){

window.location.href="student/dashboard.html";

}

else if(role=="teacher"){

window.location.href="teacher/dashboard.html";

}

else if(role=="parent"){

window.location.href="parent/dashboard.html";

}

}