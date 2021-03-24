import analyze from '../code/arrayAnalysis';

test('Ex.1', () => {
    expect(analyze([1,8,3,4,2,6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      });
});

test('Ex.2', () => {
    expect(analyze([1, -8, 3, -2, 36])).toStrictEqual({
        average: 6,
        min: -8,
        max: 36,
        length: 5
      });
});