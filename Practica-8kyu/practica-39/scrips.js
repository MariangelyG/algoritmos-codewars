/*Dada una matriz no vacía de enteros, devuelva el resultado de multiplicar los valores en orden. Ejemplo:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24*/

const grow = (x) => {
let num = x.reduce((acc, item)=> acc * item)
    return num
}



console.log(grow([1, 2, 3]));
console.log(grow([4, 1, 1, 1, 4]));
console.log(grow([2, 2, 2, 2, 2, 2]));

      
