const palindromo = require('../utils/palindromo');

describe('calculator', () => {
    test.each`
      firstValue | expectedResult    
      ${'hola'}       | ${'aloh'}
      ${'amor'}      | ${'roma'}
      ${'pan'}      | ${'nap'}
    `('$firstValue should return $expectedResult', ({firstValue, expectedResult}) => {
      expect(palindromo(firstValue)).toBe(expectedResult);
    });
});
