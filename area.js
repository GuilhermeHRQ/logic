// let lines = ('218.85\n').split('\n');
let lines = ('341.61\n').split('\n');

lines = parseFloat(lines[0]);
const a = 3.1415 * (Math.pow(lines, 2));

console.log(a.toFixed(4));