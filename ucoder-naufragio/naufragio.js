console.time();
const lines = ('Bill Gates;M;65;N;S\nManoel Joaquim;M;25;N;N\nMaria Silva;F;45;N;N\nDrauzio Varela;M;60;S;N\nAda Lovelace;F;50;N;S\nJose Silva;M;18;N;N\nZezinho;M;8;N;N\n').split('\n');

let passageiros = [];
for (let i = 0; i < lines.length - 1; i++) {
    const dadosPessoa = lines[i].split(';');
    passageiros.push({ nome: dadosPessoa[0], sexo: dadosPessoa[1], idade: +dadosPessoa[2], medico: dadosPessoa[3] == 'S' ? true : false, programador: dadosPessoa[4] == 'S' ? true : false })
}

passageiros = passageiros.sort((a, b) => a.idade - b.idade);

for (let i = 0; i < passageiros.length; i++) {

    if (passageiros[i].idade <= 12) {
        passageiros[i].prioridade = 1;
    } else if (passageiros[i].medico) {
        passageiros[i].prioridade = 2;
    } else if (passageiros[i].programador) {
        passageiros[i].prioridade = 3;
    } else {
        passageiros[i].prioridade = 4;
    }

    if(passageiros[i].sexo == 'M') {
        passageiros[i].prioridade += 4; 
    }
}

passageiros = passageiros.sort((a, b) => a.prioridade - b.prioridade);

for (let i = 0; i < passageiros.length; i++) {
    console.log(`${i + 1} ${passageiros[i].nome.trim()}`);
}
console.timeEnd();