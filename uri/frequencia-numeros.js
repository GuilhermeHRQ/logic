// let lines = '7\n8\n10\n8\n260\n4\n10\n10\n'.split('\n');
let lines = '3\n2\n2\n1\n'.split('\n');

const qtdEntradas = lines[0];
let numbers = {};

for(let i = 1; i <= qtdEntradas; i++) {
    if(!numbers[lines[i]]) {
        numbers[lines[i]] = 1;
    } else {
        numbers[lines[i]]++;
    }
}

console.log(numbers)

let saida = [];
for(let i in numbers) {
    saida.push({numero: i, qtd: numbers[i]});
}
saida = saida.sort((a,b) => a.numero - b.numero);

for(let i = 0; i < saida.length; i++) {
    console.log(`${saida[i].numero} aparece ${saida[i].qtd} vez(es)`);
}