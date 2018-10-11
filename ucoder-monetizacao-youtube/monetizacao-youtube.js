let lines = ('4\nIntrodução ao carro\n1233\n56\nMudanças nas marchas\n999999\n129\nDerrapagens em alta velocidade\n888\n44\nEstilo a toda prova\n87653\n523').split('\n');

const qtdVideos = lines.splice(0, 1);
console.log(lines);
let videos = [];

for(let i = 0; i < qtdVideos; i++) {
    videos.push({nome: lines[0 + (i * 3)], acessos: +lines[1 + (i * 3)], valor: +lines[2 + (i * 3)]})
}

const maisAcessado = videos.sort((a, b) => b.acessos - a.acessos)[0].nome;
const menorMonetizacao = videos.sort((a, b) => b.valor - a.valor)[3].nome;
let total = 0;

videos.forEach(v => {
    total += v.valor;
});

console.log(`${maisAcessado}\n${menorMonetizacao}\n${total}`);
