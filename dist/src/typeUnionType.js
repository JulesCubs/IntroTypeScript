"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Si una variable llega con tipos diferentes
let idUser;
idUser = 10;
idUser = "10";
//Buscar userName dado un id
function getUserNameById(id) {
    //Logica de negocio
    return "Julian Cubillos";
}
getUserNameById(20);
getUserNameById("20");
let idUsers;
idUsers = 10;
idUsers = "10";
//Buscar userName dado un id
function getUserNameByIds(id) {
    //Logica de negocio
    return "Julian Cubillos";
}
getUserNameByIds(20);
getUserNameByIds("20");
//let smallPicture: SquareSize = '200x200';  <-- Error porque no hay esta de acuerdo a los valores de los datos
let smallPicture = "100x100";
let mediumPicture = "500x500";
