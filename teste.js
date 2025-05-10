console.log('Se chegou aqui, é porque o Husky está funcionando!');

// Função que soma dois números
function soma(a, b) {
  return a + b;
}

// Teste da função
console.log('Teste da função soma:');
console.log('2 + 3 =', soma(2, 3));
console.log('5 + 7 =', soma(5, 7));

// Exporta a função para testes
module.exports = { soma };
