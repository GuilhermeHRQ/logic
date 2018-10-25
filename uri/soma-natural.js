// let lines = '1 5\n'.split('\n');
// let lines = '1 1000\n'.split('\n');
let lines = '10 20\n'.split('\n');

const a = +lines[0].split(' ')[0];
const b = +lines[0].split(' ')[1];

let total = 0;
for(let i = a; i <= b; i++) {
    total += i;
}

console.log(total+'\n');
