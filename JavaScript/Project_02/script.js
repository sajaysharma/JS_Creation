let form = document.querySelector("form");
let input = document.querySelectorAll("input");
let main = document.querySelector("#main")

form.addEventListener("submit", function(detl){
    detl.preventDefault();
    console.log("Form submitted without reload")
    console.log(detl) 

    let card = document.createElement("div")
    card.classList.add("card")
    let profile = document.createElement("div")
    profile.classList.add("profile")
    let img = document.createElement("img");
    let image = input[0].value
    img.setAttribute("src", image)
    let h3 = document.createElement("h3")
    h3.textContent = input[1].value
    let h5 = document.createElement("h5")
    h5.textContent = input[2].value
    let p = document.createElement("p")
    p.textContent = input[3].value

    profile.appendChild(img);
    card.appendChild(profile)
    card.appendChild(h3)
    card.appendChild(h5)
    card.appendChild(p)

    main.appendChild(card)

    input.forEach(function(inp){
        if(inp.type !== "submit"){
            inp.value = "";
        }
    })

});
