/*Devuelve el número (recuento) de vocales en la cadena dada.
Consideraremos a, e, i, o, ucomo vocales para este Kata (pero no y).
La cadena de entrada solo constará de letras minúsculas y/o espacios.*/

    const getCount = (str) => {
        const vocales = "aeiou"
        let cantidadDeVocales = 0;
        for ( const letra of str){
            if (vocales.includes(letra.toLowerCase()))
            cantidadDeVocales++
        }
        return cantidadDeVocales
    }


  console.log(getCount("abracadabra"));
  console.log(getCount("celebrando"));
  console.log(getCount("murcielago"));

