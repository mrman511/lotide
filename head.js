const assertEqual = function(actual, expected) {
  console.assert(actual === expected, `${actual} !== ${expected}`);
  if (actual === expected) {
    console.log(`👍 👍 👍 Assertion passed: ${actual} === ${expected}`);
  }
};

const head = function(array){
  return array[0];
};

//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");