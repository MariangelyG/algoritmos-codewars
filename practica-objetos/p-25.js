/*Dado un objeto de cuántas páginas más puede imprimir cada color de tinta, genere la cantidad máxima de páginas que la impresora 
puede imprimir antes de que se agote cualquiera de los colores.
Ejemplos
inkLevels({
  "cyan": 23,
  "magenta": 12,
  "yellow": 10
}) ➞ 10

inkLevels({
  "cyan": 432,
  "magenta": 543,
  "yellow": 777
}) ➞ 432

inkLevels({
  "cyan": 700,
  "magenta": 700,
  "yellow": 0
}) ➞ 0

*/

const inkLevels = (inks) => {
let obj = Object.values(inks)
return Math.min(...obj)
}

console.log(inkLevels({
	"cyan": 23,
	"magenta": 12,
	"yellow": 10
}), 10);


console.log(inkLevels({
	"cyan": 432,
	"magenta": 543,
	"yellow": 777
}), 432);


console.log(inkLevels({
	"cyan": 700,
	"magenta": 700,
	"yellow": 0
}), 0);






