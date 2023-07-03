/*Hubo un examen en tu clase y lo pasaste. ¡Felicidades!
Pero eres una persona ambiciosa. Quiere saber si es mejor que el estudiante promedio de su clase.

Recibe una matriz con los puntajes de las pruebas de sus compañeros. ¡Ahora calcule el promedio y compare su puntaje!

¡Regresa Truesi estás mejor, si no False!

Nota:
Sus puntos no están incluidos en la matriz de puntos de su clase. ¡Para calcular el punto promedio, 
puede agregar su punto a la matriz dada!*/

        const betterThanAverage = (classPoints, yourPoints) => {
        let classAverage = classPoints.reduce((acc, item) => acc + item) / classPoints.length;
        return classAverage < yourPoints ? true : false
        }

  
  console.log(betterThanAverage([2, 3], 5));
  console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
  console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9));
  console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50));
  console.log(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21));


