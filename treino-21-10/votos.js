const lines = ('4\n7\n1 2 3 4 5 6 7\n8\n256 16 1024 512 128 4096 64 2048\n5\n1 2 3 10 2\n10\n10 10 10 10 10 1000 10 11 11 11\n').split('\n');

for(let i = 0; i < lines.length; i++) {
    if(lines[i].split(' ').length === 1) {
        lines.splice(i, 1);
        i--;
    }
}
let votos = [];
const saida = [];
for(let i = 0; i < lines.length; i++) {
    let todosVotos = lines[i].split(' ');
    votos.push([]);
    for(let j = 0; j < todosVotos.length; j++) {
        votos[i].push({candidato: j+1, votos: +todosVotos[j]});
    }
    votos[i] = votos[i].sort((a, b) => b.votos - a.votos).slice(0, 3);
    
    saida.push(`${votos[i][0].votos} ${votos[i][1].votos} ${votos[i][2].votos}`)
}

for(let i = 0; i < saida.length; i++) {
    console.log(saida[i]);
}

