const eqArrays = (array1, array2) => {
  //console.log('here')
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i] || array1.length !== array2.length) {
      return false;
    }
  }
  return true;
};

const eqObjects = (obj1, obj2) => {
  //put obj1 and obj2 keays into an array
  let objKeys1 = Object.keys(obj1);
  let objKeys2 = Object.keys(obj2);
  //check if key arrays are the different lengths
  if (objKeys1.length !== objKeys2.length) {
    
    return false;
  }
  //iterate through keys of obj1
  for (let key of objKeys1) {
    //checks if both both obj keys are arrays
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      //console.log(eqArrays("here", obj1[key], obj2[key]));
      //check eqArrays function to see if the 2 arrays are NOT equal
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
    }
    //if the key values are NOT arrays check other false conditions
    else {
      //check if obj2 does NOT include the obj1 key
      if (!objKeys2.includes(key)) {
        return false;
      }
      //check if obj1 key and obj2 key do NOT have the same value
      else if (obj1[key] !== obj2[key]) {
        console.log(obj1[key], obj2[key]);
        return false;
      }
    }
  }
  return true;
};


const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`👍 👍 👍 ssertion Passed: Object1: [${inspect(actual)}] is the same as Object2: [${inspect(expected)}]`);
  } else {
    console.log(`👎 👎 👎 Assertion Failed: Object1: [${inspect(actual)}] is not the same as Object2: [${inspect(expected)}]`);
  }
};

assertObjectsEqual({a: 1, b: 2, c: 3}, {a: 1, b: 2, c: 3});