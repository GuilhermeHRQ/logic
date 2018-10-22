// let lines = ('8.0 9.0 7.0 10.0\n').split('\n');
// let lines = ('7.7 3.8 1.0 3.8\n').split('\n');
// let lines = ('3.6 8.4 3.5 9.5\n').split('\n');
// let lines = ('5.8 9.4 8.8 8.7\n').split('\n');
let lines = ('6.2 5.8 8.7 6.1\n').split('\n');

let notas = lines[0].split(' ');

let resultado = (notas.reduce((a, b) => parseFloat(a) + parseFloat(b)) / 4).toFixed(2);
console.log(parseFloat(resultado));


// resultado[1] = resultado[1].substring(0, 1);

// console.log(resultado.join('.'));