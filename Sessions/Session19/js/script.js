let form = document.getElementById("contact-form");
let userName = document.getElementById("userName");
let phoneNumber = document.getElementById("phoneNumber");
let email = document.getElementById("email");
let massage = document.getElementById("massage");

function showError(input, massage){
    let formcontrol = input.parentElement;
    formcontrol.className = "content-form-error";
    let span = formcontrol.querySelector("span");
    span.innerHTML = massage;     
}

function showInput(input){
    let formcontrol = input.parentElement;
    formcontrol.className = "content-form"
}

form.addEventListener("submit" , (e) => {
    let isValid = true;
    if(userName.value.trim() === ""){
        showError(userName, "user name is required");
        isValid = false;
    }else if(userName.value.trim().length <=2){
        showError(userName, "please enter a valid user name");
        isValid = false;
    }else{
        showInput(userName);
    }

    if(phoneNumber.value.trim() === ""){
         showError(phoneNumber, "phone is required");
         isValid = false;
    }else if(phoneNumber.value.trim().length !== 11){
        showError(phoneNumber, "enter a valid number with 11 num");
        isValid = false;
    }else{
         showInput(phoneNumber);
    }

    if(email.value.trim() === ""){
         showError(email, "email is required");
         isValid = false;
    }else{
        showInput(email)
    }

    if(massage.value.trim() === ""){
         showError(massage, "massage is required");
         isValid = false;
    }else{
        showInput(massage)
    }

    if(isValid === false){
        e.preventDefault();
    }
});
