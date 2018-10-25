// let lines = ('5.0\n7.1\n').split('\n');
let lines = ('0.0\n7.1\n').split('\n');

const n1 = +lines[0];
const n2 = +lines[1];

let r = ((n1 * 3.5) + (n2 * 7.5)) / 11;

console.log(`MEDIA = ${r.toFixed(5)}`);