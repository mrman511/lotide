const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArray');
const middle = require('../middle');


assertEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true);
assertEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3,4]), true);
assertEqual(eqArrays(middle([1, 2, 3, 4, 5]), [3]), true);