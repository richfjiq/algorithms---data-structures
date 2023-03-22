// Write a recursive function called isPalindrome which returns
// true if the string passed to it is a palindrome (reads the
// same forward and backward). Otherwise it returns false.

const isPalindrome = (str) => {
  // ++++++++++ MY SOLUTION
  // const reverse = (str) => {
  //   if (str.length === 0) return '';
  //   return str.slice(str.length - 1) + reverse(str.slice(0, str.length - 1));
  // };

  // return str === reverse(str) ? true : false;

  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
};

console.log(isPalindrome('awesome')); // false
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('amanaplanacanalpanama')); // true
console.log(isPalindrome('amanaplanacanalpandemonium')); // false
