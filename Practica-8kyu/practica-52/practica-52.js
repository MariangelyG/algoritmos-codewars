/*Don Drumphet vive en un bonito barrio, pero uno de sus vecinos ha empezado a alquilar su casa. 
Don Drumphet quiere construir un muro entre su casa y la de su vecino, e intenta que la asociación de vecinos se lo pague. 
Comienza a solicitar a sus vecinos que hagan una petición para que la asociación construya el muro. Desafortunadamente para Don Drumphet, 
no puede leer muy bien, tiene una capacidad de atención muy limitada y solo puede recordar dos letras de cada uno de los nombres de sus vecinos.
 Mientras recolecta firmas, insiste en que sus vecinos sigan truncando sus nombres hasta que queden dos letras y finalmente pueda leerlas.

Su código mostrará el nombre completo del vecino y la versión truncada del nombre como una matriz. 
Si el número de caracteres en el nombre es menor o igual a dos, devolverá una matriz que contiene solo el nombre tal cual"*/

const whoIsPaying = (name) => {
   return name.length <=2 ? [name] : [name,name.slice(0,2)]
  }


  console.log(whoIsPaying("Mexico"));
  console.log(whoIsPaying("Melania"));
  console.log(whoIsPaying("Melissa"));
  console.log(whoIsPaying("Me"));
  console.log(whoIsPaying(""));
  console.log(whoIsPaying("I"));
  
  

//   Test.assertSimilar(,["Mexico", "Me"]);
// Test.assertSimilar(,["Melania", "Me"]);
// Test.assertSimilar(,["Melissa", "Me"]);
// Test.assertSimilar,["Me"]);
// Test.assertSimilar(, [""]);
// Test.assertSimilar(, ["I"]);
