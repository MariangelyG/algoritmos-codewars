/*Acabas de regresar a casa y encontrar que tu mansión ha sido robada! Dado un objeto de los elementos robados, 
devolver el monto total del robo (número). Si no robaron nada, devuelva la cadena "Lucky you!".

Ejemplos
const stolenItems = {
  tv: 30,
  skate: 20,
  stereo: 50,
} ➞ 100

const stolenItems = {
  painting: 20000,
} ➞ 20000

const stolenItems = {} ➞ "Lucky you!"*/


const calculateLosses = (obj) => {
    let vacia = "Lucky you!"
	  let values = Object.values(obj)
    let sumaPerdida = values.reduce((acc, item) => acc + item, 0)
    return sumaPerdida > 0  ? sumaPerdida : vacia
   
}


console.log(calculateLosses({tv: 30,skate: 20,stereo: 50,}));
console.log(calculateLosses({ring: 30000,painting: 20000,bust: 1,}));
console.log(calculateLosses({}));

