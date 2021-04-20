"use strict";
// Array
//[]
//Explicito
let users;
users = ["julian", "david", "cubillos", "ortegon"];
//users = [1, true, 'test']; Error
//Inferido
let otherUsers = ["julian", "david", "cubillos", "ortegon"];
//otherUsers = [1, true, 'test']; <-- Error
//Array<TIPO>
let pictureTitles;
pictureTitles = ["Favorite Sunset", "Vacation Time", "Landscape"];
//Acceso a los valores de un array
console.log("first user", users[0]);
console.log("first title", pictureTitles[0]);
//Propiedades en Array
console.log("users.length", users.length);
//Uso de funciones en Arrays
users.push("aPlatziUser");
users.sort();
console.log("users", users);
