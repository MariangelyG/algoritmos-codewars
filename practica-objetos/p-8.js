/*Algoritmo para convertir un objeto en un array de objetos con pares de clave-valor:
Ejemplo:
Entrada: {nombre: "Juan", edad: 30}
Salida: [{clave: "nombre", valor: "Juan"}, {clave: "edad", valor: 30}]*/

const object = {nombre: "Juan", edad: 30}

const convertirObjArr = (obj) =>{
    return Object.entries(obj).map(([clave, valor]) => {    
    return {
        key: clave , value: valor 
    }   
})
}


console.log(convertirObjArr(object));
