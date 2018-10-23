let lines = 'JOAO\n500.00\n1230.30'.split('\n');

const salario = +lines[1];
const comissao = lines[2] * 0.15;

console.log(`TOTAL = R$ ${(salario + comissao).toFixed(2)}`);