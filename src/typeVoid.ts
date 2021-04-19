//Void
//Explicito
function showInfo(user: any): any {
	console.log("User Info", user.id, user.userName, user.firstName);
}

//Inferido
function showFormattedInfo(user: any) {
	console.log(
		"User Info",
		`
        id: ${user.id}
        username: ${user.userName}
        firstname: ${user.firstName}
    `
	);
}

showInfo({ id: 1, userName: "Jules", firstName: "Julian" });
showFormattedInfo({ id: 1, userName: "Jules", firstName: "Julian" });

//tipo Void como tipo de dato en una variable
let unusable: void;
//void puede tomar el valor de null o undefined
//unusable = null;
//unusable = undefined;

//Never
//Inferido
function handleError(code: number, message: string): never {
	//Process you code here
	//Generate a message
	throw new Error(`${message}. Code: ${code}`);
}

try {
	handleError(404, "Not Found");
} catch (error) {}

// function sumNumbers(limit: number): never {
// 	let sum = 0;
// 	while (true) {
// 		sum++;
// 	}
// }

// sumNumbers(10);

//ciclo infinito
