//Tipo explicito
let idUser: any;
idUser = 1; // <-- Number
idUser = "1"; // <-- String

console.log("idUser", idUser);

//Inferido
let otherId;
(otherId = 1), (otherId = "1");
console.log("otherId", otherId);

let surprise: any = "hello typescrypt";
// Si se usa de esta maner podria ser un riesgo porque el valor podria variar y se perderia el resultado esperado en las lineas de abajo
//surprise.sayHello(); Error typescript no identifica la funcion por el tipo de variable
const res = surprise.substring(6); //Error - Riesgo
console.log("res", res); //Error - Riesgo
