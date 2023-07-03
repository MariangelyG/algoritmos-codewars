/*Dada una matriz de enteros.

Devuelve una matriz, donde el primer elemento es el recuento de números positivos y el segundo elemento es la suma de números negativos.
 0 no es ni positivo ni negativo.

Si la entrada es una matriz vacía o es nula, devuelve una matriz vacía.

Ejemplo
Para la entrada [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], debe volver [10, -65].*/


    const countPositivesSumNegatives =(input) =>{

        if (!input || input.length === 0) {
            return [];
        }
        let numPositive=input.filter(arrNumber=> arrNumber>0)
        let totalQtyPos= numPositive.length
        let sumNumnegative= input.filter(arrNumber=> arrNumber<0)
        resulSum=sumNumnegative.reduce((a, b) => a + b, 0)    
        let result= [totalQtyPos,resulSum]
        return result

    }


  console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
  console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));
  
  