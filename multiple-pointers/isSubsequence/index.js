// Write a function called isSubsequence which takes in two
// strings and checks whether the characters in the first string
// form a subsequence of the characters in the second string. In
// other words, the function should check whether the characters
// in the first string appear somewhere in the second string,
// without their order changing.

const isSubsequence = (str, str2) => {
  // +++++++++++++++ Iterative solution bigO(n), O(1) space complexity
  if (!str) return true;

  let i = 0;
  let j = 0;

  while (j < str2.length) {
    if (str2[j] === str[i]) i++;
    if (i === str.length) return true;
    j++;
  }

  return false;

  // +++++++++++++++ Recursive solution bigO(n), but not O(1) space complexity
  // if (str.length === 0) return true;
  // if (str2.length === 0) return false;
  // if (str2[0] === str[0]) return isSubsequence(str.slice(1), str2.slice(2));
  // return isSubsequence(str, str2.slice(1));
};

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'string')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // true
