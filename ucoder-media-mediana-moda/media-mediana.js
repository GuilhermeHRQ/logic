let lines = ('1000.00\n2000.00\n7000.00\n7000.00\n13000.00\n').split('\n');
lines.splice(lines.length - 1, 1);

lines = lines.sort((a, b) => a - b);

let mediana;
if(lines.length % 2 != 0) {
    mediana = lines[Math.ceil(lines.length / 2)];
} else {
    mediana = parseFloat(lines[Math.floor(lines.length / 2)]) + parseFloat(lines[Math.ceil(lines.length / 2)]) / 2;
}

console.log(parseFloat(mediana).toFixed(2));

let media = lines.reduce((a, b) => parseFloat(a) + parseFloat(b)) / lines.length;

console.log(media.toFixed(2));

let obj = [];

for(let i = 0; i < lines.length; i++) {
    if(!obj[lines[i]]) {
        obj[lines[i]] = 1;
    } else {
        obj[lines[i]]++;
    }
}

const numeros = [];
for(let i in obj) {
    numeros.push({numero: i, quantidade: obj[i]});
}

console.log(numeros.sort((a, b) => b.quantidade - a.quantidade)[0].numero);