/*Mejorando Math.round(x)
Javascript tiene un práctico método incorporado Math.round(x)que redondea un número al entero más cercano:

Math.round(3.14); // Returns 3
Math.round(17.43); // 17
Math.round(198.499); // 198
Math.round(200.5); // 201
Math.round(1784.76); // 1785
¡Pero eso a veces no es suficiente! ¿ Y si quisiéramos redondear 3.1415926535a dos decimales? Mientras que algunos lenguajes (como PHP) 
tienen una round()función que admite el redondeo a un número específico de lugares decimales (por ejemplo <?php 
    round(3.1415926535, 4); /* 3.1416 (rounded to 4 d.p. as specified)  ?>, Javascript no lo hace ). 

Tarea
Su tarea es crear un método Math.roundTo(number, precision)que redondee un dato numbera precision decimales.

Puede encontrar Mathútiles los siguientes métodos:

Math.round(x)(por supuesto)
Math.pow(x,y)(devuelve x a la potencia de y - por ejemplo Math.pow(3,4) == 81)*/

    Math.roundTo = function (number, precision) {
        return Number(number.toFixed(precision))

        }


  console.log(Math.roundTo(3.1415926535, 4));
  console.log(Math.roundTo(4, 5));
  console.log(Math.roundTo(4.1235343424, 6));
  console.log(Math.roundTo(3.1415926535, 4));
  console.log(Math.roundTo(5.3035802, 3));
  console.log(Math.roundTo(9.9999, 3));
  