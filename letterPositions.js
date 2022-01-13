const letterPositions = (array) => {
  //let lettersArray = array.split('');
  const result = {};
  for (let i = 0; i < array.length; i++) {
    //console.log(result[array[i]] )
    if (array[i] !== " ") {
      if (result[array[i]]) {
        result[array[i]].push(i);
      } else {
        result[array[i]] = [i];
      }
    }
  }
  return result;
};

//takes an input and an expected result and determines if they are the same
const assertEqual = function(actual, expected) {
  console.assert(actual === expected, `${actual} !== ${expected}`);
  if (actual === expected) {
    console.log(`👍 👍 👍 Assertion passed: ${actual} === ${expected}`);
  }
};


//checks if arrays are the same returns true or false
const eqArrays = (array1, array2) => {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i] || array1.length !== array2.length) {
      return false;
    }
  }
  return true;
};

let message = "today i went to the store";

assertEqual(eqArrays(letterPositions(message).i, [6]), true);