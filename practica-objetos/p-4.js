/*Algoritmo para agregar una propiedad a un objeto si no existe:
Ejemplo:
Entrada: {nombre: "Juan", edad: 30}, "apellido"
Salida: {nombre: "Juan", edad: 30, apellido: null}*/

const object = {nombre: "Juan", edad: 30};


const agregarPropiedad = (obj) =>{
    obj.apellido = null
    return obj
};

console.log(agregarPropiedad(object));
