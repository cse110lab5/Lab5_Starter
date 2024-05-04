// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

//isPhoneNumber Tests:
test('checks if (619)423-7132 is valid number', () => {
  expect(isPhoneNumber('(619)423-7132')).toBe(true);
});

test('checks if 619-423-7132 is valid number', () => {
  expect(isPhoneNumber('619-423-7132')).toBe(true);
});

test('checks if 61932 is valid number', () => {
  expect(isPhoneNumber('61932')).toBe(false);
});

test('checks if (123)12-3-1234 is valid number', () => {
  expect(isPhoneNumber('(123)12-3-1234')).toBe(false);
});

// isEmail Tests:
test('checks if test@gmail.com is valid email', () => {
  expect(isEmail('test@gmail.com')).toBe(true);
});

test('checks if test123@Gmail.me is valid email', () => {
  expect(isEmail('test123@Gmail.me')).toBe(true);
});

test('checks if error1@mail.a is valid email', () => {
  expect(isEmail('error1@mail.a')).toBe(false);
});

test('checks if Error@num3.com is valid email', () => {
  expect(isEmail('Error@num3.com')).toBe(false);
});

// isStrongPassword Tests:
test('checks if tes_t123 is valid password', () => {
  expect(isStrongPassword('tes_t123')).toBe(true);
});
test('checks if A1234 is valid password', () => {
  expect(isStrongPassword('A1234')).toBe(true);
});
test('checks if 123abc is valid password', () => {
  expect(isStrongPassword('123abc')).toBe(false);
});
test('checks if ab@ is valid password', () => {
  expect(isStrongPassword('ab@')).toBe(false);
});

// isDate Tests:
test('checks if 12/12/2020 is valid date', () => {
  expect(isDate('12/12/2020')).toBe(true);
});

test('checks if 1/1/2020 is valid date', () => {
  expect(isDate('1/1/2020')).toBe(true);
});

test('checks if 99/99/99 is valid date', () => {
  expect(isDate('99/99/99')).toBe(false);
});

test('checks if 111/22/3333 is valid date', () => {
  expect(isDate('111/22/3333')).toBe(false);
});

// isHexColor Tests:
test('checks if #123abc is valid hex color', () => {
  expect(isHexColor('#123abc')).toBe(true);
});

test('checks if #abcdef is valid hex color', () => {
  expect(isHexColor('#abcdef')).toBe(true);
});

test('checks if abcdef is valid hex color', () => {
  expect(isHexColor('abcd')).toBe(false);
});

test('checks if #color is valid hex color', () => {
  expect(isHexColor('#color')).toBe(false);
});