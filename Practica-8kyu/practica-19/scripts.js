// Cree una función que devuelva el valor multiplicado por 50 y aumentado por 6.
//  Si el valor ingresado es una cadena, debe devolver "Error".

const problem = (x) => {
    return typeof x === 'string'   ? "Error" : x * 50 + 6 
  
    }

    console.log(problem("hello"));
    console.log(problem(1));
    console.log(problem(5));
    console.log(problem(0));
