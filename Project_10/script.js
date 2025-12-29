console.log("Hello ji ");

// const p1 = fetch("https://api.github.com/users");

// console.log(p1);
// const p2 = p1.then((response) => {
//         return response.json();
// })

// p2.then((response) => {
//         console.log(response);
// })


// JSON -> javascript Object Notation

// -----Creation  of promise ------>

const p1 = new Promise((response, reject) => {
        // response({
        //         name: "Ajay",
        //         age: 23,
        //         address: "dankaur",
        // });
        reject("Error from reject");  
        // response("I am response from promis");
})

p1.then((response) => {
        console.log(response);
}).catch((reject) => {
        console.log(reject);
})

fetch("https://api.github.com/users")
        .then((response) => {
                return response.json();
        }).then((data) => {
                const parent = document.getElementById("parent");
                for(let i = 0;  i < data.length; i++){
                        const image = document.createElement("img");
                        image.src = data[i].avatar_url;
                        image.style.width = "200px";
                        image.style.height = "200px";
                        image.style.margin = "7px";
                        parent.append(image);
                }
        }).catch((error) => {
                // const parent = document.getElementById("parent");
                // parent.textContent = error.message;
                document.getElementById("parent").textContent = error.message;
        })

console.log("program end");