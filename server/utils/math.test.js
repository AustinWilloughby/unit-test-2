

const mathUtils = require('./math.js');

const testVars = {
    MIN: 0,
    MAX: 20,
};

describe('add()', () => {
    test('finds the sum of two numbers', () => {
        expect(mathUtils.add(5, 10)).toBe(15);
    });
    
    test('clamps number to maximum', () => {
        expect(mathUtils.add(testVars.MAX, 1)).toBe(testVars.MAX);
    });

    test('clamps number to minimum', () => {
        expect(mathUtils.add(testVars.MIN - 2, 1)).toBe(testVars.MIN);
    });
});

describe('subtract()', () => {
    test('finds the difference of two numbers', () => {
        expect(mathUtils.sub(10, 5)).toBe(5);
    });

    test('clamps number to maximum', () => {
        expect(mathUtils.sub(testVars.MAX + 2, 1)).toBe(testVars.MAX);
    });

    test('clamps number to minimum', () => {
        expect(mathUtils.sub(testVars.MIN, 1)).toBe(testVars.MIN);
    });
});

describe('multiply()', () => {
    test('finds the product of two numbers', () => {
        expect(mathUtils.mul(5, 10)).toBe(50);
    });

    test('clamps input values to maximum', () => {
        expect(mathUtils.mul(5, testVars.MAX + 1)).toBe(5 * testVars.MAX);
        expect(mathUtils.mul(testVars.MAX + 1, 10)).toBe(testVars.MAX * 10);
    });

    test('clamps input values to minimum', () => {
        expect(mathUtils.mul(5, testVars.MIN - 1)).toBe(5 * testVars.MIN);
        expect(mathUtils.mul(testVars.MIN - 1, 10)).toBe(testVars.MIN * 10);
    });
});