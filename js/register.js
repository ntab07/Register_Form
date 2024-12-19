function saveData(){
    var firstname = document.getElementById("fname").value;
    var lastname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var pnum = document.getElementById("pnum").value;
    var age = document.getElementById("age").value;


    sessionStorage.firstname = firstname;
    sessionStorage.lastname = lastname;
    sessionStorage.email = email;
    sessionStorage.phone_number = pnum;
    sessionStorage.age = age;


}

function prefillData() {

    if (sessionStorage.firstname != null) 
    {
    document.getElementById("fname").value = sessionStorage.firstname;
    document.getElementById("lname").value = sessionStorage.lastname;
    document.getElementById("email").value = sessionStorage.email;
    document.getElementById("pnum").value = sessionStorage.phone_number;
    document.getElementById("age").value = sessionStorage.age;
    }
}

function init(){

    prefillData()
    alert("Welcome To Register Page");

    var regForm = document.getElementById("registerForm");
    regForm.onsubmit = saveData;
}

window.onload = init;