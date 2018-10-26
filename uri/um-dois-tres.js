let lines = '3\nowe\ntoo\ntheee\n'.split('\n');
// let lines = '3\noxe\ntuo\ntjree\n'.split('\n');
// let lines = '9\nthree\nune\nome\ntwu\ntvo\nxwo\ntxree\nthrei\nyhree\n'.split('\n');

// let palavras = ['one', 'two'];
// lines.splice(0, 1);

// for (let i = 0; i < lines.length - 1; i++) {
//     if (lines[i].length > 3) {
//         console.log(3);
//     } else {
//         const entrada = lines[i].split('');
//         for (let j = 0; j < palavras.length; j++) {
//             const palavra = palavras[j].split('');
//             const filtro = entrada.filter((ent, i) => {
//                 if (palavra.indexOf(ent) === i) {
//                     return ent;
//                 }
//             });

//             if (filtro.length >= entrada.length - 1) {
//                 console.log(j+1);
//                 break;
//             }
//         }
//     }
// }
// console.log('');

// COM REGEXP
const qtdEntrada = lines[0];
for (let i = 1; i <= qtdEntrada; i++) {
    if (lines[i].length > 3) {
        console.log(3);
    } else {
        if(/(.ne|o.e|on.)/g.test(lines[i])) {
            console.log(1);
        } else {
            console.log(2);
        }
    }
}
console.log('');
