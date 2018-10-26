// let lines = '11 1998\nfulano de tal\ncirardo vatares iloveira\n    frederico  dilson    teves  \nglauber leite\ngimo laerte gomes\ngerson\nantovo matadouro    silva do rego\nclovis varins ito\ncrevo   vigrgula inova\nbasse nordgren\na m s d r\n'.split('\n');
let lines = '1 2018\nbatata\n'.split('\n');
const qtdCasos = +lines[0].split(' ')[0];
let usuarios = [];
let totalCasos = 0;

for(let i = 1; i <= qtdCasos; i++) {
    let nome = lines[i].split(' ');
    let letrasUser = [];

    for(let j = 0; j < nome.length; j++) {
        if(nome[j].length) {
            letrasUser.push(nome[j].substr(0, 1));
        }
    }

    letrasUser = letrasUser.join('');

    if(usuarios.indexOf(letrasUser) === -1) {
        usuarios.push(letrasUser);
    } else {
        totalCasos++;
    }
}

console.log(totalCasos);