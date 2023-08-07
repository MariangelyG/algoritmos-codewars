/*Cree una función que tome un objeto y devuelva las claves y los valores como matrices separadas. 
Devuelve las claves ordenadas alfabéticamente y sus valores correspondientes en el mismo orden.

Ejemplos
keysAndValues({ a: 1, b: 2, c: 3 })
➞ [["a", "b", "c"], [1, 2, 3]]

keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

keysAndValues({ key1: true, key2: false, key3: undefined })
➞ [["key1", "key2", "key3"], [true, false, undefined]]*/

const keysAndValues = (obj) => {
	let keys = Object.keys(obj)
    let values =  Object.values(obj)
    return [keys,values]
}

console.log(keysAndValues({a: 1, b: 2, c: 3}));
console.log(keysAndValues({a: "Apple", b: "Microsoft", c: "Google"}));
console.log(keysAndValues({key1: true, key2: false, key3: undefined}));
console.log(keysAndValues({1: null, 2: null, 3: null}));
console.log(keysAndValues({key1: "cat", key2: "dog", key3: null}));




