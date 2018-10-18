const lines = ('2\n10\n4\n15\n-1\n').split('\n');

const res = [];
for(let i = 0; i < lines.length - 1; i++) {
    if(lines[i] == '-1') {
        break;
    }

    res.push(mersenneSequence(+lines[i]));
}

function mersenneSequence(n) {
    let total = 0;
    let i = 1; 
    while(i <= n) {
        total += Math.pow(2, i) - 1;
        i++;
    }
    return total;
}

for(let i in res) {
    console.log(res[i]);
}