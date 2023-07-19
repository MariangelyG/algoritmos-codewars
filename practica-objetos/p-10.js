/*Algoritmo para obtener un nuevo objeto a partir de la combinación de dos objetos:
Ejemplo:
Entrada: {nombre: "Juan", edad: 30}, {apellido: "Pérez", ciudad: "Madrid"}
Salida: {nombre: "Juan", edad: 30, apellido: "Pérez", ciudad: "Madrid"}*/

const object1 = {nombre: "Juan", edad: 30}
const object2 = {apellido:"Pérez", ciudad:"Madrid"}

   

const objComb = (obj1, obj2) =>{
    return Object.assign(obj1,obj2)
}

console.log(objComb(object1, object2));
