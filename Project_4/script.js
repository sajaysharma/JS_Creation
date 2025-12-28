const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
        e.preventDefault();
        const income  = document.getElementById("income");
        const amt = parseInt(income.value);

        const result = document.getElementById("Result");
        let TotalTax = 0;
        if(amt <= 1200000){
                TotalTax = 0;
        }else if(amt <= 1600000){
                TotalTax = (amt - 1200000) * 0.15;
        }else if(amt <= 2000000){
                TotalTax = (amt - 1600000) * 0.20 + 600000;
        }else if(amt <= 2400000){
                TotalTax = (amt - 2000000) * 0.25 + 600000 + 800000;
        }else {
                TotalTax = (amt - 2400000) * 0.30 + 60000 + 80000 + 100000;
        }

        result.textContent =  `Total Tax : ${TotalTax}`;
        form.reset();
})