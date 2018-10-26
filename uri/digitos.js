let lines = '4\n1 1\n2 10\n3 9\n100 100\n'.split('\n');

const qtdEntradas = +lines[0];
for(let i = 1; i <= qtdEntradas; i++) {
    const n1 = +lines[i].split(' ')[0];
    const n2 = +lines[i].split(' ')[1];

    let r = Math.pow(n1, n2);

    if(r.toString().split('e').length < 2) {
        console.log(r.toString().length);
    } else {
        r = +r.toString().split('+')[1];
        console.log(r+1);
    }
}