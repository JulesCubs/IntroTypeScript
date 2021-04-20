// <tipo> //Angle Bracket syntax

export {};

let userName: any;
userName = "JulesCubs";

//tenemos una cadena de TS
let message: string = (<string>userName).length > 5 ? `Welcome ${userName}` : "UserName is too short";
console.log("message", message);

let userNameWithId: any = "JulesCubs 25";
//como Obtener el username?
userName = (<string>userNameWithId).substring(0, 10);
console.log("Username only", userName);

userName = "Jul";
//Sintaxis "as"
message = (userName as string).length > 5 ? `Welcome ${userName}` : "UserName is too short";

let helloUser = "hello padre";
userName = (helloUser as string).substring(6);
console.log("userName", userName);
