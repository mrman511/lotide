const eqArrays = require('../assertArraysEqual')

eqArrays([1, 2, 3], [1, 2, 3]);
eqArrays([1, 2, 3], [1, 2, 3, 4]);
eqArrays([1, 2, 5], [1, 2, 3]);