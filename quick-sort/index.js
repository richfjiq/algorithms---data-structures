const pivot = (arr, start = 0, end = arr.length + 1) => {
  const swap = (array, i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };

  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  swap(arr, start, swapIdx);
  return swapIdx;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
};

// ++++++++++ best solution ++++++++++

// time complexity best case => O(n log n)
// time complexity average case => O(n log n)
// time complexity worst case => O(n2)
// Space complexity O(log n)

const quickSortOptimized = (arr) => {
  if (arr.length <= 1) return arr;

  let pivot = arr[0];
  let leftArr = [];
  let rightArr = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr(arr[i]);
    }
  }

  return [...leftArr, pivot, ...rightArr];
};

// console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3])); // [1, 2, 3, 4, 5, 6, 8]
console.log(quickSort([4, 6, 8, 1, 2, 5, 3])); // [1, 2, 3, 4, 5, 6, 8]
