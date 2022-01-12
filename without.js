const eqArrays = (array1, array2) => {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i] || array1.length !== array2.length) {
      console.log(`Assertion Failed: Array1: [${array1}] is not the same as Array2: [${array2}]`);
      process.exit();
    }
  }
  console.log(`Assertion Passed: Array1: [${array1}] is the same as Array2: [${array2}]`);
};

const without = (array, elementsToRemove) => {
  const passedElements = [];
  for (let element of array) {
    if (elementsToRemove.includes(element) === false) {
      passedElements.push(element);
    }
  }
  return passedElements;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
eqArrays(words, ["hello", "world", "lighthouse"]);