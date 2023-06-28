// Complete la solución para que devuelva verdadero si el primer argumento (cadena) 
// pasado termina con el segundo argumento (también una cadena).

  const solution = (str, ending) => {
    return str.endsWith(ending, str.length)
    }

  console.log(solution('abcde', 'cde'));
  console.log(solution('abcde', 'abc'));
  
