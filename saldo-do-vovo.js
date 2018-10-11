/**
 * TODO
 * 1ª Linha = Dias a serem contados e Saldo Inicial
 * N proximas linhas, a movimentacao (-) Retiradas (+) Depositos
 */
console.time();
const lines = ('3 1000\n100\n-800\n50').split('\n');
let historicoSaldo = [];
let valorSaldo = +lines[0].split(' ')[1];

for(let i = 1; i < lines.length; i++) {
    valorSaldo = valorSaldo + (parseInt(lines[i]));
    historicoSaldo.push(valorSaldo);
}

console.log(historicoSaldo.sort((a, b) => a - b)[0]);
console.timeEnd();