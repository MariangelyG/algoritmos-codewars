/*Escriba la función bmi que calcula el índice de masa corporal (bmi = peso / altura 2 ).

si bmi <= 18.5 devuelve "Bajo peso"

si bmi <= 25.0 devuelve "Normal"

si bmi <= 30.0 devuelve "Sobrepeso"

si bmi > 30 devolver "Obeso"*/


const bmi = (weight, height) =>  { 
    if(weight/ (height* height) <= 18.5){
      return "Underweight";
    }else if(weight / (height* height) <= 25.0){
       return "Normal";
    }else if(weight / (height* height) <= 30.0){
      return "Overweight";
  }else if(weight / (height*height) > 30){
      return "Obese";
   }
  };

  console.log(bmi(80, 1.80));
  

