/*Cree un programa que filtre una lista de cadenas y devuelva una lista con solo el nombre de sus amigos.

Si un nombre tiene exactamente 4 letras, ¡puede estar seguro de que tiene que ser un amigo suyo! De lo contrario, 
puede estar seguro de que no es...

Ej: Entrada = ["Ryan", "Kieran", "Jason", "Tú"], Salida = ["Ryan", "Tú"]

es decir

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Nota: mantenga el orden original de los nombres en la salida.*/


const friend = (friends) => {
    const amigo = friends.filter((friends => friends.length === 4))
   return amigo
   
 }


 console.log(friend(["Ryan", "Kieran", "Mark"]));
 console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]));
 console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]));

 
