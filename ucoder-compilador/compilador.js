const lines = ('4\nif x > y nota1 = 10; else nota2 = 10;\npreco = y + 123 + valor\nwhile c@sa = pequena valor; else valor2;\nteste = teste2 * 5\n').split('\n');

const casos = +lines.splice(0, 1);

const expressoes = [];
const retornos = [];
for (let i = 0; i < casos; i++) {
    expressoes.push(lines[i].replace(/[;]+/g, '').split(' '));
    let valida = true;

    for (let j = 0; j < expressoes[i].length; j++) {
        const expressaoAtual = expressoes[i][j];
        if (!(expressaoAtual.split('').every(a => /([A-z0-9]{1,})/g.test(a)) && /(^[A-Za-z]){1}/g.test(expressaoAtual)) && !(/^[0-9]+$/g.test(expressaoAtual)) && !(/[\=\+\>]/g.test(expressaoAtual))) {
            valida = false;
        }
    }

    retornos.push(valida ? 'OK' : 'ERRO');
}

for(let i = 0; i < retornos.length; i++) {
    console.log(retornos[i]);
}