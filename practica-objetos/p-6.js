/*Algoritmo para determinar si un objeto es vacío (no tiene propiedades):
Ejemplo:
Entrada: {}
Salida: true*/

const object = {}

const objetoVacio = (obj) => {
    return Object.entries(object).length === 0
}

console.log(objetoVacio(object));
