// Te van a dar una palabra. Su trabajo es devolver el carácter medio de la palabra. 
// Si la longitud de la palabra es impar, devuelve el carácter del medio. Si la longitud de la palabra es par, devuelve los 2 caracteres del medio.

function getMiddle(str) {
    const position = Math.round(str.length / 2) -1
      if(str.length % 2 == 0) {
       return str.charAt(position) + str.charAt(position + 1)
       }
      if(str.length % 2 != 0) {
       return str.charAt(position)
      }
     }
  
  console.log(getMiddle("test"));
  console.log(getMiddle("testing"));
  