// En este kata, debe escribir una función que tome una cadena y una letra como entrada y
//  luego devuelva el índice de la segunda aparición de esa letra en la cadena. 
//  Si no hay tal letra en la cadena, entonces la función debería devolver -1. 
//  Si la letra aparece solo una vez en la cadena, también se debe devolver -1.

// Ejemplos:

// secondSymbol('Hello world!!!','l')  --> 3
// secondSymbol('Hello world!!!', 'A') --> -1


    const secondSymbol = (s, symbol) => {
    return  s.indexOf(symbol, s.indexOf(symbol) + 1)
    }

  console.log(secondSymbol('Hello world!!!','l'));
  console.log(secondSymbol('Hello world!!!', 'o'));
  console.log(secondSymbol('Hello world!!!', 'A'));
  console.log(secondSymbol('', 'q'));
  console.log(secondSymbol('Hello', '!'));

  
  
 

  