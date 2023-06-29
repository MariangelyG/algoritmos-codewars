 /* Su tarea es muy simple. Simplemente escriba una función que tome una cadena de entrada de letras minúsculas y devuelva true/ false
dependiendo de si la cadena está en orden alfabético o no.

 Ejemplos (entrada -> salida)
"kata" -> falso ('a' viene después de 'k')
"hormiga" -> verdadero (todos los caracteres están en orden alfabético)*/

  const alphabetic = (s) => {

    return s.split("").sort().join("") === s;

    }

  console.log(alphabetic("asd"));
  console.log(alphabetic("codewars"));
  console.log(alphabetic("door"));
  console.log(alphabetic("cell"));
  console.log(alphabetic("z"))
  

 
