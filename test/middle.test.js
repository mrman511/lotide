const chai = require('chai');
const assert = chai.assert;

const middle = require('../middle');

describe('#middle', function(){
  it('returns the 2 middle items of an array whos length is even', function(){
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);
  });
  it('returns the single middle item of an array whoslength in odd', function(){
    assert.equal(middle([1, 2, 3, 4, 5]), 3);
  })
});
