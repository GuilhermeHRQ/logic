// let lines = ('Batatinha quando nasce').split('\n');
let lines = ('BatatA').split('\n');
const teclado = [
    ['a', 'b', 'c', 'A', 'B', 'C'],
    ['d', 'e', 'f', 'D', 'E', 'F'],
    ['g', 'h', 'i', 'G', 'H', 'I'],
    ['j', 'k', 'l', 'J', 'K', 'L'],
    ['m', 'n', 'o', 'M', 'N', 'O'],
    ['p', 'q', 'r', 's', 'P', 'Q', 'R', 'S'],
    ['t', 'u', 'v', 'T', 'U', 'V'],
    ['w', 'x', 'y', 'z', 'W', 'X', 'Y', 'Z']
];

let frase = lines[0].split('');
let total = 0;
for(let i = 0; i < frase.length; i++) {
    if(frase[i] == ' ') {
        total++;
    } else {
        for(let j = 0; j < teclado.length; j++) {
            if(teclado[j].indexOf(frase[i]) !== -1) {
                total += teclado[j].indexOf(frase[i]) + 1;
            }
        }
    }
}

console.log(`${total}\n`);
