/*Se le darán dos matrices extremadamente similares, pero exactamente uno de los elementos de una matriz se valorará ligeramente 
más alto que su contraparte (lo que significa que al evaluar el valor > el otro valor devolverá true).

Cree una función que devuelva si la primera matriz es ligeramente superior a la de la segunda.

Ejemplos
isFirstSuperior([1, 2, 4], [1, 2, 3]) ➞ true
// The pair of items at each index are compared in turn.
// 1 from the first array is the same as 1 from the second array.
// 2 is the same as 2.
// However, 4 is greater than 3, so first array is superior.

isFirstSuperior(["a", "d", "c"], ["a", "b", "c"]) ➞ true

isFirstSuperior(["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"]) ➞ true

isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4]) ➞ false

isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"]) ➞ false*/

const isFirstSuperior = (arr1, arr2) => arr1 > arr2;

console.log(isFirstSuperior([1, 2, 3, 4], [1, 2, 3, 3])); //true
console.log(isFirstSuperior(["a", "b", "c"], ["a", "d", "c"])); //false
console.log(isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"])); //false
console.log(isFirstSuperior([true, 10, "zebra"], [true, 10, "ant"])); //true