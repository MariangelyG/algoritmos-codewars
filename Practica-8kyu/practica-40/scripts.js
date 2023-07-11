/*Bucle inacabado: corrección de errores n.º 1
¡Oh, no, Timmy ha creado un bucle infinito! ¡Ayuda a Timmy a encontrar y corregir el error en su ciclo for incompleto!*/

const createArray = (number) => {
  let newArray = [];
    for(let i = 1; i <= number; i++){
      newArray.push(i);
    }
    return newArray;
  }
    


  console.log(createArray(1));
  console.log(createArray(2))
  console.log(createArray(3))
  console.log(createArray(4))
  console.log(createArray(5))
  
