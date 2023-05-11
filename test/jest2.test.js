const getNthFibonacciNumber = require('./getNthFibonacciNumber');

test('getNthFibonacciNumber should return the correct nth Fibonacci number', () => {
  expect(getNthFibonacciNumber(0)).toBe(0);
  expect(getNthFibonacciNumber(1)).toBe(1);
  expect(getNthFibonacciNumber(2)).toBe(1);
  expect(getNthFibonacciNumber(3)).toBe(2);
  expect(getNthFibonacciNumber(4)).toBe(3);
  expect(getNthFibonacciNumber(5)).toBe(5);
  expect(getNthFibonacciNumber(6)).toBe(8);
  expect(getNthFibonacciNumber(7)).toBe(13);
});