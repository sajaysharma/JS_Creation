let div = document.querySelector("#abcd");
let form  = document.querySelector("form")
let li = document.querySelector("ul")

div.addEventListener("mouseover", function(){
    div.style.backgroundColor = "yellow"
});

div.addEventListener("mouseout", function(){
    div.style.backgroundColor = "green"
});

form.addEventListener("submit", function(detl){
    detl.preventDefault()
})

li.addEventListener("click", function(detl){
    detl.target.classList.toggle("lt");
})
// window.addEventListener("mousemove", function(detl){
//     div.style.top = detl.clientY + "px";
//     div.style.left = detl.clientX + "px";
// })