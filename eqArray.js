const assertEqual = function(actual, expected) {
  console.assert(actual === expected, `${actual} !== ${expected}`);
  if (actual === expected) {
    console.log(`👍 👍 👍 Assertion passed: ${actual} === ${expected}`);
  }
};

const eqArrays = (array1, array2) => {
  console.log('here')
  for (let i = 0; i < array1.length; i++){
    if (array1[i] !== array2[i] || array1.length !== array2.length){
      return false;
    }
  }
  return true;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), true);
assertEqual(eqArrays([1, 2, 5], [1, 2, 3]), false);