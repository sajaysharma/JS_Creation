let h1 = document.querySelector("h1");


window.addEventListener("keydown", function(detl){
    console.log(detl.key)
    if(detl.key === " "){
        h1.textContent = "SPC"
    }else{
        h1.textContent = detl.key
    }
})

let btn = document.querySelector("#btn");
let infile = document.querySelector("#infile");

btn.addEventListener("click", function(){
    infile.click();
})

infile.addEventListener("change", function(detl){
    const file = detl.target.files[0];
    if(file){
        btn.textContent = file.name;
    }
})