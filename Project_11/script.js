// async function greet(){
//         // return "Ajay";
//         return new Promise((response, reject) => {
//                 // response("Hello Ajay");
//                 reject("Hello I'm rejact");
//         })
// }

// const response = greet();

// // console.log(response);
// response.then((data) => {
//         console.log(data);
// }).catch((error) => {
//         console.log(error);
// })

const url = "https://api.github.com/users";

// fetch("https://api.github.com/users")
// .then((response) => {
//         return response.json();
// }).then((data) => {
//         console.log(data);
// })


// fetch("https://api.github.com/users")
// .then((reponse) => reponse.json())
// .then((data) => console.log(data));

async function gitHub() {
        const reponse = await fetch(url);
        const data = await reponse.json();
        // console.log(data);

        const parent = document.getElementById("parent");

        for(let user of data){
                const element = document.createElement("div");
                element.classList.add("profile");

                const image = document.createElement("img");
                image.src = user.avatar_url;

                const userName = document.createElement("h2");
                userName.textContent = user.login;

                const profileLink = document.createElement("a");
                profileLink.href = user.html_url;
                profileLink.textContent = "Visit Profile";

                element.append(image, userName, profileLink);

                parent.append(element);
        }
}


gitHub();
