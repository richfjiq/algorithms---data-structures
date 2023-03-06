// The function should return true if every value in the array has
// it's corresponding value squared in the second array

const same = (arr1, arr2) => {
  // Big O of n
  if (arr1.length !== arr2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;

  // ========== sort is big O of nlog(n) =========
  // if (arr1.length !== arr2.length) return false;
  // const arr1Sorted = arr1.sort();
  // const arr2Sorted = arr2.sort();
  // return arr1Sorted.every((el, i) => el * el === arr2Sorted[i]);
};

console.log(same([1, 2, 3], [4, 1, 9])); // true
console.log(same([1, 2, 3], [1, 9])); // false
console.log(same([1, 2, 1], [4, 4, 1])); // false
