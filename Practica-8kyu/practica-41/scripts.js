/*Tarea:
Función completa saleHotdogs/ SaleHotDogs/ sale_hotdogs, la función acepta 1 parámetro: n, n es la cantidad de hotdogs que 
comprará un cliente, diferentes números tienen diferentes precios (consulte la siguiente tabla), 
devuelva cuánto dinero gastará el cliente para comprar esa cantidad de hotdogs.

cantidad de perritos calientes	precio por unidad (centavos)
n < 5	           100
n >= 5 y n < 10	   95
n >= 10	            90
Puede usar if..else o el operador ternario para completarlo.

When you have finished the work, click "Run Tests" to see if your code is working properly.advertencia: rara vez deber%C3%ADas encontrarte usando Numbercomo constructor.

In the end, click "Submit" to submit your code and pass this kata.*/
    

const saleHotdogs =(n) => {
    if(n < 5 ){
        return  n * 100
    }else if (n >= 5 && n < 10){
        return   n * 95  
    }else if (n >= 10){
        return n * 90
    }
    }



  console.log(saleHotdogs(1));
  console.log(saleHotdogs(4));
  console.log(saleHotdogs(5));
  console.log(saleHotdogs(9));
  console.log(saleHotdogs(10));
  console.log(saleHotdogs(100));
    

