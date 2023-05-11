const assert = require('assert');

function reverseString(str) {
  if (typeof str !== 'string') {
    throw new Error('Input is not a string');
  }

  return str.split('').reverse().join('');
}

describe('reverseString', function() {
  it('should reverse a string', function() {
    const str = 'hello world';
    const expected = 'dlrow olleh';
    const actual = reverseString(str);
    assert.strictEqual(actual, expected);
  });
  
  it('should handle empty string', function() {
    const str = '';
    const expected = '';
    const actual = reverseString(str);
    assert.strictEqual(actual, expected);
  });
  
  it('should throw an error if input is not a string', function() {
    str = 235464781;
    assert.throws(() => !reverseString(str), Error);
  });
});