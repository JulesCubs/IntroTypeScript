"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
createPicture2("Trip");
createPicture2();
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
//Tipo de retorno con TypeScript
function handleError(code, message) {
    //Procesamiento del codigo, mensaje, logica
    if (message === "error") {
        throw new Error(`${message}. Code error: ${code}`);
    }
    else {
        return "An error has occurred";
    }
}
try {
    let result = handleError(200, "OK"); //Envia un string
    console.log("result", result);
    result = handleError(400, "error"); //Envia un valor never o un valor no valido
    console.log("result", result);
}
catch (error) {
    console.error("Atrape un error");
}
