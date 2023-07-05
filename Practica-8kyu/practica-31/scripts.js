/*Los números que terminan en ceros son aburridos.

Pueden ser divertidos en tu mundo, pero no aquí.

Deshazte de ellos. Solo los finales.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Cero solo está bien, no te preocupes por eso. pobre tipo de todos modos*/

    const noBoringZeros = (n) => {
        while ( n % 10 === 0 && n !== 0)
        n = n / 10
        return n
    }

  


    console.log(noBoringZeros(1450));
    console.log(noBoringZeros(960000));
    console.log(noBoringZeros(1050));
    console.log(noBoringZeros(-1050));
    console.log(noBoringZeros(-105));
    console.log(noBoringZeros(0));



//   assert.strictEqual(, 145)
//     assert.strictEqual(noBoringZeros(), 96)
//     assert.strictEqual(noBoringZeros(), 105)
//    assert.strictEqual(noBoringZeros(), -105)
//     assert.strictEqual(noBoringZeros(), -105)
//     assert.strictEqual(noBoringZeros(), 0)