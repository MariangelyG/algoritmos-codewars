// ANALIZO

// Escriba la función alternateCase que cambia cada letra de la cadena de superior a inferior y de inferior a superior.
//  Por ejemplo: Hola Mundo -> HOLA MUNDO

// RESUELVO 

// Convertir el string en un array
// Validar el estado del estring
// Realizar una condicional del estado del string, si es mayuscula o minuscula. 
// Si el string esta en toLowerCase pasarlo a toUpperCase 
// Si el string esta en toUpperCase pasarlo a toLowerCase

// PROGRAMO


const alternateCase = (s)=>  {
    const arr = s.split("")
     const result =  arr.map((item) => {
         return  item.toLowerCase() === item ? item.toUpperCase() : item.toLowerCase()
      }) 
      return result.join("")
  }


  console.log(alternateCase("abc"));
  console.log(alternateCase("ABC"));
  console.log(alternateCase("Hello World"));

  
