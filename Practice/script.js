// console.log("Ajay Sharma");

// const newDate = new Date();

// console.log(`Day: ${newDate.getDate()} month: ${newDate.getMonth()} year: ${newDate.getFullYear()}`);

// console.log(newDate.getTime());

// let first = "Ajay";
// let last = "Sharma";
// // console.log(first + " " + last);
// console.log(`${first} ${last}`)

// let a = 10;
// console.log("Value of A before", a);
// a = 30;
// console.log("Value of A after", a);

// let age = 12;
// if(age > 18) console.log(true);
// else console.log(false);

// let b = true;
// console.log(typeof a, typeof age, typeof b);

// const arr = [1, 2, 3, 4];
// // arr.push(4);
// console.log(arr);
// console.log(arr.indexOf(4))

// let num = 1;
// let sum = 0;
// while(num < 10){
//         sum = sum + num;
//         num++;
// }
// console.log( sum); 

// let str = "JAVASCRIPT"
// for(let char of str){
//         console.log(char + 4);
// }
// let rev = "";
// for(let i = str.length - 1; i >= 0; i--){
//       rev += str[i];
// }
// console.log(rev)
// let f = 1, n = 4;

// for(let i = n; i > 0; i--){
//         f = f * i;
// }
// console.log(f);


function reverseNum(arr) {
        let i = 0, j = arr.length - 1;
        while (i < j) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                i++, j--;
        }
        return arr;
}

console.log(reverseNum([1, 2, 3, 4, 5]));

const reverseString = (str) => {
        let revers = "";
        for(let i = str.length - 1; i >= 0; i--){
                revers += str[i];
        }
        return revers;
}

console.log(reverseString("JavaScript"));

const obj = {
        name: "Ajay",
        age: 23,
        class: "MCA"
}
for(let key in obj){
        console.log(`keys: ${key}, Values: ${obj[key]}`);
}
function findLarge (arr) {
        let large = arr[0];
        for(let i = 1; i < arr.length; i++){
                if(large < arr[i]){
                        large = arr[i];
                }
        }
        return large;
}

console.log(findLarge([23, 65, 87, 56]));