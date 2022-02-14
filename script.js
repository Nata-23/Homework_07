"use sttict";
//1
// const sumTwoSmallestNumbers = (...args) => {
//   // 1
//   let sortedArgs = args.sort((a, b) => a - b);
//   if (sortedArgs.length < 2) {
//     return console.error("Your set of date smaller then 2");
//   }
//   return sortedArgs[0] + sortedArgs[1];
// };

// console.log(sumTwoSmallestNumbers(19, 5, 42, 2, 77)); // 7
// console.log(sumTwoSmallestNumbers(1, 3, 2)); // 3
// console.log(sumTwoSmallestNumbers(1)); // undefined и отдельный console.error("...")

//2

function createCalculator(firstValue) {
  let count = firstValue;

  return {
    sum: (secondValue) => (count = count + secondValue),
    mult: (secondValue) => (count = count * secondValue),
    sub: (secondValue) => (count = count - secondValue),
    div: (secondValue) => (count = count / secondValue),
  };
}

const calc = createCalculator(10);

console.log(calc.sum(5)); /// 15
console.log(calc.mult(10)); // 150
console.log(calc.sub(40)); // 110
console.log(calc.div(10)); // 11
