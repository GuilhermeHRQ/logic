console.time();
const lines = ('100000 1\n1');

let a = Array(+lines[0].split(' ')[0]).fill(false);
let preenchidos = lines[1].split(' ').map(item => (+item)-1);
let dia = 0;

preenchidos.forEach(item => {
    a[item] = true;
});

while(!a.every(item => item)) {
    dia++;
    let ultimos = [];
    for(let i = 0; i < preenchidos.length; i++) {
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
}

console.log(dia);
console.timeEnd();