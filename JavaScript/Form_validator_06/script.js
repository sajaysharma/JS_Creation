let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");


form.addEventListener("submit", function (detl) {

    detl.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let isValid = true;

    if (!emailRegex.test(email.value)) {
        document.querySelector(".error").style.display = "initial";
        isValid = false;
    } else {
        document.querySelector(".error").style.display = "none";
    }
    if (!passwordRegex.test(password.value)) {
        document.querySelector(".error1").style.display = "initial";
        isValid = false;
    } else {
        document.querySelector(".error1").style.display = "none";
    }

    if(isValid){
        let result = document.querySelector("#result");
        result.textContent = " Welcome! You are logged in successfully.";
        result.style.color = "green";
        result.style.display = "initial";
        
    }else{
        let result = document.querySelector("#result");
        result.textContent = "Sorry! fill required field";
        result.style.color = "red";
        result.style.display = "initial";
    }
     form.reset();
})