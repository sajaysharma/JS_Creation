const div = document.getElementById("parent");


setInterval(() => {
        let time = new Date();
        // console.log(time.toLocaleTimeString());
        document.getElementById("Result").textContent = time.toLocaleTimeString();
}, 1000)

const result = document.getElementById("result");




setInterval(() => {
        const current = Date.now();

        const upComming = new Date(2028, 6, 14).getTime();
        let totalTime = upComming - current;
        const day = Math.floor((totalTime) / (1000 * 60 * 60 * 24));
        totalTime %= 1000 * 60 * 60 * 24;

        const hour = Math.floor((totalTime) / (1000 * 60 * 60));
        totalTime %= (1000 * 60 * 60);

        const minute = Math.floor((totalTime) / (1000 * 60));
        totalTime %= (1000 * 60);

        const second = Math.floor((totalTime) / (1000));
        totalTime %= 1000

        const miliSecond = totalTime;

        result.textContent = `${day} Day ${hour} Hour ${minute} Minute ${second} Second ${miliSecond} Mili Second`;
}, 100);

