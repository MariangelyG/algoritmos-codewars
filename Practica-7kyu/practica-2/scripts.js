// Escriba una función que tome una matriz de cadenas como argumento y devuelva una matriz ordenada que contenga las mismas cadenas, ordenadas de la más corta a la más larga.
// Por ejemplo, si esta matriz se pasara como argumento:
// ["Telescopes", "Glasses", "Eyes", "Monocles"]
// Su función devolvería la siguiente matriz:
// ["Eyes", "Glasses", "Monocles", "Telescopes"]
// Todas las cadenas en la matriz pasada a su función tendrán diferentes longitudes, por lo que no tendrá que decidir cómo ordenar varias cadenas de la misma longitud.

function sortByLength (array) {
    return array.sort((a, b) => a.length - b.length)
    }