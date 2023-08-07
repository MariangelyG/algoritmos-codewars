/*Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor en forma de matriz.

Ejemplos
toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

toArray({}) ➞ []
notas
Devuelve una matriz vacía si el objeto está vacío.*/


const toArray = (obj) => {
	return Object.entries(obj)
}

console.log(toArray({ a: 1, b: 2 }));
console.log(toArray({ foo: 33, bar: 45, baz: 67 }));
console.log(toArray({ shrimp: 15, tots: 12 }));
console.log(toArray({}));



