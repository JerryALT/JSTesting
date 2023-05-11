const assert = require('assert');

function filterNumber(arr) {
  if (!Array.isArray(arr)) { throw new Error('Input is not an array'); }

  return arr.filter(item => typeof item === 'number');
}

describe('filterNumber', function() {
  it('should return an array of numbers', function() {
    const arr = [1, 'a', 2, 'b', 3, 'c'];
    const expectedArr = [1, 2, 3];
    const actualArr = filterNumber(arr);
    assert.deepStrictEqual(actualArr, expectedArr);
  });

  it('should return an empty array if no numbers are found', function() {
    const arr = ['a', 'b', 'c'];
    const expectedArr = [];
    const actualArr = filterNumber(arr);
    assert.deepStrictEqual(actualArr, expectedArr);
  });
});