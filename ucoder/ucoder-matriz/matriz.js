const lines = ('11.50 12.80 13.45\n21.10 22.20 23.30\n31.50 32.90 33.55\n').split('\n');

const produtos = [];
let diagonalPrincipal = [];
let diagonalSecundaria = [];
for(let i = 0; i < lines.length - 1; i++) {
    produtos.push(lines[i].split(' '));
    for(let j = 0; j < produtos[i].length; j++) {
        if(i === j) {
            diagonalPrincipal.push((parseFloat(produtos[i][j])).toFixed(2));
        }

        if(i + j === 2) {
            diagonalSecundaria.push((parseFloat(produtos[i][j])).toFixed(2));
        }
    }
}

console.log(`DIAGONAL PRINCIPAL ${diagonalPrincipal.join(' ')} ${diagonalPrincipal.reduce((a, b) => parseFloat(a) + parseFloat(b)).toFixed(2)}`);
console.log(`DIAGONAL SECUNDARIA ${diagonalSecundaria.join(' ')} ${diagonalSecundaria.reduce((a, b) => parseFloat(a) + parseFloat(b)).toFixed(2)}`);