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




const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  const results =[];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

eqArrays(map(words, word => word[0]),[ 'g', 'c', 't', 'm', 't' ]);
//console.log(results1);