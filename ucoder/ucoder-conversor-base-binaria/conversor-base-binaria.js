// const lines = ('4\nB10\nD45F8\nD1101\nB10110\n').split('\n');
// const lines = ('4\nD2389\nB10211\nB101010\nH01\n').split('\n');
const lines = ('3\nD2389\nB10211\nB101010\n').split('\n');

const qtdCasos = +lines.splice(0, 1);
const nBin = RegExp()
const valores = [];

for(let i = 0; i < qtdCasos; i++) {
    valores.push({ tipo: lines[i].substring(0, 1), valor: +lines[i].substring(1, lines[i].length)});
    if(valores[i].tipo == 'B' && !isNaN(valores[i].valor) && /^[01]+$/.test(valores[i].valor.toString())) {
        valores[i].saida = `D${BinToDec(valores[i].valor)}`;
    } else if(valores[i].tipo == 'D' && !isNaN(valores[i].valor) && /[0-9]+/g.test(valores[i].valor)) {
        valores[i].saida = `B${DecToBin(valores[i].valor)}`;
    } else {
        valores[i].saida = 'INVALIDA';
    }

    console.log(valores[i].saida);
}

function DecToBin(valor) {
    const resultados = [];
    while(valor >= 2) {
        resultados.push(valor % 2);
        valor = Math.floor(valor / 2);
    }

    return +`1${resultados.reverse().join('')}`;
}

function BinToDec(valor) {
    let total = 0;
    let valorArray = valor.toString().split('').reverse();

    for(let i = 0; i < valorArray.length; i++) {
        total += valorArray[i] * Math.pow(2, i);
    }

    return total;
}
