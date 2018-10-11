// const lines = ('3\n3\n1 3\n3 2\n2 4\n4\n3 5\n5 7\n2 1\n3 2\n2\n5 1\n4 2').split('\n');
// const lines = ('3\n3\n1 3\n3 2\n2 4\n4\n3 5\n5 7\n2 1\n3 2\n2\n5 1\n4 2').split('\n');
// const lines = ('1\n1\n1 1').split('\n');
const lines = [ '3', '3', '1 3', '3 2', '2 4', '4', '3 5', '5 7', '2 1', '3 2', '2 ', '5 1', '4 2', '' ];
// lines.splice(lines.length - 1, 1);
const qtdCentros = +lines.splice(0, 1);
const qtdItens = [];
const produtos = [];
for(let i = 0; i < lines.length; i++) {
    if(lines[i].trim().split(' ').length === 1) {
        qtdItens.push(lines.splice(i, 1));
    }
}
let ultQtdItens = 0;
for(let i = 0; i < qtdCentros; i++) {
    const centroAtual = lines.slice((0 + ultQtdItens), ultQtdItens + (+qtdItens[i]));
    produtos[i] = [];
    for(let j = 0; j < centroAtual.length; j++) {
        produtos[i].push({quantidade: +centroAtual[j].split(' ')[0], valor: +centroAtual[j].split(' ')[1]});
    }
    ultQtdItens += +qtdItens[i];
}
const totaisCentros = [];
for(let i = 0; i < produtos.length; i++) {
    totaisCentros[i] = 0;
    produtos[i].forEach(item => {
        totaisCentros[i] += item.quantidade * item.valor;
    });
}

totaisCentros.forEach(item => console.log(item));
console.log(totaisCentros.reduce((prev, cur) => prev + cur));