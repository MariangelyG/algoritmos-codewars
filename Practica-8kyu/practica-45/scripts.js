/*Te dan el length y width de un polígono de 4 lados. El polígono puede ser un rectángulo o un cuadrado.
Si es un cuadrado, devuelve su área. Si es un rectángulo, devuelve su perímetro.

Ejemplo (Entrada1, Entrada2 --> Salida):

6, 10 --> 32
3, 3 --> 9
Nota: para los propósitos de este kata, asumirás que es un cuadrado si sus length y width son iguales, de lo contrario, es un rectángulo.*/

const areaOrPerimeter = (l , w) => {
return l === w ? l * w : 2 * l + 2 * w
};

console.log(areaOrPerimeter(3,  3));
console.log(areaOrPerimeter(6,  10));