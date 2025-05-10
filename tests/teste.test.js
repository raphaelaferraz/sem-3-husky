const { soma } = require('teste');

describe('Testes da função soma', () => {
  test('soma 2 + 3 deve ser igual a 5', () => {
    expect(soma(2, 3)).toBe(5);
  });

  test('soma 5 + 7 deve ser igual a 12', () => {
    expect(soma(5, 7)).toBe(12);
  });
});
