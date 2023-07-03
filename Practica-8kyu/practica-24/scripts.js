/*Dada una cadena de dígitos, debe reemplazar cualquier dígito debajo de 5 con '0' y cualquier dígito 5 y superior con '1'
Devuelve la cadena resultante.

Nota: la entrada nunca será una cadena vacía*/

    const fakeBin = (str) => {
        let underFive = str.replace(/[1234]/gi, 0)
        return underFive.replace(/[56789]/gi, 1)
    }

console.log(fakeBin('45385593107843568'));
console.log(fakeBin('509321967506747'));
console.log(fakeBin('366058562030849490134388085'));

