// Escriba una función que acepte un número entero n y una cadena s como parámetros, y devuelva una cadena de veces s repetidas exactamente .n

const repeatStr = (n, s)=>  {

    return s.repeat(n);
  }

  console.log(repeatStr(3, "*"));
  console.log(repeatStr(5, "#"));
  console.log(repeatStr(2, "ha "));
  