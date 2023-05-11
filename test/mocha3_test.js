const assert = require('assert');

function arrayRemoveDublicates(array) {
  const uniqueArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!uniqueArray.includes(array[i])) {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
}

describe('removeDuplicates', function() {
  it('should remove duplicates from an array', function() {
    const array = [1, 2, 2, 3, 4, 4, 5];
    const expectedArray = [1, 2, 3, 4, 5];
    const actualArray = arrayRemoveDublicates(array);
    assert.deepStrictEqual(actualArray, expectedArray);
  });
});