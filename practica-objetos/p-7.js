/*Algoritmo para obtener la suma de los valores de todas las propiedades numéricas de un objeto:
Ejemplo:
Entrada: {nombre: "Camiseta", precio: 20.99, cantidad: 5}
Salida: 25.99*/

const object = {nombre: "Camiseta", precio: 20.99, cantidad: 5}

const sumaPropiedades = (obj) => {
   let objToArr = Object.values(obj)
   return objToArr.filter((item) => item >= 0).reduce((acc, item) => acc + item)
   
}

console.log(sumaPropiedades(object));
