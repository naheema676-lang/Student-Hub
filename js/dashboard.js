// Welcome Message
window.onload = function () {
    let page = document.title;
    console.log(page + " Loaded Successfully");
}

// Logout Confirmation
function logout() {
    let confirmLogout = confirm("Are you sure you want to logout?");

    if (confirmLogout) {
        window.location.href = "../index.html";
    }
}

// Demo Search
function searchStudent() {

    let input = document.getElementById("search").value.toLowerCase();

    if(input=="ali"){
        alert("Student Found\n\nName: Ali\nAttendance: 95%\nGrade: A");
    }

    else if(input=="ahmed"){
        alert("Student Found\n\nName: Ahmed\nAttendance: 90%\nGrade: B+");
    }

    else{

        alert("Student Not Found");

    }

}