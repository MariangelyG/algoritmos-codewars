/*Cree una función que determine si un pedido de compra es elegible para envío gratis. 
Un pedido es elegible para envío gratuito si el costo total de los artículos comprados supera los $50.00.

Ejemplos
freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }) ➞ false

freeShipping({ "Flatscreen TV": 399.99 }) ➞ true

freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 }) */


const freeShipping = (order) => {
 let total = Object.values(order).reduce((acc, item) => acc + item)
 return total > 50.00 ? true : false 
}

console.log(freeShipping({'Shampoo' : 5.99, 'Rubber Ducks': 15.99}));
console.log(freeShipping({'Flatscreen TV': 399.99}));
console.log(freeShipping({'Monopoly': 11.99, 'Secret Hitler': 35.99, 'Bananagrams': 13.99}));
console.log(freeShipping({'Scrabble': 12.32, 'Jenga': 5.55, 'Clue': 20.00}));
console.log(freeShipping({'Elephant Plushie': 40.55, 'Octopus Plushie': 20.33, 'Spongebob Plushie': 20.00}));




