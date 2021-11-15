import Numbers from '../src/js/project.js';

test('should correctly add two given numbers', () => {
  const numbers = new Numbers(2,2);
  expect(numbers.add()).toEqual(4);
});