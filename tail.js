const assertEqual = function(actual, expected) {
  console.assert(actual === expected, `${actual} !== ${expected}`);
  if (actual === expected) {
    console.log(`👍 👍 👍 Assertion passed: ${actual} === ${expected}`);
  }
};

const tail = function(array) {
  return array.slice(1);
};

const compareTail = function(tailArray, compare) {
  for (let i = 0; i < tailArray.length; i++) {
    //console.log(`${tailArray[i]}   ${compare[i]}`);
    assertEqual(tailArray[i], compare[i]);
  }
};


const result = tail(["Hello", "Lighthouse", "Labs"]);

compareTail(result,["Lighthouse", "Labs"]);