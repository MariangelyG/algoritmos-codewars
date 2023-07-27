/*Tarea
Implemente una función que acepte 2 argumentos: stringy separator.

El algoritmo esperado: dividir string en palabras por espacios, dividir cada palabra en caracteres separados y 
unirlos nuevamente con el especificado separator, unir todas las "palabras" resultantes nuevamente en una oración con espacios.

Por ejemplo:

splitAndMerge("My name is John", " ")  ==  "M y n a m e i s J o h n"
splitAndMerge("My name is John", "-")  ==  "M-y n-a-m-e i-s J-o-h-n"
splitAndMerge("Hello World!", ".")     ==  "H.e.l.l.o W.o.r.l.d.!"
splitAndMerge("Hello World!", ",")     ==  "H,e,l,l,o W,o,r,l,d,!"*/

const splitAndMerge = (string, separator)=>  {
    return string.split(" ").map((item) => item.split("").join(separator)).join(" ")
  }

  console.log(splitAndMerge("My name is John"," "));
  console.log(splitAndMerge("My name is John","-"));
  console.log(splitAndMerge("Hello World!","."));
  console.log(splitAndMerge("Hello World!",","));
  