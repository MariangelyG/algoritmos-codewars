// Dadas dos matrices, a1 y a2, ordene los elementos de a2 según el índice de la palabra en a1 que comienza con la misma letra.


function sortArray(a1, a2) {
    return a1.map((item)=> a2.find((element) => element[0] === item[0] ))
    }

    