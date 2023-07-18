/*Algoritmo para clonar un objeto sin modificar el objeto original:
Ejemplo:
Entrada: {nombre: "Juan", edad: 30}
Salida: {nombre: "Juan", edad: 30}*/

const object =  {
    nombre: "Juan", 
    edad: 30,
};


const clonarObjeto = (obj) => {
  let copia = { ...obj, estatura: 1.60} 
  return copia
}

console.log(clonarObjeto(object));
