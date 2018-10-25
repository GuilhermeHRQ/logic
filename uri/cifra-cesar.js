let lines = '6\nVQREQFGT\n2\nABCDEFGHIJKLMNOPQRSTUVWXYZ\n10\nTOPCODER\n0\nZWBGLZ\n25\nDBNPCBQ\n1\nLIPPSASVPH\n4\n'.split('\n');

const qtdTestes = lines[0];

let frases = [];
let pula = 0;
for(let i = 1; i <= qtdTestes; i++) {
    frases.push({frase: lines[i + pula], quantidade: lines[(i+1) + pula]});
    pula += 1;
}

for(let i = 0; i < frases.length; i++) {
    const quantidade = frases[i].quantidade;

    if(!quantidade) {
        console.log(frases[i].frase);
    } else {
        const fraseSplit = frases[i].frase.split('');

        for(let j = 0; j < fraseSplit.length; j++) {
            fraseSplit[j] = trocaLetra(fraseSplit[j], quantidade);
        }

        console.log(fraseSplit.join(''));
    }
}

function trocaLetra(letra, quantidade) {
    let newCharCode = letra.charCodeAt() - quantidade;

    if(newCharCode < 65) {
        const diferenca = 65 - newCharCode;
        newCharCode = 91 - diferenca;
    }

    return String.fromCharCode(newCharCode);
}
