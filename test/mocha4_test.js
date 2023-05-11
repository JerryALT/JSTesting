const assert = require('assert');

function capitalizeWords(str) {
  const words = str.split(' ');
  const capitalizedWords = words.map(word => word.toUpperCase());
  return capitalizedWords.join(' ');
}

describe('capitalizeWords', function() {
  it('This test should convert all words to uppercase', function() {
    const input = ['hello', 'world'];
    const expectedOutput = ['HELLO', 'WORLD'];
    const actualOutput = capitalizeWords(input);
    assert.deepStrictEqual(actualOutput, expectedOutput);
  });

  it('This test should return an empty array for an empty input', function() {
    const input = [];
    const expectedOutput = [];
    const actualOutput = capitalizeWords(input);
    assert.deepStrictEqual(actualOutput, expectedOutput);
  });
});