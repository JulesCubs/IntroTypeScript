"use strict";
console.log("Hola Julian, aprende Typescript");
//Number
//Explicito
let phone;
phone = 1;
phone = 1234567;
// phone = "hola"; <-- Error no coincide tipo de dato
//Inferido
let phoneNumber = 7894651;
phoneNumber = 258;
// phoneNumber = true; <-- Error no coincide tipo de dato
let hex = 0xf00d; //se inicia con 0x
let binary = 0b1010; //se inicia con 0b
let octal = 0o744; //se inicia con 0o
//Boolean
//Explicito
let isPro;
isPro = true;
//isPro = 1; <-- Error por tipo de dato
//Inferido
let isUserPro = false;
isUserPro = true;
//isUserPro = "Hola"; <-- Error por tipo de dato
//String
let userName = "juliancubs";
userName = "Julian";
//isserName = 789; <-- Error por tipo de dato
//Template String
//Uso de back-tick `
let userInfo;
userInfo = `esta es una prueba
de template string
    User Info:  456789
    User Name: ${userName}
    phone: ${phone}
    isPro: ${isPro}
`;
console.log("userInfo", userInfo);
