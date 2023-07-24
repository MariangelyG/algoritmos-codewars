/*Cuando se le proporciona una letra, devuelve su posición en el alfabeto.

Entrada :: "a"

Salida :: "Posición del alfabeto: 1"*/

    const position = (letter) => { 
        return "Position of alphabet: "+(letter.charCodeAt(0)-96)
        }

    console.log(position("a"));
    console.log(position("z"));
    console.log(position("e"));
    
    
//     Test.assertEquals(,"Position of alphabet: 1");
// Test.assertEquals(,"Position of alphabet: 26");
// Test.assertEquals(,"Position of alphabet: 5");