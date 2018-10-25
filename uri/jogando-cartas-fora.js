let lines = '7\n19\n10\n6\n0\n'.split('\n');

for(let i = 0; i < lines.length - 2; i++) {
    const tamanho = +lines[i];
    const array = [...Array(tamanho).keys()].map(item => item + 1);
    let discards = [];

    while(array.length >= 2) {
        discards.push(array.splice(0, 1));
        array.push(array.splice(0, 1)[0]);
    }

    console.log(`Discarded cards: ${discards.join(', ')}`);
    console.log(`Remaining card: ${array[0]}`);
}