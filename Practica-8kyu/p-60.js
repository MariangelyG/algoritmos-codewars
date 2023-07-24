/*triple problema
Cree una función que devolverá una cadena que combine todas las letras de las tres cadenas ingresadas en grupos. 
Tomando la primera letra de todas las entradas y agrupándolas una al lado de la otra. ¡Haga esto para cada letra, vea el ejemplo a continuación!

Por ejemplo, Entrada: "aa", "bb", "cc" => Salida: "abcabc"

Nota: Puede esperar que todas las entradas tengan la misma longitud.*/

    const tripleTrouble = (one, two, three) =>{
        let concatenarcadenas = ""
        for(let i = 0; i <  three.length; i++){
            concatenarcadenas += one[i] + two[i] + three[i]
        }
        return concatenarcadenas
    }

   console.log(tripleTrouble("aaa","bbb","ccc"));
   console.log(tripleTrouble("aaaaaa","bbbbbb","cccccc"));
   console.log(tripleTrouble("burn", "reds", "roll"));
   console.log(tripleTrouble("Sea","urn","pms"));
   console.log(tripleTrouble("LLh","euo","xtr"));
   
//    return one.split("").map((item, index) => item+two[index]+three[index]).join("")
   
   
