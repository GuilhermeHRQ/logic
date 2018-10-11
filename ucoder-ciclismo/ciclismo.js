// const lines = ('Mohamed Morreu\n45\nAli Said Saiu\n43\nChing Ling\n41').split('\n');
const lines = ('Mohamed Morreu\n43\nAli Said Saiu\n41\nChing Ling\n45').split('\n');

let competidores = [];
for(let i = 0; i < lines.length-1; i++) {
	if(i % 2 === 0){
		competidores.push({nome: lines[i], velocidade: +lines[i+1]});
	}
}
for(let i = 0; i < competidores.length; i++) {
    const vMetrosPseg = competidores[i].velocidade / 3.6;
    let tempoGasto = (75000 / vMetrosPseg) / 60;
    const mins = Math.floor(tempoGasto % 60);
    const horas =  Math.floor(tempoGasto / 60);
    competidores[i].tempoGasto = +`${horas}.${mins}`;
    competidores[i].nome = `${competidores[i].nome} ${horas}h${mins}`;
}
competidores.sort((a, b) => a.tempoGasto - b.tempoGasto).forEach(comp => console.log(comp.nome));


