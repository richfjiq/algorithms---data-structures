// Write a recursive function called capitalizeWords.
// Given an array of words, return a new array
// containing each word capitalized.

const capitalizeWords = (arr) => {
  // ++++++++++ ITERATION ++++++++++
  // let newArr = [];
  // console.log({ arr });
  // for (let i = 0; i < arr.length; i++) {
  //   let capitalize = arr[i].toUpperCase();
  //   newArr.push(capitalize);
  // }
  // return newArr;
  if (arr.length === 1) return [arr[0].toUpperCase()];

  let res = capitalizeWords(arr.slice(0, -1));
  res.push(arr.slice(arr.length - 1)[0].toUpperCase());

  return res;
};

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words));
// ['I', 'AM', 'LEARNING', 'RECURSION']
// res = ['i', 'am', 'learning'];
// 'RECURSION';
// res = ['i', 'am'];
// 'LEARNING';
// res = ['i'];
// 'AM';
// ['I'];
