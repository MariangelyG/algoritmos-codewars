/* Dada una matriz, encuentre los duplicados en esa matriz y devuelva una nueva matriz de esos duplicados. 
Los elementos de la matriz devuelta deben aparecer en el orden en que aparecieron por primera vez como duplicados.

Nota : los números y sus representaciones de cadenas correspondientes no deben tratarse como duplicados (es decir,"1" != 1).

Ejemplos
[1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]  ==>  [4, 3, 1]
[0, 1, 2, 3, 4, 5]                ==>  [] */

    const duplicates = (arr) => {

        const duplicates =  arr.filter((item, index) => arr.indexOf(item) !== index)
        return [...new Set(duplicates)];

    }
    

    console.log(duplicates([1, 2, 3, 4, 5]));
    console.log(duplicates([]));
    console.log(duplicates(['no', 'duplicates', 'here']));
    console.log(duplicates([1, 2, 3, 4, 3]));
    
