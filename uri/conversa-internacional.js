// let lines = '2\n3\nportugues\nchines\nportugues\n2\nespanhol\nespanhol\n'.split('\n');
let lines = '2\n5\nBangla\nBangla\nBangla\nBangla\nBangla\n5\nBangla\nBangla\nBangla\nArabic\nBangla\n'.split('\n');

const qtdCasos = +lines[0];
let qtdGrupos = [];
for(let i = 1; i < lines.length - 1; i++) {
    if(!isNaN(+lines[i])) {
        qtdGrupos.push(+lines[i]);
    }
}

let grupos = [];
let pula = 0;
for(let i = 0; i < qtdGrupos.length; i++) {
    grupos.push(lines.slice((2+pula), ((2+pula) + qtdGrupos[i])));

    if(grupos[i].every(item => item == grupos[i][0])) {
        console.log(grupos[i][0]);
    } else {
        console.log('ingles');
    }
    pula += qtdGrupos[i]+1;
}