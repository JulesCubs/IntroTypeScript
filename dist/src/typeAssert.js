"use strict";
// <tipo> //Angle Bracket syntax
Object.defineProperty(exports, "__esModule", { value: true });
let userName;
userName = "JulesCubs";
//tenemos una cadena de TS
let message = userName.length > 5 ? `Welcome ${userName}` : "UserName is too short";
console.log("message", message);
let userNameWithId = "JulesCubs 25";
//como Obtener el username?
userName = userNameWithId.substring(0, 10);
console.log("Username only", userName);
userName = "Jul";
//Sintaxis "as"
message = userName.length > 5 ? `Welcome ${userName}` : "UserName is too short";
let helloUser = "hello padre";
userName = helloUser.substring(6);
console.log("userName", userName);
