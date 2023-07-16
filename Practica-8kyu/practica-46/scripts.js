/*Cree una función que acepte una cadena y un solo carácter, y devuelva un número entero de la cantidad de veces que el segundo
argumento se encuentra en el primero.

Si no se pueden encontrar ocurrencias, se debe devolver un recuento de 0.

("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0
str_count("Hello", 'o'); // returns 1
str_count("Hello", 'l'); // returns 2
str_count("", 'z'); // returns 0
notas
El primer argumento puede ser una cadena vacía.
En lenguajes sin tipos de datos de caracteres distintos, el segundo argumento será una cadena de longitud 1*/

const strCount = (str, letter) => {  

   return str.split(letter).length-1
  }

  console.log(strCount('Hello', 'o'));
  console.log(strCount('Hello', 'l'));
  console.log(strCount('',      'z'));
