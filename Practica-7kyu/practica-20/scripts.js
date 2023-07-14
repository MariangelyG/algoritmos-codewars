/*Un isograma es una palabra que no tiene letras repetidas, consecutivas o no consecutivas. 
Implemente una función que determine si una cadena que contiene solo letras es un isograma. 
Suponga que la cadena vacía es un isograma. Ignorar mayúsculas y minúsculas.

Ejemplo: (Entrada --> Salida)
"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignorar mayúsculas y minúsculas)
isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false*/

  const isIsogram = (str) => {
      let palabra = str.toLowerCase() 
      for (var i=0; i<str.length; i++) {
          if ( palabra.indexOf(str[i]) !=  palabra.lastIndexOf(str[i]) ) {
            return false; 
          }
        }
      return true; 
    }
  console.log(isIsogram("Dermatoglyphics"));
  console.log(isIsogram("isogram"));
  console.log(isIsogram("aba"));
  console.log(isIsogram("moOse"));
  console.log(isIsogram("isIsogram"));
  console.log(isIsogram(""));


  