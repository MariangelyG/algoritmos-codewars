// Es el final del año académico, momento fatídico de tu informe escolar.
//  Los promedios deben ser calculados. Todos los estudiantes vienen a ti y te suplican que les calcules el promedio.
//  Fácil ! Solo necesitas escribir un guión.
// Devuelve el promedio de la matriz dada redondeado hacia abajo a su entero más cercano.
// La matriz nunca estará vacía.

const getAverage = (marks) => {

    let Average = marks.reduce((acc, item) => acc + item) / marks.length;
    return Math.floor(Average)
  }


  console.log(getAverage([2,2,2,2]));
  console.log(getAverage([1,2,3,4,5,]));
  console.log(getAverage([1,1,1,1,1,1,1,2]));

