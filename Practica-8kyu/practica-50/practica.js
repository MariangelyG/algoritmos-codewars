
/*Dado un array, devolver que palabras son palindrome.
caso de prueba: ["arepeta", "oso", "maracaibo", "agua"]*/

const palindromo = (palabras) =>{
    let esPalindromo = palabras.map((element) => element.split("").reverse().join("") === element)
    return esPalindromo
}

console.log(palindromo(["arepeta", "oso", "maracaibo", "agua"]));


// retornar [ false, true, false, false ]