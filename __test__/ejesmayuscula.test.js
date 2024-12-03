const isUpperCase = require('../utils/esmayuscula');

describe('calculator', () => {
    test.each`
      firstValue | expectedResult    
      ${'PERRO'}     | ${true}
      ${'amor'}     | ${false}
      ${'ADIOS'}     | ${true}
    `('$firstValue should return $expectedResult', ({firstValue, expectedResult}) => {
      expect(isUpperCase(firstValue)).toBe(expectedResult);
    });
});
