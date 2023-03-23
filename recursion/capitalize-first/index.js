// Write a recursive function called capitalizeFirst.
// Given an array of strings, capitalize the first
// letter of each string in the array.

const capitalizeFirst = (arr) => {
  // ITERATION
  // let newArr = [];
  // for (let i = 0; i < arr.length; i++) {
  //   let capitalize = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
  //   newArr.push(capitalize);
  // }
  // return newArr;

  // RECURSION
  if (arr.length === 1) return [arr[0][0].toUpperCase() + arr[0].slice(1)];

  const res = capitalizeFirst(arr.slice(0, -1));
  const string =
    arr.slice(arr.length - 1)[0][0].toUpperCase() +
    arr.slice(arr.length - 1)[0].slice(1);
  res.push(string);
  return res;
};

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']
console.log(capitalizeFirst(['hero'])); // ['Hero']
