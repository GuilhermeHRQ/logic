let lines = '14 4 20\nSe mana Piedade tem casado com Quincas Borba apenas me daria uma esperanca colateral\n16 3 30\nNo dia seguinte entrou a dizer de mim nomes feios e acabou alcunhando me Dom Casmurro\n5 2 2\na de i de o\n5 2 2\na e i o u\n'.split('\n');

const qtdEntradas = (lines.length - 1) / 2;

let casos = [];
let pula = 0;
for(let i = 0; i < qtdEntradas; i++) {
    const linha1 = lines[i+pula].split(' ');
    casos.push({nPalavras: +linha1[0], linhasPagina: +linha1[1], qtdChar: +linha1[2], palavra: lines[i+1+pula]});
    pula +=1;
}

for(let i = 0; i < casos.length; i++) {
    let palavraArray = casos[i].palavra.split(' ');
    let montarLinha = [];
    let qtdLinhas = 0;
    for(let j = 0; j < palavraArray.length; j++) {
        if(montarLinha.join(' ').length + ` ${palavraArray[j]}`.length <= casos[i].qtdChar) {
            montarLinha.push(palavraArray[j]);
        } else {
            montarLinha = [];
            j--;
            qtdLinhas++;
        }
    }

    const r = (qtdLinhas + 1) / casos[i].linhasPagina
    console.log(Math.ceil(r));
}