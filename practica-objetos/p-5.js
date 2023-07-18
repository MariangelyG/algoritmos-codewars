/*Algoritmo para eliminar una propiedad de un objeto:
Ejemplo:
Entrada: {nombre: "Juan", edad: 30}, "edad"
Salida: {nombre: "Juan"}*/

const object = {nombre: "Juan", edad: 30}

const eliminarPropiedad = (obj) =>{
    delete obj.edad
    return obj
}

console.log(eliminarPropiedad(object));
