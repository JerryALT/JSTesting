const assert = require('assert');

function addNumbers(a, b) {
  return a + b;
}

describe('addNumbers function', function() 
{
  it('should correctly add two numbers', function() 
  {
    assert.equal(addNumbers(10, 3), 13);
    assert.equal(addNumbers(5, -5), 0);
    assert.equal(addNumbers(-20, 30), 10);
  });
});