"use strict";
// Funciones
//Creacion de fotografias
//Definir tipos para parametros
//
function createPicture(title, date, size) {
    console.log("Create Picture using", title, date, size);
}
createPicture("PicNic", "2021 - 04 - 10", "500x500");
//createPicture("Trip", "2010 - 04 - 10"); <--- Error porque le faltan parametros
//Parametros opcionales
function createPicture2(title, date, size) {
    console.log("Create Picture using", title, date, size);
}
createPicture2("Trip", "2010 - 04 - 10");
createPicture("Trip");
createPicture();
//Flat Array Functions
let createPic = (title, date, size) => {
    // return {
    //     title: title,
    //     date: date,
    //     size: size
    // };
    return { title, date, size };
};
const picture = createPic("Session", "2020-03-01", "100x100");
console.log("picture", picture);
