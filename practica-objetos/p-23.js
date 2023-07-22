/*Serie de robos (10): Calcular diferencia
El chico del seguro vuelve a llamar y se disculpa. Encontraron otra póliza hecha por su cónyuge, pero esta está limitada a cubrir un máximo determinado en pérdidas 
(por ejemplo, 50.000 €). Le envías una factura a tu cónyuge por la diferencia que perdiste.

Dado un objeto de los objetos sustraídos y un límite, devolver la diferencia entre el valor total de esos objetos y el límite de la póliza.

Ejemplos
calculateDifference({ "baseball bat": 20 }, 5) ➞ 15

calculateDifference({ skate: 10, painting: 20 }, 19) ➞ 11

calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400) ➞ 1*/


	
const calculateDifference = (obj, limit) => {
    return Object.values(obj).reduce((acc, item) => acc + item)-limit
  
}

console.log(calculateDifference({ "baseball bat": 20 }, 5));
console.log(calculateDifference({ skate: 10, painting: 20 }, 19));
console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400));





	
