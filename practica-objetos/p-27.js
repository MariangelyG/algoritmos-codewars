/*Intenta encontrar a tus antepasados ​​y descendientes con código.

Cree una función que tome un número xy un carácter y( "m"para hombre, "f"para mujer) y devuelva el nombre de un antepasado (m/f) o descendiente (m/f) .

Si el número es negativo , devuelve el antepasado relacionado .
Si es positivo , devuelve el descendiente relacionado .
Eres generación 0. En el caso de 0(masculino o femenino), devolver "me!".
Ejemplos
generation(2, "f") ➞ "granddaughter"

generation(-3, "m") ➞ "great grandfather"

generation(1, "f") ➞ "daughter"*/

const generation = (x, y) => {
if(x === -3 && y === "m"){
    return `great grandfather`
} else if(x === -3 && y === "f"){
    return `great grandmother`
}else if(x === -2 && y === "m"){
    return `grandfather`
}else if(x === -2 && y === "f"){
    return `grandmother`
}else if(x === -1 && y === "m"){
    return `father`
}else if(x === -1 && y === "f"){
    return `mother`
}else if(x === 0 && y === "m"){
    return `me!`
}else if(x === 0 && y === "f"){
    return `me!`
}else if(x === 1 && y === "m"){
    return `son`
}else if(x === 1 && y === "f"){
    return `daughter`
}else if(x === 2 && y === "m"){
    return `grandson`
}else if(x === 2 && y === "f"){
    return `granddaughter`
}else if(x === 3 && y === "m"){
    return `great grandson`
}else if(x === 3 && y === "f"){
    return `great granddaughter`
}
}

console.log(generation(-3, "m"));
console.log(generation(1, "f"));
console.log(generation(0, "f"));


