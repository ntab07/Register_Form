function loadData(){
    
    var name = document.getElementById("confirm_name")
    name.textContent = sessionStorage.firstname + " " + sessionStorage.lastname

    var contact = document.getElementById("confirm_contact")
    contact.textContent = sessionStorage.email + " / " + sessionStorage.phone_number

    var contact = document.getElementById("confirm_age")
    contact.textContent = sessionStorage.age
}

function editButton(){
    window.location = "index_register.html"
} 

function init(){
    loadData();

    var edit = document.getElementById("editButton")
    edit.onclick = editButton;
}

window.onload = init;