/*Escriba una función que verifique si una cadena dada (insensible a mayúsculas y minúsculas) 
es un palíndromo . Un palíndromo es una palabra, número, frase u otra secuencia de símbolos que se lee 
igual hacia atrás que hacia adelante, como señora o coche de carreras, la fecha y hora 21/12/33 12:21,
 y la oración: "Un hombre, un plan, un canal – Panamá".*/

    const isPalindrome = (x)  =>{
        let may = x.toLowerCase()
        return may.split("").reverse().join("") === may
    }

  
  console.log(isPalindrome("a"));
  console.log(isPalindrome("Abba"));
  console.log(isPalindrome("hello"));
  console.log(isPalindrome("Bob"));
  console.log(isPalindrome("Madam"));
  console.log(isPalindrome("AbBa"));
  console.log(isPalindrome(""));
  
//   it("Testing for 'aba'", () => assert.strictEqual(isPalindrome("aba"), true));
//   it("Testing for 'Abba'", () => assert.strictEqual(isPalindrome("Abba"), true));
//   it("Testing for 'hello'", () => assert.strictEqual(isPalindrome("hello"), false));
//   it("Testing for 'Bob'", () => assert.strictEqual(isPalindrome("Bob"), true));
//   it("Testing for 'Madam'", () => assert.strictEqual(isPalindrome("Madam"), true));
//   it("Testing for 'AbBa'", () => assert.strictEqual(isPalindrome("AbBa"), true));
//   it("Testing for ''", () => assert.strictEqual(isPalindrome(""), true));