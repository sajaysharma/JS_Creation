const form = document.querySelector("form");
const input = document.getElementById("task");

const list = document.getElementById("list");

form.addEventListener("submit", (e) =>{
     e.preventDefault();
     const text = input.value.trim();
     
     if(text === ""){
        return;
     }
     const parent = document.createElement("div");
     parent.classList.add("task-item");
     const task = document.createElement("span");
     task.classList.add("task-text");
     task.textContent = text;

     const doneButton = document.createElement("button");
     doneButton.classList.add("done-btn");
     doneButton.textContent = "Done";
     
     const deleteButton = document.createElement("button");
     deleteButton.classList.add("delete-btn");
     deleteButton.textContent = "Delete";

     deleteButton.addEventListener("click", ()=>{
        parent.remove();
     })
     doneButton.addEventListener("click", ()=> {
        task.style.textDecoration = 'line-through';
        task.style.color = 'grey';
     })

     parent.append(task, doneButton, deleteButton);
     list.classList.add("list");
     list.append(parent);

     form.reset();
})
