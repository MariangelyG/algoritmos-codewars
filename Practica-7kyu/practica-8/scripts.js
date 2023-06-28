// Dada una lista de enteros, determina si la suma de sus elementos es par o impar.

// Da tu respuesta como una coincidencia de cadenas "odd"o "even".

// Si la matriz de entrada está vacía, considérela como: [0](matriz con cero).

const oddOrEven = (array) => {
    const sum = array.reduce((acc, item) => acc + item, 0)
    return sum % 2 === 0 ? "even" : "odd"

  }
 console.log(oddOrEven([0]));
 console.log(oddOrEven([1]));
 console.log(oddOrEven([]));
 console.log(oddOrEven([0, -1, -5]))
 console.log(oddOrEven([0, -1, -3]))
 console.log(oddOrEven([-1023, 1, -2]));
 



 