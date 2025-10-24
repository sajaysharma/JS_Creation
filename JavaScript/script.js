const h1 = document.querySelector("h1");

h1.addEventListener("click", function() {
    h1.style.color = "red"
})

let input = document.querySelector("input");

input.addEventListener("input", function(evt){
    if(evt.data !== null){
        console.log(evt.data);
    }
})

let select = document.querySelector("select");
let member = document.querySelector("#member");

select.addEventListener("change", function(detl){
    member.textContent = `${detl.target.value} is Selected`;
})