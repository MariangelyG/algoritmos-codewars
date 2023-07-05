/*Asunto
Parece que un plomero matón y su hermano han estado corriendo y dañando tus escenarios nuevamente.

La pipesconexión de las etapas de su nivel debe arreglarse antes de que reciba más quejas.

La lista de tuberías es correcta cuando cada uno pipedespués del primer índice es mayor (+1) que el anterior y no hay duplicados.

Tarea
Dada la lista de numbers, devuelva una lista fija para que los valores aumenten en 1 para cada índice desde el valor mínimo hasta el 
valor máximo (ambos incluidos).

Ejemplo
Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8*/

const pipeFix = (numbers) => {
  let numIni = numbers[0]
  let numEnd = numbers[numbers.length-1]

  if(numIni < [numEnd]){
    for(let i = 0; i < numEnd-numIni+1; i++){
        numbers[i] = numbers[0] +i
  }
  }
  return numbers
     
}

console.log(pipeFix([1,2,3,5,6,8,9]));
console.log(pipeFix([1,2,3,12]));
console.log(pipeFix([6,9]));
console.log(pipeFix([-1,4]));
console.log(pipeFix([1,2,3]));


// assert.deepEqual(,[1,2,3,4,5,6,7,8,9]);
//     assert.deepEqual(pipeFix([]),[1,2,3,4,5,6,7,8,9,10,11,12]);
//     assert.deepEqual(pipeFix([]),[6,7,8,9]);
//     assert.deepEqual(pipeFix([]),[-1,0,1,2,3,4]);
//     assert.deepEqual(pipeFix([]),[1,2,3]);


