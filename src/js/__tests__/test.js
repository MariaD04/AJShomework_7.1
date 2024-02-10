import Validator from '../validator';

test('trow error, when passed not a letter at the end of the string', () => {
  const result = () => new Validator('ad_b-23n-');
  expect(result).toThrow('Incorrect name');
});

test('trow error, when passed not a letter at the beginning of the string', () => {
  const result = () => new Validator('12ad_b-23n');
  expect(result).toThrow('Incorrect name');
});

test('trow error, when passed more than 3 number in the string', () => {
  const result = () => new Validator('ad_b-1234n');
  expect(result).toThrow('Incorrect name');
});

test('correct name', () => {
  const result = new Validator('ad_12b-34n');
  expect(result).toEqual({
    name: 'ad_12b-34n',
  });
});
