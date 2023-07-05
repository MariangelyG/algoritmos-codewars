/*Operador lógico exclusivo "o" (xor)
Descripción general
En algunos lenguajes de secuencias de comandos como PHP, existe un operador lógico (por ejemplo &&, ||, and, or, , etc.) llamado 
"O exclusivo" (de ahí el nombre de este Kata). El exclusivo or evalúa dos booleanos. Luego devuelve truesi exactamente una de las dos 
expresiones es verdadera , falsede lo contrario. Por ejemplo:

false xor false == false // since both are false
true xor false == true // exactly one of the two expressions are true
false xor true == true // exactly one of the two expressions are true
true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.
Tarea
Como no podemos definir palabras clave en Javascript (bueno, al menos no sé cómo hacerlo), 
tu tarea es definir una función xor(a, b)donde a y b son las dos expresiones a evaluar. 
Su xor función debe tener el comportamiento descrito anteriormente, regresando true
si exactamente una de las dos expresiones se evalúa como verdadera , false de lo contrario.*/
    

    
    const xor = (a, b) => {
        // return a === b ? false : true}
        if( a == b){
            return false
        } else if (a != b){
            return true
        } else if( a === b){
            return false
        }
}
    

      console.log(xor(false, false));
      console.log(xor(true, false));
      console.log(xor(false, true));
      console.log(xor(true, true));
      console.log(xor(true, true));
