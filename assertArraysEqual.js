const eqArrays = (array1, array2) => {
  console.log('here');
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i] || array1.length !== array2.length) {
      console.log(`Assertion Failed: Array1: [${array1}] is not the same as Array2: [${array2}]`);
      process.exit();
    }
  }
  console.log(`Assertion Passed: Array1: [${array1}] is the same as Array2: [${array2}]`);
};

eqArrays([1, 2, 3], [1, 2, 3]);
eqArrays([1, 2, 3], [1, 2, 3, 4]);
eqArrays([1, 2, 5], [1, 2, 3]);