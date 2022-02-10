"use sttict";
const sumTwoSmallestNumbers = (...args) => {
  // 1
  let sortedArgs = args.sort((a, b) => a - b);
  if (sortedArgs.length < 2) {
    return console.error("Your set of date smaller then 2");
  }
  return sortedArgs[0] + sortedArgs[1];
  //   let array = args;
  //   const sortedArray = array.sort((a, b) => a - b);
  //2
  //   const firstElement = sortedArray[0];
  //   const secondElement = sortedArray[1];
  //   //3
  //   const sum = firstElement + secondElement;
  //   //4
  //   return sum;
};

// const sumTwoSmallestNumbersShort = (array) => {
//   const sortedArray = array.sort((a, b) => a - b);
//   return sortedArray[0] + sortedArray[1];
// };

console.log(sumTwoSmallestNumbers(19, 5, 42, 2, 77)); // 7
console.log(sumTwoSmallestNumbers(1, 3, 2)); // 3
console.log(sumTwoSmallestNumbers(1)); // undefined и отдельный console.error("...")
