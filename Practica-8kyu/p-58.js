/*Defina una función que elimine los duplicados de una matriz de números no negativos y los devuelva como resultado.

El orden de la secuencia tiene que permanecer igual.*/

const distinct = (a)=> {
    let setSinRepetir = new Set(a)
    let arregloSinRepetidos = Array.from(setSinRepetir)
    return arregloSinRepetidos;
  }


  console.log(distinct([1]));
  console.log(distinct([1,2]));
  console.log(distinct([1,1,2]));
  
  