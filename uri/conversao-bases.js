let lines = '3\n101 bin\n101 dec\n8f hex\n'.split('\n');

const qtdCasos = lines[0];

for (let i = 1; i <= qtdCasos; i++) {
    const num = lines[i].split(' ')[0];
    const formmat = lines[i].split(' ')[1];

    console.log(`Case ${i}:`);
    if (formmat == 'dec') {
        const hex = (+num).toString(16);
        const bin = (+num).toString(2);

        console.log(`${hex} hex`);
        console.log(`${bin} bin`);
    } else if (formmat == 'bin') {
        const hex = parseInt(num, 2).toString(16);
        const dec = parseInt(num, 2);

        console.log(`${dec} dec`);
        console.log(`${hex} hex`);
    } else {
        const dec = parseInt(num, 16);
        const bin = parseInt(num, 16).toString(2);

        console.log(`${dec} dec`);
        console.log(`${bin} bin`);
    }
    console.log('');
}