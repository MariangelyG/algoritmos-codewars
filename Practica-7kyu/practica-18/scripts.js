/*Dada una matriz de unos y ceros, convierta el valor binario equivalente en un número entero.
Por ejemplo: [0, 0, 0, 1]se trata como 0001cuál es la representación binaria de 1.
Ejemplos:
Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
Sin embargo, las matrices pueden tener diferentes longitudes, no solo limitadas a 4.*/

    const binaryArrayToNumber = arr => {
      
        return parseInt(arr.join(""), 2);
    }


   
    console.log(binaryArrayToNumber([0,0,0,1]));
    console.log(binaryArrayToNumber([0,0,1,0]));
    console.log(binaryArrayToNumber([1,1,1,1]));
    console.log(binaryArrayToNumber([0,1,1,0]));
    
 