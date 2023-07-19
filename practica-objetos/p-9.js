/*Algoritmo para obtener el número de propiedades de un objeto:
Ejemplo:
Entrada: {nombre: "Juan", edad: 30, apellido: null}
Salida: 3*/

const object = {nombre: "Juan", edad: 30, apellido: null}

const numPropiedades = (obj) =>{
    return Object.values(obj).length
}

console.log(numPropiedades(object));
