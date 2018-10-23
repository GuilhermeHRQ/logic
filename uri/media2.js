let lines = '5.0\n6.0\n7.0'.split('\n');

const n1 = +lines[0];
const n2 = +lines[1];
const n3 = +lines[2];

let r = ((n1 * 2) + (n2 * 3) + (n3 * 5)) / 10;

console.log(`MEDIA = ${r.toFixed(1)}`);