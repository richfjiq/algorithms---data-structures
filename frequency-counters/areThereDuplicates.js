// +++++++++++++++ Multiple Pointers +++++++++++++++
// Implement a function called, areThereDuplicates which accepts
// a variable number of arguments, and checks whether there are any
// duplicates among the arguments passed in.

const areThereDuplicates = (...args) => {
  // +++++++++ Big O(1)??, Liner solution
  // A value in the set may only occur once
  return new Set(args).size !== args.length;

  // ++++++++++ Big O (n), Frequency Counter
  // if (args.length === 0) return null;
  // let frequencyCounter1 = {};
  // for (let val of args) {
  //   frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  // }
  // for (let key in frequencyCounter1) {
  //   if (frequencyCounter1[key] > 1) {
  //     return true;
  //   }
  // }
  // return false;

  // ++++++++++ Big O (nlog(n)), Multiple Pointers
  // args.sort();
  // let start = 0;
  // let next = 1;
  // while (next < args.length) {
  //   if (args[start] === args[next]) {
  //     return true;
  //   }
  //   start++;
  //   next++;
  // }
  // return false;
};

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true
console.log(areThereDuplicates('e', 'b', 'c', 'd', 'e', 'f')); // true
