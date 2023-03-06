const charCount = (str) => {
  return str
    .toLowerCase()
    .split('')
    .reduce((acc, curr) => {
      if (!acc[curr] && /[a-z]/g.test(curr)) {
        acc[curr] = 1;
      } else if (acc[curr] && /[a-z]/g.test(curr)) {
        acc[curr]++;
      }

      return acc;
    }, {});
};

console.log(charCount('hello world')); // { h: 1, e: 1, l: 2, 0: 1 }
console.log(charCount(''));
console.log(charCount('aaaa')); // { a: 4 }
console.log(charCount('Brooklyn 999!'));
