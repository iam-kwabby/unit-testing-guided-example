const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
    // Our tests will be added here.

  test("should multiply two positive integers correctly", () => {
    const result = multiply(1, 2);
    expect(result).toBe(2);
  });

  test("should multiply any number by zero correctly", () => {
    const result = multiply(3, 0);
    expect(result).toBe(0);
  });

  test("should multiply a negative and a positive number correctly", () => {
    const result = multiply(-1, 2);
    expect(result).toBe(-2);
  });
  });