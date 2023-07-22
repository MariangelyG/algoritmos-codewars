/*Dada una serie de fichas de Scrabble, cree una función que genere la puntuación máxima posible que un jugador puede lograr al sumar el 
número total de puntos para todas las fichas en su mano. Cada mano contiene 7 fichas de Scrabble.

Aquí hay una mano de ejemplo:

[
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 }
]
La puntuación máxima de los jugadores al jugar todas estas fichas sería 1 + 5 + 10 + 8 + 2 + 1 + 1, o 28.*/

const  maximumScore = (tileHand) => {
   return tileHand.map((element) => element.score).reduce((acc,item) => acc + item)
}

console.log(maximumScore([{tile: 'N', score: 1}, {tile: 'K', score: 5},  {tile: 'Z', score: 10}, {tile: 'X', score: 8}, {tile: 'D', score: 2}, {tile: 'A', score: 1}, {tile: 'E', score: 1}]));
console.log(maximumScore[{tile: 'B', score: 2}, {tile: 'V', score: 4},  {tile: 'F', score: 4}, {tile: 'U', score: 1}, {tile: 'D', score: 2}, {tile: 'O', score: 1}, {tile: 'U', score: 1}]);
console.log(maximumScore[{tile: 'M', score: 3}, {tile: 'Q', score: 10},  {tile: 'O', score: 1}, {tile: 'E', score: 1}, {tile: 'E', score: 1}, {tile: 'I', score: 1}, {tile: 'A', score: 1}]);
console.log(maximumScore([{tile: 'A', score: 1}, {tile: 'E', score: 1},  {tile: 'O', score: 1}, {tile: 'E', score: 1}, {tile: 'E', score: 1}, {tile: 'I', score: 1}, {tile: 'A', score: 1}]));
