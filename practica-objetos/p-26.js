/*Dados tres argumentos ⁠, un objeto objde los artículos robados, la mascota namey un value⁠, devuelve un objeto con ese nombre y valor 
(como pares clave-valor).

Ejemplos
addName({}, "Brutus", 300) ➞ { Brutus: 300 }

addName({ piano: 500 }, "Brutus", 400) ➞ { piano: 500, Brutus: 400 }

addName({ piano: 500, stereo: 300 }, "Caligula", 440) ➞ { piano: 500, stereo: 300, Caligula: 440 }*/

const addName = (obj, name, value) => {
obj [name] = value
return obj
    }   

console.log(addName({piano: 500, stereo: 300}, "Caligula", 440), {piano: 500,  stereo: 300, Caligula: 440});
console.log(addName({piano: 500}, "Brutus", 400), {piano: 500, Brutus: 400});
console.log(addName({}, "Brutus", 300), {Brutus: 300});


