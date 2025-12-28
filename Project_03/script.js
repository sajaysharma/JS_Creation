const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
        e.preventDefault();
        const Boy = document.getElementById("Boy");
        const Girl = document.getElementById("Girl");

        const BoyLength = Boy.value.length;
        const GirlLength = Girl.value.length;
        
        const result = Math.pow(BoyLength + GirlLength,3) % 101;

        document.getElementById("Result").textContent = `Result: ${result}%`;
        form.reset();
})