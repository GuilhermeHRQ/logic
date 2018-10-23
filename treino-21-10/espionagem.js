let lines = ('O PROBLEMA C DA MARATONA\n3\nP QSPCSFNB D EP NBSBEPOB\nT UWTGWJRF H IF RFWFYTSF\nD F GD PDUDWRQDR SUREOHP\nMARATONA\n3\nP QSPCSFNB D EP NBSBEPOB\nT UWTGWJRF H IF RFWFYTSF\nD F GD PDUDWRQDR SUREOHP\n').split('\n');

let frases = [];
for(let i = 0; i < lines.length - 1; i++) {
    if(/(\d)/.test(lines[i])) {
        frases.push({frase: lines[i - 1], casos: lines.slice(i+1, (i + 1) + (+lines[i]))});
    }
}

for(let i = 0; i < frases.length; i++) {
    const frase = frases[i].frase.split(' ');

    for(let j = 0; j < frases[i].casos.length; j++) {
        const caso = frases[i].casos[j].split(' ');

        for(let k = 0; k < caso.length; k++) {
            if()
        }
    }
}