/*La policía te envía de nuevo la declaración electrónica para que la firmes. 
Esta vez puede firmarlo y, para acelerar la burocracia, intenta firmar también por su cónyuge. 
Desafortunadamente, el documento todavía está protegido contra nuevas entradas...

Este desafío es un poco diferente ya que la función que se te ha asignado ya contiene un código que no debes cambiar ni eliminar. 
Además, no use una declaración de devolución, ya está incluida. Su tarea es, dado un objeto, evitar que se agreguen nuevas propiedades 
a ese objeto, pero aún debería poder cambiar el valor de las propiedades existentes.

Ejemplos
const obj = { yourSignature: "" };

signYourName( obj ) {
  // write your code here
  obj.yourSignature = "Whatever";
  obj.spouseSignature = "Nice Try";
  return obj;

} ➞ { yourSignature: "Whatever" }*/

const obj = {
    yourSignature: ""
}

const signYourName = (obj) => {
    Object.preventExtensions(obj)
    
    obj.yourSignature = "Whatever";
    obj.spouseSignature = "Nice Try"
    return obj;
  }

  console.log(signYourName(obj));
  
