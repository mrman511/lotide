const chai = require('chai');
const assert = chai.assert;

const tail = require('../tail.js')

describe('#tail', function() {
  it('returns only the last item of an array', function(){
    assert.equal(tail([1, 2, 3, 4, 4, 5]), 5);
  });
});
