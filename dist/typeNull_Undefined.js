"use strict";
//Null
//Explicita
let nullVariable;
nullVariable = null;
//nullVariable = 1; <-- Error por tipo de dato
let otherVariable = null;
otherVariable = "test";
console.log("nullVariable", nullVariable);
console.log("otherVariable", otherVariable);
//Undefined
let undefinedVariable = undefined;
// undefinedVariable = "Hola";  <-- Error por tipo de dato
let otherUndefined = undefined; //Tanto null y undefined se pueden considerar tatno tipo como valor
otherUndefined = 1;
console.log("undefinedVariable", undefinedVariable);
console.log("otherUndefined", otherUndefined);
//Null y undefined como subtipos
let albumName;
// --strictNullChecks se habilita en tsconfig.json con valor true para generar un tipado mas estricto
// albumName = null;
// albumName = undefined; <-- Error porque podria generar falla
