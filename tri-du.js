console.time('tempo');
const lines = ('10 7').split('\n');

let cartas = lines[0].split(' ');
cartas = cartas.sort((a, b) => b - a);

console.log(cartas[0]);
console.timeEnd('tempo');