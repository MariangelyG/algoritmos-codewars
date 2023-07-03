/*Complete la solución para que invierta todas las palabras dentro de la cadena pasada.

Las palabras están separadas por exactamente un espacio y no hay espacios iniciales ni finales.

Ejemplo (Entrada --> Salida):

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"*/

    const reverseWords = (str) => {
        let palabras =  str.split(" ")
        return palabras.reverse().join(" ").toString()
        }

  console.log(reverseWords("hello world!"                 ));
  console.log(reverseWords("yoda doesn't speak like this" ));
  console.log(reverseWords("foobar"                       ));
  console.log(reverseWords("kata editor"                  ));
  console.log(reverseWords("row row row your boat"        ));
  console.log(reverseWords(""                             ));
