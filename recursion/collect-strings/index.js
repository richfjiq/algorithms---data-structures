// Write a function called collectStrings which accepts
// an object and returns an array of all the values
// in the object that have a typeof string

const testObj = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz',
          },
        },
      },
    },
  },
};

const collectStrings = (obj) => {
  // ++++++++++ Helper method recursion +++++++++
  // let strArr = [];
  // const gatherStrings = (o) => {
  //   for (let key in o) {
  //     if (typeof o[key] === 'string') {
  //       strArr.push(o[key]);
  //     } else if (typeof o[key] === 'object') {
  //       return gatherStrings(o[key]);
  //     }
  //   }
  // };
  // gatherStrings(obj);
  // return strArr;

  // ++++++++++ Recursion +++++++++
  let strArr = [];

  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      strArr.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      strArr = strArr.concat(collectStrings(obj[key]));
    }
  }

  return strArr;
};

console.log(collectStrings(testObj)); // ["foo", "bar", "baz"])
