let nema = document.querySelector("#name")
let form = document.querySelector("form")

form.addEventListener("submit", function(detl){
    detl.preventDefault();

    if(nema.value.length <= 2){
        document.querySelector("#hide").style.display = "initial";
    }else{
        document.querySelector("#hide").style.display = "none";
    }
})

form.addEventListener("submit", function(detl){
    detl.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let ans = emailRegex.test("ajay.sharma@example.com");
    console.log(ans); // true
    console.log(emailRegex.test("aja1.y@d.rm")); // false
})

