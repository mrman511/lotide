const assertEqual = function(actual, expected) {
  console.assert(actual === expected, `${actual} !== ${expected}`);
  if (actual === expected) {
    console.log(`👍 👍 👍 Assertion passed: ${actual} === ${expected}`);
  }
};

//Takes in two arrrays and determines whether the arrays are the same
const eqArrays = (array1, array2) => {
  //console.log('here');
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i] || array1.length !== array2.length) {
      //console.log(`Assertion Failed: Array1: [${array1}] is not the same as Array2: [${array2}]`);
      //process.exit();
      return false;
    }
  }
  //console.log(`Assertion Passed: Array1: [${array1}] is the same as Array2: [${array2}]`);
  return true;
};

const middle = array => {
  const arrayLength = array.length;
  const middle = [];
  if (arrayLength % 2 === 0) {
    if (arrayLength > 2) {
      const half = arrayLength / 2;
      middle.push(array[half - 1], array[half]);
    }
  } else if (arrayLength > 2) {
    middle.push(array[(arrayLength - 1) / 2]);
  }
  return middle;
};


assertEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true);
assertEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3,4]), true);
assertEqual(eqArrays(middle([1, 2, 3, 4, 5]), [3]), true);