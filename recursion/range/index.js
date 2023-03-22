// Write a function called recursiveRange which accepts
// a number and adds up all the numbers from 0 to the
// number passed to the function

const recursiveRange = (n) => {
  if (n === 0) return 0;
  return n + recursiveRange(n - 1);
};

console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55
console.log(recursiveRange(3)); // 6
console.log(recursiveRange(4)); // 10
console.log(recursiveRange(5)); // 15
