/*Los cajeros automáticos permiten códigos PIN de 4 o 6 dígitos y los códigos PIN no pueden contener nada más que exactamente 4 dígitos
 o exactamente 6 dígitos.

Si a la función se le pasa una cadena de PIN válida, devuelva true, de lo contrario, devuelva false.

Ejemplos ( Entrada --> Salida)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/

    const validatePIN = (pin) =>  { 
        
        let validar = /^(\d{4}|\d{6})$/g
        return  pin == pin.match(validar) ? true : false
      }
 

  console.log(validatePIN("1"));
  console.log(validatePIN("12"));
  console.log(validatePIN("1111"));
  console.log(validatePIN("123456"));
  console.log(validatePIN("1234"));
  