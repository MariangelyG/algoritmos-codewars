/*Algoritmo para calcular el promedio de los valores de una propiedad de un array de objetos:
Ejemplo:
Entrada: [{nombre: "Camiseta", precio: 20.99}, {nombre: "Pantalón", precio: 35.99}, {nombre: "Zapatos", precio: 49.99}], "precio"
Salida: 35.99*/

const object = [
    { nombre: "Camiseta", precio: 20.99 },
    { nombre: "Pantalón", precio: 35.99 },
    { nombre: "Zapatos", precio: 49.99 },
  ];
  
  const calcularPromedio = (obj, precio) => {
      return obj.reduce((acc, item)=> acc + item.precio, 1) / obj.length
  }
  
  console.log(calcularPromedio(object, "precio"));
