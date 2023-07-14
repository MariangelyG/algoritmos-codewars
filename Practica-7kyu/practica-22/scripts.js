/*¡Kevin está notando que se le acabó el espacio! Escriba una función que elimine los espacios de los valores 
y devuelva una matriz que muestre la disminución del espacio.
Por ejemplo, ejecutar esta función en la matriz ['i', 'have','no','space']produciría['i','ihave','ihaveno','ihavenospace']*/



 const spacey = (a) => {
    for(let i = 1 ; i < a.length; i++)
    a[i] = a[i-1] + a[i];
    return a;

}



console.log(spacey(['kevin', 'has','no','space']));
console.log(spacey(['this','cheese','has','no','holes']));

