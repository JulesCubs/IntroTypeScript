// Funciones
//Creacion de fotografias
//Definir tipos para parametros

type SquareSize = "100x100" | "500x500" | "1000x1000";

//
function createPicture(title: string, date: string, size: SquareSize) {
	console.log("Create Picture using", title, date, size);
}

createPicture("PicNic", "2021 - 04 - 10", "500x500");
//createPicture("Trip", "2010 - 04 - 10"); <--- Error porque le faltan parametros

//Parametros opcionales
function createPicture2(title?: string, date?: string, size?: SquareSize) {
	console.log("Create Picture using", title, date, size);
}

createPicture2("Trip", "2010 - 04 - 10");
createPicture("Trip");
createPicture();

//Flat Array Functions
let createPic = (title: string, date: string, size: SquareSize): object => {
	// return {
	//     title: title,
	//     date: date,
	//     size: size
	// };
	return { title, date, size };
};

const picture = createPic("Session", "2020-03-01", "100x100");
console.log("picture", picture);
