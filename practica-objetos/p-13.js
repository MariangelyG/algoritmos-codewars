/*
Crea un array de objetos que representen personas. Cada objeto debe tener propiedades como "nombre", "edad" y "país". 
Luego, utiliza un método para crear un nuevo array con solo las personas mayores de edad y que vivan en un país determinado. 

const people = [ 
{ nombre: "Juan", edad: 27, país: "México" }, 
{ nombre: "María", edad: 18, país: "Argentina" }, 
{ nombre: "Pedro", edad: 32, país: "España" }, 
{ nombre: "Ana", edad: 24, país: "México" } ] "Mexico"

 Ejemplo de salida: [ 
{ nombre: "Juan", edad: 27, país: "México" },  
{ nombre: "Ana", edad: 24, país: "México" } ]*/

const people = [ 
    { nombre: "Juan", edad: 27, país: "México" }, 
    { nombre: "María", edad: 18, país: "Argentina" }, 
    { nombre: "Pedro", edad: 32, país: "España" }, 
    { nombre: "Ana", edad: 24, país: "México" } ]


 const personasMayores = (arr, pais) =>{
    return arr.filter((item) => item.edad > 18 && item.país === "México")
 }   

 console.log(personasMayores(people));
 