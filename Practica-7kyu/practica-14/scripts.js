/*Su trabajo es implementar una función que devuelva los últimos Ddígitos de un número entero Ncomo una lista.
Casos especiales:
Si D > (the number of digits of N), devuelve todos los dígitos.
Si D <= 0, devuelve una lista vacía.
Ejemplos:
N = 1
D = 1
result = [1]

N = 1234
D = 2
result = [3, 4]

N = 637547
D = 6
result = [6, 3, 7, 5, 4, 7]
*/

    const lastDigit = (n, d) => {
        return d <= 0 ? [] : n.toString().split("").map((item)=>parseInt(item)).slice(-d)  
        }

console.log(lastDigit(1,1));
console.log(lastDigit(123767,4));
console.log(lastDigit(0,1));
console.log(lastDigit(34625647867585,10));


