// class in javascript


// class Person{
//         constructor(name, age){
//                 this.name = name;
//                 this.age = age;
//         }

//         sayHii(){
//                 console.log("Hii hello hey hey");
//         }
// }

// const obj = new Person("ajay", 12);
// console.log(obj);

// const ob = {
//         name: "Ajay",
//         age: 23,
//         greet(){
//                 console.log("hello");
//         }
// };

// console.log(ob.greet());

// This, call, apply, bind
// this: class object method
// strict mode v/s  non-strict mode
// Global Object: In window it is called window, in node js, it is called global;
// But all over the single name is "globalThis" that is use both side, like universal
// 'use strict'

// let a = 20;
// let b = 30;

// console.log(a, b);

// function greet(name1, name2){
//         console.log(name1, name2);
// }

// greet("ajay", "sharma");


// // console.log(window.alert());

// console.log(global);

// console.log(this); //this keyword in global scope: NodeJS(Empty Object), in browser it will pointer global(window)

const obj = {
        name: "ajay",
        age: 23,
}
// // obj.greet();
const user= {
        name: "mohit",
        age: 34
};

// user.greet = obj.greet;

// user.greet();
// obj.greet();
'use strict'

function greet(){
        console.log(`Hii ${this.name}`);
}

// greet.call(user);
// greet.call(obj);

function incrementAge(value, name){
        this.age += value;
        this.name = name;
        console.log(this.age);
        console.log(this.name);
}

// incrementAge.call(user, 6, "rohan");   //this is call 
// incrementAge.apply(user, [6, "rohan"]);   //this is apply: just send values as array and use apply key word
// const value = incrementAge.bind(user, 6, "rohan");
// console.log(value);
// value();    //this is bind just like call and use bind key word and store in a var and call with var name
 
// <-- Concept of Class -->
class Person{
        constructor(name, age){
                this.name = name;
                this.age = age;
        }
}
// in class this keyword make a object like this
// this {name: "ajay", age: 12}
const p = new Person("ajay", 12);
console.log(p.age);

