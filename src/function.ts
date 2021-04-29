// Funciones
//Creacion de fotografias
//Definir tipos para parametros
export {};

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
createPicture2("Trip");
createPicture2();

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

//Tipo de retorno con TypeScript
function handleError(code: number, message: string): never | string {
	//Procesamiento del codigo, mensaje, logica
	if (message === "error") {
		throw new Error(`${message}. Code error: ${code}`);
	} else {
		return "An error has occurred";
	}
}

try {
	let result = handleError(200, "OK"); //Envia un string
	console.log("result", result);

	result = handleError(400, "error"); //Envia un valor never o un valor no valido
	console.log("result", result);
} catch (error) {
	console.error("Atrape un error");
}
