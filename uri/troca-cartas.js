console.time();
let lines = '1 1\n1000\n1000\n3 4\n1 3 5\n2 4 6 8\n10 9\n1 1 2 3 5 7 8 8 9 15\n2 2 2 3 4 6 10 11 11\n0 0\n'.split('\n');
// let lines = '100 100\n46 46 47 48 48 48 49 49 49 49 50 51 51 51 52 53 53 53 53 54 54 55 55 55 56 56 57 58 58 59 59 59 59 60 60 60 61 61 61 62 62 62 63 63 63 63 63 63 64 64 64 64 64 64 64 65 65 66 66 66 67 67 67 67 68 68 68 69 70 70 70 70 71 71 71 71 71 72 72 72 72 72 72 73 73 73 73 73 74 74 74 74 74 74 75 75 75 75 76 76\n15 15 16 16 16 17 17 18 18 19 22 22 24 26 27 27 28 28 29 29 30 31 32 32 33 33 34 34 35 36 38 38 39 39 40 40 41 41 41 41 42 43 43 43 44 45 45 45 45 46 47 47 49 49 51 51 52 52 54 54 56 56 57 57 57 59 59 60 61 61 62 62 63 64 64 65 65 66 67 69 69 70 74 74 75 76 77 77 79 79 80 82 82 84 85 85 86 86 87 88\n0 0\n'.split('\n');

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
        if(binarySearch(aux, lista[i]) == -1) {
            aux.push(+lista[i]);
        }
    }

    return aux;
}

function verificarPossiveisTrocas(m1, m2) {
    let total = 0;

    for(let i = 0; i < m1.length; i++) {
        if(binarySearch(m2, m1[i]) == -1) {
            total++;
        }
    }

    return total;
}

function binarySearch (list, value) {
    let start = 0
    let stop = list.length - 1
    let middle = Math.floor((start + stop) / 2)
  
    while (list[middle] != value && start < stop) {
      if (value < list[middle]) {
        stop = middle - 1
      } else {
        start = middle + 1
      }
  
      middle = Math.floor((start + stop) / 2)
    }
  
    return (list[middle] != value) ? -1 : middle
  }
console.timeEnd();