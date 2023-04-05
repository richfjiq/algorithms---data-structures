const getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = (arr) => {
  let maxDigits = 0;

  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i]));
  }

  return maxDigits;
};

// Time complexity +++++ Best +++++ => O (nk)
// Time complexity +++++ Average +++++ => O (nk)
// Time complexity +++++ Worst +++++ => O (nk)
// Space complexity => O(n + k)

const radixSort = (arr) => {
  let maxDigits = mostDigits(arr);
  for (let k = 0; k < maxDigits; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k);
      digitBuckets[digit].push(arr[i]);
    }

    arr = [].concat(...digitBuckets);
  }
  return arr;
};

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));
