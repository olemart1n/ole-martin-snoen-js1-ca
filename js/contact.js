
// all inputs and errormessages
const form = document.getElementById("form");
const name = document.getElementById("name");
const nameError = document.getElementById("nameError");
const subject = document.getElementById("subject");
const subjectError = document.getElementById("subjectError");
const email = document.getElementById("email");
const emailError = document.getElementById("emailError");
const adress = document.getElementById("adress");
const adressError = document.getElementById("adressError");
const success = document.querySelector(".success");
const check = document.getElementById("check");


form.onsubmit = function() {
    event.preventDefault();
    //----VALIDATE NAME
    if (checkLength(name.value, 0) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }
    //----VALIDATE SUBJCET
    if (checkLength(subject.value, 10) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }
    //----VALIDATE EMAIL
    if (checkEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
    //---VALIDATE ADRESS
    if(checkLength(adress.value, 25) === true) {
        adressError.style.display = "none";
    } else {
        adressError.style.display = "block"
    }

    //--------------is this a good to way display the success message?---------------------------------------------------
    if ((checkEmail(email.value) === true) && (checkLength(adress.value, 25) === true) && (checkLength(subject.value, 10) === true) && (checkLength(name.value, 0) === true)) {
        success.style.display = "block"
    }
}   



//---check length of inputs
function checkLength(element, len) {
    if ((element).trim().length > len) {
        return true;
    } else {
        return false;
    }
}
//--- check if input looks like an email adress
function checkEmail (element) {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    patternMatch = regEx.test(element)
    return patternMatch;
}


