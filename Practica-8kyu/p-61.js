/*En este sencillo ejercicio, construirá un programa que toma un valor, integer y devuelve una lista de sus múltiplos hasta otro valor, limit .
 Si limites un múltiplo de integer, también debe incluirse. Solo se pasarán enteros positivos a la función, que no consistan en 0.
  El límite siempre será mayor que la base.

Por ejemplo, si los parámetros pasados ​​son (2, 6), la función debería regresar [2, 4, 6]como 2, 4 y 6 son los múltiplos de 2 hasta 6.*/

    const findMultiples = (integer, limit)=> {
    let multiplos = []
    for(let i= integer; i <= limit; i += integer){
        multiplos.push(i)
    }return multiplos
    }
  
  console.log(findMultiples(5, 25));
  console.log(findMultiples(1, 2));
  console.log( findMultiples(5, 7));
  console.log(findMultiples(4, 27));
  console.log(findMultiples(11, 54));
  
