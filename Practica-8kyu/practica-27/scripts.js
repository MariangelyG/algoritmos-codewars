/*¿Qué pasa si necesitamos que la longitud de las palabras separadas por un espacio se agregue al final de esa misma palabra y 
se devuelva como una matriz?
Ejemplo (Entrada --> Salida)
"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
Su tarea es escribir una función que tome un String y devuelva un Array/list con la longitud de cada palabra agregada a cada elemento.
Nota: String tendrá al menos un elemento; las palabras siempre estarán separadas por un espacio.*/

  const addLength = (str) => {
    return str.split(' ').map((x)=> x  + " " + x.length)
  }


   console.log(addLength('you will win'));
   console.log(addLength("You need to return an array. Did you log to the console instead?"));
   console.log(addLength('apple ban'));
   