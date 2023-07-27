
const noBoringZeros =(n) =>{
    
  // let delCero= Number(n.toString().split("").reverse().join(""))
  // if (n<0) {
  //     return Number((n*-1).toString().split("").reverse().join("")).toString().split("").reverse().join("")*-1
  // }
  // else {
  //     return Number(delCero.toString().split("").reverse().join(""))

  // }
  return Number(n.toString().replace(/0+$/,''));

}

console.log(noBoringZeros(1450));
console.log(noBoringZeros(9600000));
console.log(noBoringZeros(-1050));