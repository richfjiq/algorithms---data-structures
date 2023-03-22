// Write a function called productOfArray which takes in an
// array of numbers and returns the product of them all.

const productOfArray = (arr) => {
  // ++++++++++ MY SOLUTION ++++++++++
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
};

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
console.log(productOfArray([5])); // 5
console.log(productOfArray([8, 10])); // 80
console.log(productOfArray([])); // 0
