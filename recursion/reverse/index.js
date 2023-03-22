// Write a recursive function called reverse which accepts
// a string and returns a new string in reverse.

const reverse = (str) => {
  // if (str.length === 0) return str;
  // return str.slice(str.length - 1) + reverse(str.slice(0, str.length - 1));

  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
};

console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'
console.log(reverse('hello')); // 'olleh'
