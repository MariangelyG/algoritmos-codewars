/*Escriba una función que verifique si una cadena dada (insensible a mayúsculas y minúsculas) es un palíndromo .
Un palíndromo es una palabra, número, frase u otra secuencia de símbolos que se lee igual hacia atrás que hacia adelante,
como señora o coche de carreras, la fecha y hora 21/12/33 12:21, y la oración: "Un hombre, un plan, un canal – Panamá".*/

const isPalindrome = (x) => {
    let mayMin = x.toLowerCase()
    let palabras = mayMin.split("").reverse().join("")
   return palabras === mayMin ? true : false 
  }

  console.log(isPalindrome("a"));
  console.log(isPalindrome("aba"));
  console.log(isPalindrome("Abba"));
  console.log(isPalindrome("hello"));
  console.log(isPalindrome("Bob"));
  console.log(isPalindrome("Madam"));
  console.log(isPalindrome("AbBa"));
  console.log(isPalindrome(""));

  