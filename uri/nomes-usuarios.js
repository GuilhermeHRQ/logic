let lines = '10 1998\nfulano de tal\ncirardo vatares iloveira\n    frederico  dilson    teves  \nglauber leite\ngimo laerte gomes\ngerson\nantovo matadouro    silva do rego\nclovis varins ito\ncrevo   vigrgula inova\nbasse nordgren\n'.split('\n');

const qtdCasos = +lines[0].split(' ')[0];
let usuarios = [];
let totalCasos = 0;

for(let i = 1; i <= qtdCasos; i++) {
    let nome = lines[i].trim().split(' ');
    let letrasUser = [];

    for(let j = 0; j < nome.length; j++) {
        if(nome[j].length) {
            letrasUser.push(nome[j].substr(0, 1));
        }
    }

    if(usuarios.indexOf(letrasUser.join('')) === -1) {
        usuarios.push(letrasUser.join(''));
    } else {
        totalCasos++;
    }
}

console.log(totalCasos + '\n');