// const array = (string) => {
//     let elementos = string.split(",").slice(1, -1)
//     if(string === ("")){
//         return null;
//     } else if (string === '1'){
//         return null;
//     } else if (string === ){
//         return null;
//     }

//     return elementos.join(" ")
// }
const array = (string) => {
let elementos = string.split(",").slice(1, -1);
if (string === "" || string === "1" || elementos.length === 0) {
    return null;
  }
return elementos.join(" ");
};


   console.log( array('', null));
   console.log( array('1', null));
   console.log( array('A1,B2', null));
   console.log( array('1,2,3', '2'));
   console.log( array('1,2,3,4', '2 3'));

//    test();
//   test('1', null);
//   test();
//   test();
//   test();
//   test('A1,B2,C3,D4,E5', 'B2 C3 D4');
//   test('A,1,23,456,78,9,Z', '1 23 456 78 9');
   