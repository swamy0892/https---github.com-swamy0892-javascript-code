function validateForm(){
    const name=document.getElementById("name").value;
    const address=document.getElementById("address").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const subject=document.getElementById("subject").value;
    const agree=document.getElementById("agree").checked;

    const nameError=document.getElementById("name-error");
    const addressError=document.getElementById("address-error");
    const emailError=document.getElementById("email-error");
    const passwordError=document.getElementById("password-error");
    const subjectError=document.getElementById("subject-error");
    const agreeError=document.getElementById("agree-error");

    nameError.textContent="";
    addressError.textContent="";
    emailError.textContent="";
    passwordError.textContent="";
    subjectError.textContent="";
    agreeError.textContent="";

    let isValid=true;
    if(name===""|| /\d/.test(name)){
        nameError.textContent="please enter your name properly";
        isValid=false;
    }

    if(address===""){
        addressError.textContent="please enter your address";
        isValid=false;
    }

    if(email===""|| !email.includes("@")){
        emailError.textContent="please enter your email properly";
        isValid=false;
    }

    if(password===""|| password.length<6){
        passwordError.textContent="please enter valid password";
        isValid=false;
    }

    if(subject===""){
        subjectError.textContent="please select your course";
        isValid=false;
    }

    if(!agree){
        agreeError.textContent="please agree above information";
        isValid=false;
    }
    return isValid;
}