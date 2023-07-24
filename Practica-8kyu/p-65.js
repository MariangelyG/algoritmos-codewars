/*¿La cadena está en mayúsculas?
Tarea
Cree un método para ver si la cadena está TODO EN MAYÚSCULAS.

Ejemplos (entrada -> salida)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True
En este Kata, se dice que una cadena está en MAYÚSCULAS cuando no contiene ninguna letra minúscula, 
por lo que cualquier cadena que no contenga ninguna letra se considera trivialmente que está en MAYÚSCULAS.*/


String.prototype.isUpperCase = function() {
    return String(this) === this.toUpperCase();
  }


  console.log( 'c'.isUpperCase());
  console.log('C'.isUpperCase());
  
