//Union-types
export {};
//Si una variable llega con tipos diferentes
let idUser: number | string;
idUser = 10;
idUser = "10";

//Buscar userName dado un id
function getUserNameById(id: number | string) {
	//Logica de negocio
	return "Julian Cubillos";
}

getUserNameById(20);
getUserNameById("20");

//Alias de tipos: TS

type IdUsers = number | string;
type UserName = string;
let idUsers: IdUsers;
idUsers = 10;
idUsers = "10";

//Buscar userName dado un id
function getUserNameByIds(id: IdUsers): UserName {
	//Logica de negocio
	return "Julian Cubillos";
}

getUserNameByIds(20);
getUserNameByIds("20");

// Tipos Literales
//Ejemplo con tamaños de fotografias definidos 100x100, 500x500 1000x1000
type SquareSize = "100x100" | "500x500" | "1000x1000";
//let smallPicture: SquareSize = '200x200';  <-- Error porque no hay esta de acuerdo a los valores de los datos
let smallPicture: SquareSize = "100x100";
let mediumPicture: SquareSize = "500x500";
