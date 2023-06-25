// Cree una función que tome un número entero como argumento y regrese "Even"para números pares o "Odd"para números impares.

const evenOrOdd = (number) => {

    return number % 2 === 0 ? "Even" : "Odd";

  }

  console.log(evenOrOdd(2));
  console.log(evenOrOdd(7));
  console.log(evenOrOdd(-42));
  console.log(evenOrOdd(-7));
  console.log(evenOrOdd(0));