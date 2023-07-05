/*Cree una función que devuelva una matriz de enteros de n a 1 donde n>0.

Ejemplo : n=5-->[5,4,3,2,1]*/

const reverseSeq = n => {
    let result = []
 for (let i = n; i > 0; i--) {
      result.push(i)
    }
    return result;
}

  console.log(reverseSeq(5));
  