console.time();
// const lines = ('100000 1\n100000').split('\n');
const lines = ('100000 1\n1').split('\n');
// const lines = ('13 3\n2 6 13').split('\n');

// if (lines[0] == '100000 1') {
//     console.log('99999');
// } else {
let a = Array(+lines[0].split(' ')[0]);
let preenchidos = lines[1].split(' ').map(item => (+item) - 1);
let dia = 0;

preenchidos.forEach(item => {
    a[item] = true;
});

let continua = true;
while (continua) {
    dia++;
    let ultimos = [];
    for (let i = 0; i < preenchidos.length; i++) {
        if ((preenchidos[i] < a.length - 1) && (!a[preenchidos[i] + 1])) {
            a[preenchidos[i] + 1] = true;
            ultimos.push(preenchidos[i] + 1);
        }
        if ((preenchidos[i] > 0) && (!a[preenchidos[i] - 1])) {
            a[preenchidos[i] - 1] = true;
            ultimos.push(preenchidos[i] - 1);
        }
    }
    preenchidos = ultimos;

    let parar = true;
    for (let i = 0; i < a.length; i++) {
        if (!a[i]) {
            parar = false;
            break;
        }
    }

    if (parar) {
        continua = false;
    }
}
console.log(dia);
// }

console.timeEnd();