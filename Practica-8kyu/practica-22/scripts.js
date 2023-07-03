/*Haga una función que reciba la edad y devuelva lo que beben.
Normas:
Niños menores de 14 años.
Adolescentes menores de 18 años.
Jóvenes menores de 21 años.
Los adultos tienen 21 o más.
Ejemplos: (Entrada --> Salida)
13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
20 --> "drink beer"
30 --> "drink whisky"*/

   const peopleWithAgeDrink = (old) => {
   
      if(old < 14){
         return "drink toddy";
      }else if(old < 18){
         return "drink coke";
      }else if(old < 21){
         return "drink beer";
      }else if(old => 21){
         return "drink whisky";
      }
   };
      

  console.log((peopleWithAgeDrink(13)));
  console.log((peopleWithAgeDrink(18)));
  console.log((peopleWithAgeDrink(21)));
  console.log((peopleWithAgeDrink(22)));
