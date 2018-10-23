console.time();
let lines = '1 1\n1000\n1000\n3 4\n1 3 5\n2 4 6 8\n10 9\n1 1 2 3 5 7 8 8 9 15\n2 2 2 3 4 6 10 11 11\n0 0\n'.split('\n');

lines.splice(lines.length - 1, 1);

let pula = 0;
for(let i = 0; i < lines.length; i++) {
    lines.splice(pula, 1);
    pula += 2;
}

pula = 0;
for(let i = 0; i < lines.length / 2; i++) {
    let menina1 = retirarRepetidas(lines[i + pula].split(' '));
    let menina2 = retirarRepetidas(lines[(i + 1) + pula].split(' '));

    const totalMenina1 = verificarPossiveisTrocas(menina1, menina2);
    const totalMenina2 = verificarPossiveisTrocas(menina2, menina1);

    console.log(totalMenina1 > totalMenina2 ? totalMenina2 : totalMenina1);
    pula += 1;
}

function retirarRepetidas(lista) {
    let aux = [];

    for(let i = 0; i < lista.length; i++) {
        if(!aux.includes(lista[i])) {
            aux.push(lista[i]);
        }
    }

    return aux;
}

function verificarPossiveisTrocas(m1, m2) {
    let total = 0;

    for(let i = 0; i < m1.length; i++) {
        if(!m2.includes(m1[i])) {
            total++;
        }
    }

    return total;
}
console.timeEnd();