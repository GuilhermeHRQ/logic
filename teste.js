// const texto = '4\nIntrodução ao carro\n1233\n56\nMudanças nas marchas\n999999\n129\nDerrapagens em alta velocidade\n888\n44\nEstilo a toda prova\n87653\n523';
// const texto = '4\nIntrodução ao carro\n1233\n55\nMudanças nas marchas\n999999\n128\nDerrapagens em alta velocidade\n888\n43\nEstilo a toda prova\n87653\n522';
const texto = '4\nIntrodução ao teste\n1233\n55\nDerrapagens em alta teste\n999999\n128\nMudanças nas testes\n888\n43\nTeste a toda prova\n87653\n522';
let lines = texto.split('\n');
// console.log(lines)
const n = lines.splice(0, 1);
console.log(lines);
let videos = [];
let j = 0;

for (let i = 0; i < +n; i++) {
    videos[i] = {
        nome: lines[0 + j],
        acessos: lines[1 + j],
        valor: lines[2 + j]
    };
    j += lines.length / +n ;
}
// console.log(videos);
// videos.sort((a, b) => {
//     return +b.acessos - +a.acessos;
// })

// var maisAcessado = videos[0].nome;

// videos.sort((a, b) => {
//     return +b.valor + +a.valor;
// })

// var menorValor = videos[0].nome;
// var total = videos.reduce((a, b) =>{ return {valor: +a.valor + +b.valor}}).valor;

// console.log(`${maisAcessado}\n${menorValor}\n${total}`);