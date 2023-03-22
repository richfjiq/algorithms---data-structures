// Write a recursive function called capitalizeFirst.
// Given an array of strings, capitalize the first
// letter of each string in the array.

const capitalizeFirst = (arr) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let capitalize = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
    newArr.push(capitalize);
  }

  return newArr;
};

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']
