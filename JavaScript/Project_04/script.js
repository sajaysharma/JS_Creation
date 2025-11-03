// Event Bubbling 

let btn = document.querySelector("button");
let a = document.querySelector(".a");
let b = document.querySelector(".b");
let c = document.querySelector(".c");

let input = document.querySelector("input")
let spen = document.querySelector("span")

// addEventListener("click" - event, function(){console.log("Button clicked"); - listner

btn.addEventListener("click", function(){
    console.log("Button clicked");
})

a.addEventListener("click", function(){
    console.log("A clicked");
})

b.addEventListener("click", function(){
    console.log("B clicked")
}, true)

c.addEventListener("click", function(){
    console.log("C clicked")
},true)

input.addEventListener("input", function(detl){
    detl.preventDefault()
    let cont = 20 - input.value.length;
    spen.textContent = cont;
    if(cont < 0){
        spen.style.color = "red"
    }else{
        spen.style.color = "white"
    }
})