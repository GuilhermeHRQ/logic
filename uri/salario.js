// let lines = '25\n100\n5.50'.split('\n');
// let lines = '1\n200\n20.50'.split('\n');
let lines = '6\n145\n15.55'.split('\n');

const idUsuario = lines[0];
const valorHora = lines[1];
const salario = lines[2];

console.log(`NUMBER = ${idUsuario}`);
console.log(`SALARY = U$ ${(valorHora * salario).toFixed(2)}`);