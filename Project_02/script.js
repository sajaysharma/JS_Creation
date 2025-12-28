


const div = document.getElementById("first"); 


div.addEventListener("click", (e)=>{
//      console.log(e.target);
        document.querySelector("body").style.backgroundColor = e.target.id;
})