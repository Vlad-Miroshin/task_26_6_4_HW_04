import {reverse} from './index.js'


test.each([
    {s: '', expected: ''},
    {s: 'abcd', expected: 'dcba'},
    {s: 'a', expected: 'a'},
    {s: '1234567890', expected: '0987654321'},
    {s: 'абвгдеёжз', expected: 'зжёедгвба'},
  ])('reverse($s, $expected)', ({s, expected}) => {
    expect(reverse(s)).toBe(expected);
  });