/*Un anagrama es el resultado de reorganizar las letras de una palabra para producir una nueva palabra (ver wikipedia ).
Nota: los anagramas no distinguen entre mayúsculas y minúsculas
Complete la función para devolver truesi los dos argumentos dados son anagramas uno del otro; volver falsede lo contrario.
Ejemplos
"foefet"es un anagrama de"toffee"
"Buckethead"es un anagrama de"DeathCubeK"*/

    const isAnagram = (test, original) => {
    
        return test.toLowerCase().split("").sort().join("") === original.toLowerCase().split("").sort().join("");
    
    }

   console.log(isAnagram("foefet", "toffee"));
   console.log(isAnagram("Buckethead", "DeathCubeK"));
   console.log(isAnagram("Twoo", "WooT"));
   console.log(isAnagram("dumble", "bumble"));
   console.log(isAnagram("ound", "round"));
   console.log(isAnagram("apple", "pale"));
   

   