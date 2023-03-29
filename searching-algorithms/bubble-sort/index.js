const bubbleSort = (arr) => {
  // for (let i = arr.length; i > 0; i--) {
  //   for (let j = 0; j < i - 1; j++) {
  //     console.log(arr, arr[j], arr[j + 1]);
  //     if (arr[j] > arr[j + 1]) {
  //       let temp = arr[j];
  //       arr[j] = arr[j + 1];
  //       arr[j + 1] = temp;
  //     }
  //   }
  //   console.log('One pass complete');
  // }

  // return arr;

  // const swap = (arr, idx1, idx2) => {
  //   [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  // };

  // for (let i = arr.length; i > 0; i--) {
  //   for (let j = 0; j < i - 1; j++) {
  //     console.log(arr, arr[j], arr[j + 1]);
  //     if (arr[j] > arr[j + 1]) {
  //       swap(arr, j, j + 1);
  //     }
  //   }
  // }

  // return arr;

  // +++++++++ Optimized version O(n2), but with noSwaps O(n)
  let noSwaps;

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }

  return arr;
};

// console.log(bubbleSort([37, 45, 29, 8])); // [8, 29, 37, 45]
console.log(bubbleSort([37, 45, 29, 8, 12, 88, -3, 11])); // [-3, 8, 12, 29, 37, 45, 88]
