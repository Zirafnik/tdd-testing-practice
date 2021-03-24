import reverseString from '../code/reverseString';

test('reverse: david', () => {
    expect(reverseString('david')).toBe('divad');
})

test('reverse: ljubljana', () => {
    expect(reverseString('ljubljana')).toBe('anajlbujl');
})