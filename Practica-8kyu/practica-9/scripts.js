// Dada una matriz de enteros, su solución debe encontrar el entero más pequeño.
// Por ejemplo:
// Dada [34, 15, 88, 2]su solución volverá2
// Dada [34, -345, -1, 100]su solución volverá-345
// Puede suponer, a los efectos de este kata, que la matriz proporcionada no estará vacía.

class SmallestIntegerFinder {
    findSmallestInt(args) {
      let min = Math.min(...args) 
          return min 
    }
  }

  console.log(findSmallestInt([78,56,232,12,8]));
  console.log(findSmallestInt([78,56,232,12,18]));
  console.log(findSmallestInt([78,56,232,412,228]));
  console.log(findSmallestInt([78,56,232,12,0]));
  console.log(findSmallestInt([1,56,232,12,8]));
  