/*Se le dará una variedad de bebidas, siendo cada bebida un objeto con dos propiedades: nombre y precio. 
Cree una función que tenga la matriz de bebidas como argumento y devuelva los objetos de bebidas ordenados por precio en orden ascendente.

Suponga que es necesario ordenar la siguiente matriz de objetos de bebida:

drinks = [
  {name: "lemonade", price: 50},
  {name: "lime", price: 10}
]
La salida del objeto de bebidas ordenadas será:

Ejemplos
sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]*/

 const drinks = [
    {name: "lemonade", price: 50},
    {name: "lime", price: 10}
  ]

    const bebidasOrdenadas = (arr) =>{
    return arr.sort((a,b) => a.price - b.price)
} 

console.log(bebidasOrdenadas(drinks));
