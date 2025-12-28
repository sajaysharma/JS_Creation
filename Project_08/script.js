const form = document.querySelector("form");
const answer = {
        q1: "Hyper Text Markup Language",
        q2: "Cascading Style Sheets",
        q3: "JavaScript",
        q4: "Central Processing Unit",
        q5: "Random Access Memory"
};
form.addEventListener("submit", (e)=>{
        e.preventDefault();
        
        const data = new FormData(form);
        let scoreCount = 0;
        for(let [name, value] of data.entries()){
               if(answer[name] == value){
                 scoreCount += 1;
               }
        }
        
        document.getElementById("scorePrint").textContent = `Your Score is ${scoreCount} out of 5`;
        form.reset();
})