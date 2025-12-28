const japName = document.getElementById("jap");
let count = 0;
japName.addEventListener("click", (e) => {
        count += 1;
        document.getElementById("result").textContent = `Total ${count}`;
})