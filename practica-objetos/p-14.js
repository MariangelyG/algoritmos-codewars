/*Crea un array de objetos que representen empleados de una empresa. 
Cada objeto debe tener propiedades como "nombre", "edad", "cargo" y "salario".
Luego, utiliza un método para encontrar el empleado con el salario más alto y imprimir su nombre y cargo en la consola. 

Ejemplo de entrada: 
const employees = [ 
{ nombre: "Juan", edad: 27, cargo: "Gerente", salario: 50000 },
{ nombre: "María", edad: 35, cargo: "Analista", salario: 40000 }, 
{ nombre: "Pedro", edad: 32, cargo: "Desarrollador", salario: 45000 },
{ nombre: "Ana", edad: 24, cargo: "Diseñadora", salario: 35000 } ] 

Ejemplo de salida: 
{ nombre: "Juan", edad: 27, cargo: "Gerente", salario: 50000 }*/

    const employees = [ 
        { nombre: "Juan", edad: 27, cargo: "Gerente", salario: 50000 },
        { nombre: "María", edad: 35, cargo: "Analista", salario: 60000 }, 
        { nombre: "Pedro", edad: 32, cargo: "Desarrollador", salario: 45000 },
        { nombre: "Ana", edad: 24, cargo: "Diseñadora", salario: 35000 } ] 

        const salarioMasAlto = (arr) =>{
        let sueldoMayor = arr.map((item) => item.salario)
        let resultadoSueldo = Math.max(...sueldoMayor)
        return arr.filter((item) => item.salario === resultadoSueldo)
        }

console.log(salarioMasAlto(employees));
