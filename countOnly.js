const assertEqual = function(actual, expected) {
  console.assert(actual === expected, `${actual} !== ${expected}`);
  if (actual === expected) {
    console.log(`👍 👍 👍 Assertion passed: ${actual} === ${expected}`);
  }
};


const countOnly = (allItems, itemsToCount) => {
  const results = {};
  //add items to be counted to a seperate object
  for (let item in itemsToCount) {
    //console.log(itemsToCount[item])
    if (itemsToCount[item] === true) {
      console.log(item);
      results[item] = undefined;
    }
  }
  //console.log(results)
  /*for each key of object the iterate through the array
  if the element of the array is the smae as the object key
  add 1 to the object */
  for (let item in results) {
    allItems.forEach(name => {
      if (name === item) {
        if (results[item] >= 1) {
          results[item] += 1;
        } else {
          results[item] = 1;
        }
      }
    });
  }
  return results;
};


//console.log(countOnly(["Jason", "Jason", "Jason", "Jason"], { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }));
///*
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
//*/
