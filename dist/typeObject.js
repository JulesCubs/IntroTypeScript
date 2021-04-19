"use strict";
//Object
let user;
user = {}; //object
user = {
    id: 1,
    userName: "chato",
    firstName: "Julian",
    isPro: true,
};
console.log("user", user);
//console.log("user", user.userName); <-- Error por diferencia de Object vs object
// Object vs object (clase JS vs tipo ts)
const myObj = {
    id: 1,
    userName: "chato",
    firstName: "Julian",
    isPro: true,
};
console.log("user", myObj.userName);
const isInstance = myObj instanceof Object; //clase Object JavaScript
console.log("isInstance", isInstance);
console.log("user", myObj.userName);
