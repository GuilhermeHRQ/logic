const lines = ('Bill Gates;M;65;N;S\nManoel Joaquim;M;25;N;N\nMaria Silva;F;45;N;N\nDrauzio Varela;M;60;S;N\nAda Lovelace;F;50;N;S\nJose Silva;M;18;N;N\nZezinho;M;8;N;N').split('\n');

let passageiros = [];
for (let i = 0; i < lines.length; i++) {
    const dadosPessoa = lines[i].split(';');
    passageiros.push({ nome: dadosPessoa[0], sexo: dadosPessoa[1], idade: +dadosPessoa[2], medico: dadosPessoa[3] == 'S' ? true : false, programador: dadosPessoa[4] == 'S' ? true : false })
}

passageiros = passageiros.sort((a,b) => a.idade - b.idade);

console.log(passageiros);