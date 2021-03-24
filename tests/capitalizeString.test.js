import capitalizeString from '../code/capitalizeString';

test('capitalize: david', () => {
    expect(capitalizeString('david')).toBe('David');
})

test('capitalize: ljubljana', () => {
    expect(capitalizeString('ljubljana')).toBe('Ljubljana');
})
