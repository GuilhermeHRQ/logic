const lines = ('4\nTexto #3\nabcABC1\nvxpdylY .ph\nvv.xwfxo.fd').split('\n');

const qtdTestes = lines.splice(0, 1);

for (let i = 0; i < lines.length; i++) {
    let frase = lines[i].split('');

    for (let j = 0; j < frase.length; j++) {
        if (frase[j].toUpperCase().charCodeAt() > 64 && frase[j].toUpperCase().charCodeAt() < 91) {
            frase[j] = String.fromCharCode(frase[j].charCodeAt() + 3);
        }
    }

    frase = frase.reverse();
    const metade = Math.trunc(frase.length / 2);

    for(let j = metade; j < frase.length; j++) {
        frase[j] = String.fromCharCode(frase[j].charCodeAt() - 1);
    }

    console.log(frase.join(''));
}
