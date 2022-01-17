const tail = require('../tail.js')
const assertEqual = require('../assertEqual.js')

const result = tail(["Hello", "Lighthouse", "Labs"]);

assertEqual(tail([1, 2, 3, 4, 4, 5]), 5);