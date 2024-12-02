const isUpperCase = require('../utils/esmayuscula');

test('comprobar mayuscula true',() => {
    expect(isUpperCase('PERRO')).toBe(true)
})

test('Comprobar mayuscula False', () => {
    expect(isUpperCase("perro")).toBe(false);
})

