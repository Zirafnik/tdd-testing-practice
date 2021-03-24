import calculator from '../code/calculator';

test('calculator: add', () => {
    expect(calculator.add(3,  18)).toBe(21);
})

test('calculator: add', () => {
    expect(calculator.add(6,  11)).toBe(17);
})

test('calculator: subtract', () => {
    expect(calculator.subtract(18,  3)).toBe(15);
})

test('calculator: subtract', () => {
    expect(calculator.subtract(3,  18)).toBe(-15);
})

test('calculator: multiply', () => {
    expect(calculator.multiply(3,  18)).toBe(54);
})

test('calculator: multiply', () => {
    expect(calculator.multiply(2, 17)).toBe(34);
})

test('calculator: divide', () => {
    expect(calculator.divide(18, 6)).toBe(3);
})

test('calculator: divide', () => {
    expect(calculator.divide(18,  5)).toBeCloseTo(3.6);
})