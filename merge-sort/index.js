const merge = (arr1, arr2) => {
  let results = [];
  // let i = 0;
  // let j = 0;

  // while (i < arr1.length && j < arr2.length) {
  //   if (arr2[j] > arr1[i]) {
  //     results.push(arr1[i]);
  //     i++;
  //   } else {
  //     results.push(arr2[j]);
  //     j++;
  //   }
  // }

  // while (i < arr1.length) {
  //   results.push(arr1[i]);
  //   i++;
  // }

  // while (j < arr2.length) {
  //   results.push(arr2[j]);
  //   j++;
  // }

  // return results;

  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      results.push(arr1.shift());
    } else {
      results.push(arr2.shift());
    }
  }

  return [...results, ...arr1, ...arr2];
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
};

// Big O of mergeSort O(n log n) time complexity and space complexity O(n)

// console.log(merge([1, 10, 50], [2, 14, 99, 100])); // [1, 2, 10, 14, 50, 99, 100 ]
console.log(mergeSort([10, 24, 76, 73, 72, 1, 9])); // [ 1,  9, 10, 24, 72, 73, 76 ]
