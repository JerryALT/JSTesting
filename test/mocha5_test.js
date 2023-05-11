const assert = require('assert');

function findMaximum(arr) {
  if (!Array.isArray(arr)) { throw new Error('Input is not an array'); }
  if (arr.length === 0) { throw new Error('Array is empty'); }

  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

describe('findMaximum', function() {
  it('should return the maximum number in the array', function() {
    const arr = [1, 5, 2, 7, 3, 9];
    const expectedMax = 9;
    const actualMax = findMaximum(arr);
    assert.strictEqual(actualMax, expectedMax);
  });
  
  it('should return undefined for an empty array', function() {
    const arr = [];
    const actualMax = findMaximum(arr);
    assert.strictEqual(actualMax, undefined);
  });
  
  it('should throw an error if input is not an array', function() {
    const arr = 'not an array';
    assert.throws(() => findMaximum(arr), Error);
  });
});