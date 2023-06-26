// Complete la función que convierte un número binario (dado como una cadena) en un número decimal.

const binToDec = (bin) => {
    return  parseInt(bin, 2)

}


console.log(binToDec( [ ["1"]]))
console.log(binToDec( [ ["0"] ]))
console.log(binToDec( [ ["1001001"] ]))
console.log(binToDec( [ ["1001101"] ]))