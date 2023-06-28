// Dadas dos matrices, a1 y a2, ordene los elementos de a2 según el índice de la palabra en a1 que comienza con la misma letra.

let a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino'];
let a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus'];
let a3 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin'];
let a4 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo'];

const sortArray = (a1, a2) => {
   

    return a1.map((item)=> a2.find((element) => element[0] === item[0] ))
}


console.log(sortArray(a1, a2));
console.log(sortArray(a3, a4));





    