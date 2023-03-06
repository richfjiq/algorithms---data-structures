const charCount = (str) => {
  return str
    .toLowerCase()
    .split('')
    .reduce((acc, curr) => {
      const code = curr.charCodeAt(0);

      if ((code > 47 && code < 58) || (code > 96 && code < 123)) {
        acc[curr] = ++acc[curr] || 1;
      }

      // if (/[\w]/g.test(curr)) {
      //   acc[curr] = ++acc[curr] || 1;
      // }

      return acc;
    }, {});
};

console.log(charCount('hello world')); // { h: 1, e: 1, l: 2, 0: 1 }
console.log(charCount(''));
console.log(charCount('aaaa')); // { a: 4 }
console.log(charCount('Brooklyn 999!'));
