const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArray');


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), true);
assertEqual(eqArrays([1, 2, 5], [1, 2, 3]), false);