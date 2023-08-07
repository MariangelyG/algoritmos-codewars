/*Cree una función para verificar si el parámetro dado es un Objeto o no.

Ejemplos
isObject(function add(x,y) {return x + y}) ➞ true

isObject(new RegExp('^[a-zA-Z0-9]+$', 'g')) ➞ true

isObject(null) ➞ false

isObject("") ➞ false
notas
Las entradas pueden ser nulltipos de envoltorios primitivos, fechas.*/

const isObject = (value) => {
	return value instanceof Object
}

console.log(isObject(new Date()));
console.log(isObject("12/12/2011"));
console.log(isObject(null));
console.log(isObject([1,2,3]));
console.log(isObject({}));




