/*rea un array de objetos que representen estudiantes. Cada objeto debe tener propiedades como "nombre", "promedio" y "asistencia".
 Luego, utiliza un método para crear un nuevo array con solo los estudiantes que tengan un promedio mayor a 8 y una asistencia mayor al 80%. 

Ejemplo de entrada: 
const students =[ { nombre: "Juan", promedio: 9.5, asistencia: 90 }, 
{ nombre: "María", promedio: 7.8, asistencia: 85 }, { nombre: "Pedro", promedio: 8.2, asistencia: 75 }, 
{ nombre: "Ana", promedio: 9.0, asistencia: 95 } ] 

 Ejemplo de salida: 
[{ nombre: "Juan", promedio: 9.5, asistencia: 90 },
{ nombre: "Ana", promedio: 9.0, asistencia: 95 } ]*/

const students =[ 
{ nombre: "Juan", promedio: 9.5, asistencia: 90 }, 
{ nombre: "María", promedio: 7.8, asistencia: 85 }, 
{ nombre: "Pedro", promedio: 8.2, asistencia: 75 }, 
{ nombre: "Ana", promedio: 9.0, asistencia: 95 } ] 

const promedioMayor = (arr) =>{
    return arr.filter((item) => item.promedio > 8 && item.asistencia > 80)
}
 console.log(promedioMayor(students));
 