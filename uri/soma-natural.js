// let lines = '1 5\n'.split('\n');
// let lines = '1 1000\n'.split('\n');
// let lines = '10 20\n'.split('\n');
let lines = '1 1000000000\n'.split('\n');

let a = +lines[0].split(' ')[0];
let b = +lines[0].split(' ')[1];

console.log(((a + b) * (b - a + 1)) / 2);

