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

//take until function

const takeUntil = (array, callback) => {
  const newArray = [];
  let i = 0;
  while (!callback(array[i])) {
    newArray.push(array[i]);
    i++;
  }
  return newArray;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

console.log(takeUntil(data1, item => item === -1));

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
eqArrays(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"]);
//console.log(results2);