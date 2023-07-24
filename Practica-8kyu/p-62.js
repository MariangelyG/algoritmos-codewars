/*Tu trabajo
Encuentra la suma de todos los múltiplos de nabajom

Tenga en cuenta
n y m son números naturales (enteros positivos)
m se excluye de los múltiplos
Ejemplos
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"*/

    const sumMul = (n,m) =>{
        let multiplos = []
        for(let i= n; i <= m-1; i += n){
            multiplos.push(i)
        }return n < m ? multiplos.reduce((acc, item) =>  acc+item,0) : "INVALID" 
        }
    


        console.log(sumMul(0,0));
        console.log(sumMul(2,9));
        console.log(sumMul(4,-7));
        