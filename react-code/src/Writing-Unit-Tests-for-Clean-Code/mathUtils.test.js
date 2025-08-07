import { add, divide } from './mathUtils';

describe('add', () => {
  test('adds two positive numbers', () => {
    expect(add(3, 5)).toBe(8);
  });

  test('adds negative numbers', () => {
    expect(add(-2, -4)).toBe(-6);
  });
});

describe('divide', () => {
  test('divides two numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('throws error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
  });
});
