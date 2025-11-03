// setTimeout(function(){
//     console.log("Hello");
// }, 7000)

// let interval = setInterval(function(){
//     console.log("hello")
// }, 2000)

// clearInterval(interval);

// let count = 10;

// let interval = setInterval(function(){
//     if(count >= 1){
//         console.log(count);
//         count--;
//     }else{
//         clearInterval(interval);
//     }
// }, 2000)
let count = 0;
let progress = document.querySelector("#progressFill");
let percentText = document.querySelector("#percentText");
let statusText = document.querySelector("#statusText");
let startBtn = document.querySelector("#startBtn");

startBtn.addEventListener("click", function () {
    let sample = setInterval(function () {
        if (count <= 99) {
            count++;
            progress.style.width = `${count}%`;
            percentText.textContent = `${count}%`;
            statusText.textContent = "Downloading.."
        } else {
            statusText.textContent = "Downloaded"
            clearInterval(sample);
        }
    }, 10000 / 100)
})

