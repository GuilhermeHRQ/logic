let lines = ('Ana Tanajura\n14m25c 14m18c 14m24c\nRenata Trator\n14m19c 14m29c 14m03c\nPaula Melao\n14m18c 14m16c 14m27c').split('\n');

let competidores = [];
for(let i = 0; i < lines.length-1; i++) {
	if(i % 2 === 0){
		competidores.push({nome: lines[i], tempos: lines[i+1].split(' ')});
	}
}
competidores.forEach((comp, i) => {
	for(let i = 0; i < comp.tempos.length; i++) {
		comp.tempos[i] = comp.tempos[i].replace(/[A-Za-z]/g, '').replace(/(\d{2})(\d+)/g, '$1.$2');
	};
	comp.tempos.sort((a, b) => b - a);
	comp.tempos = comp.tempos[0];
	comp.nome = `${comp.nome} ${comp.tempos.split('.')[0]}m${comp.tempos.split('.')[1]}c`;
});
aux = competidores[0].tempos;
for(let i = 0; i < competidores.length-1; i++) {
	if(competidores[i].tempos < competidores[i+1].tempos) {
		aux = competidores[i];
		competidores[i] = competidores[i+1];
		competidores[i+1] = aux;
	};
};
competidores.forEach(item => {
	console.log(item.nome);
});