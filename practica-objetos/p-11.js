/*Crea un array de objetos que representen libros. Cada objeto debe tener propiedades como "título", "autor" y "año de publicación". 
Luego, utiliza un método para encontrar el libro más antiguo en el array e imprimir su título y año de publicación en la consola. 

Ejemplo de entrada: const books = [ { título: "1984", autor: "George Orwell", año: 1949 }, { título: "Cien años de soledad",
autor: "Gabriel García Márquez", año: 1967 }, { título: "El viejo y el mar", autor: "Ernest Hemingway", año: 1952 }, 
{ título: "Matar a un ruiseñor", autor: "Harper Lee", año: 1960 } ] 

Ejemplo de salida:  { título: "1984", autor: "George Orwell", año: 1949 } */

    const libros =  [ 
        { título: "1984", autor: "George Orwell", año: 1720 },
        { título: "Cien años de soledad",autor: "Gabriel García Márquez", año: 1520 },
        { título: "El viejo y el mar", autor: "Ernest Hemingway", año: 1952 }, 
        { título: "Matar a un ruiseñor", autor: "Harper Lee", año: 1800 } 
    ] 

    const libroMasAntiguo = (arr) => {
        let añoMasAntiguo = arr.map((item) => item.año)
        let min = Math.min(...añoMasAntiguo)
        return arr.filter((item)=> item.año === min)
    }

    console.log(libroMasAntiguo(libros));




