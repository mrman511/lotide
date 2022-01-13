const assertEqual = function(actual, expected) {
  console.assert(actual === expected, `${actual} !== ${expected}`);
  if (actual === expected) {
    console.log(`👍 👍 👍 Assertion passed: ${actual} === ${expected}`);
  }
};

const eqArrays = (array1, array2) => {
  //console.log('here')
  for (let i = 0; i < array1.length; i++){
    if (array1[i] !== array2[i] || array1.length !== array2.length){
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
  if (objKeys1.length !== objKeys2.length){
    
    return false;
  }
  //iterate through keys of obj1
  for (key of objKeys1){
    //checks if both both obj keys are arrays
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])){
      //console.log(eqArrays("here", obj1[key], obj2[key]));
      //check eqArrays function to see if the 2 arrays are NOT equal
      if (!eqArrays(obj1[key], obj2[key])){
        return false;
      }
    }
    //if the key values are NOT arrays check other false conditions
    else {
      //check if obj2 does NOT include the obj1 key
      if (!objKeys2.includes(key)){
      return false;
    }
    //check if obj1 key and obj2 key do NOT have the same value
      else if (obj1[key] != obj2[key]){
        console.log(obj1[key], obj2[key]);
        return false;
      }
    }
    
  }
  return true;
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false