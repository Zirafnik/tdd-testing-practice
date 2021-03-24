import caesar from '../code/caesar-cipher';

test('0 mixed-case', () => {
    expect(caesar('This testing thing really is not that difficult', 0)).toBe('This testing thing really is not that difficult');
})

test('1 lower-case', () => {
    expect(caesar('defend the east wall of the castle', 1)).toBe('efgfoe uif fbtu xbmm pg uif dbtumf');
})

test('5 wrapping mixed-case punctuation', () => {
    expect(caesar('I know David, Filip, Zan and Urh!', 5)).toBe('N pstb Ifani, Knqnu, Efs fsi Zwm!');
})