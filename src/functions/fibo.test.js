const {fibonacci} = require('./fibo');

test('fibonacci of 0 should be 0', () => {
    expect(fibonacci(0)).toBe(0);
});

test('fibonacci of 1 should be 1', () => {
    expect(fibonacci(1)).toBe(1);
});

test('fibonacci of 5 should be 5', () => {
    expect(fibonacci(5)).toBe(5);
})