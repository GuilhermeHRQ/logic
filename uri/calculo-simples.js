let lines = '12 1 5.30\n16 2 5.10\n'.split('\n');
// let lines = '13 2 15.30\n161 4 5.20'.split('\n');
// let lines = '1 1 15.10\n2 1 15.10'.split('\n');

let total = 0;

for(let i = 0; i < lines.length - 1; i++) {
    const qtd = lines[i].split(' ')[1];
    const valor = lines[i].split(' ')[2];

    total += qtd * valor;
}

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);