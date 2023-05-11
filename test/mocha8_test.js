const assert = require('assert');

function calculateArea(width, height) {
  if (typeof width != 'number' || typeof height != 'number') {
    throw new Error('Both width and height must be numbers');
  }
  if (width <= 0 || height <= 0) {
    throw new Error('Both width and height must be positive numbers');
  }
  return width * height;
}

describe('calculateArea', function() {
  it('should return the area of a rectangle', function() {
    const width = 5;
    const height = 10;
    const expectedArea = 50;
    const actualArea = calculateArea(width, height);
    assert.strictEqual(actualArea, expectedArea);
  });

  it('should throw an error if width or height is not a number', function() {
    const width = "gg";
    const height = 10;
    assert.throws(() => calculateArea(width, height), Error);
  });

  it('should throw an error if width or height is not positive', function() {
    const width = -5;
    const height = 10;
    assert.throws(() => calculateArea(width, height), Error);
  });
});
