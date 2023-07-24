/*Cree una función nota Final, que calcule la nota final de un estudiante en función de dos parámetros: 
una nota para el examen y una cantidad de proyectos completados.

Esta función debe tomar dos argumentos: examen - calificación del examen (de 0 a 100); proyectos - 
número de proyectos completados (de 0 en adelante);

Esta función debería devolver un número (calificación final). Hay cuatro tipos de calificaciones finales:

100, si la calificación del examen es superior a 90 o si el número de proyectos terminados es superior a 10.
90, si la calificación del examen es superior a 75 y si el número de proyectos completados es mínimo 5.
75, si la calificación del examen es superior a 50 y si el número de proyectos completados es mínimo 2.
0, en otros casos
Ejemplos ( Entradas --> Salida ):

100, 12 --> 100
99, 0 --> 100
10, 15 --> 100

85, 5 --> 90

55, 3 --> 75

55, 0 --> 0
20, 2 --> 0
*Utiliza Operadores Lógicos y de Comparación.*/

const finalGrade =(exam, projects)=> {
   if(exam > 90 || projects > 10){
        return 100
   }else if(exam > 75 && projects >= 5){
         return 90
  }else if(exam > 50 && projects >= 2){
    return 75
  }else {
    return 0
  }
}
  console.log(finalGrade(100, 12));
  console.log(finalGrade(85, 5));
  
