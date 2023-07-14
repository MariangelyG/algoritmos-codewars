/*Compruebe si una cadena tiene la misma cantidad de 'x' y 'o'.
 El método debe devolver un valor booleano y no distinguir entre mayúsculas y minúsculas. 
 La cadena puede contener cualquier carácter.

Ejemplos de entrada/salida:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false*/

        const XO = (str) => {
            let palabra = str.toUpperCase();
            return palabra.split("O").length == palabra.split("X").length

        }

    console.log(XO('xo'));
    console.log(XO('xxOo'));
    console.log(XO('xxxm'));
    console.log(XO('Oo'));
    console.log(XO('ooom'));

