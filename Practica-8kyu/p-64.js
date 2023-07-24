/*En esta sencilla tarea se te da un número y tienes que hacerlo negativo. ¿Pero tal vez el número ya es negativo?

Ejemplos
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
notas
El número ya puede ser negativo, en cuyo caso no se requiere ningún cambio.
El cero (0) no se comprueba para ningún signo específico. Los ceros negativos no tienen sentido matemático.*/

    const makeNegative = (num) => {
        return -Math.abs(num)
    }


console.log(makeNegative(42));

