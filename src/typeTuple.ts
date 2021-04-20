//Tuplas

export {};

//[1, 'user']
let user: [number, string];
user = [1, "JulesCubs"];

console.log("user", user);
console.log("username", user[1]);
console.log("id", user[0]);
console.log("username.length", user[1].length);

//Tuplas con varios valores
// id, userName, isPro
let userInfo: [number, string, boolean];
userInfo = [2, "Cubillos", true];

console.log("userInfo", userInfo);

//Arreglo de Tuplas
let array: [number, string][] = []; //Inicializa el arreglo
array.push([1, "Jules"]);
array.push([2, "David"]);
array.push([3, "Julian"]);

console.log("array", array);

//Uso de funciones Array-Tuplas
// Julian --> Julian001
array[2][1] = array[2][1].concat("001");
console.log("array", array);
