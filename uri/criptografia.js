// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');

let lines = ('10\nJll9n9hdba7\nNhd7*\(hdLKgTAfadZAC\n123FRaWQWqlodJ\n"\'?>,_nbI\(*7635$\nLkoUUydstygGfL$$#2SRQADeAbaga\nyjjhjYUgyu56Bhg"jhgJH@#$$f\nGHrs355JHGd77jhgKJH\nJKuyHYtyIY\nB"}[JHg^jk&jhhJKhgAngLAdeshjhgHvdjk\nuiYjnkFYUKfy&^78JHv#75JHYGN>h\n').split('\n');
// let lines = ('15\nlllll\nll3ll\n3llll\nllll3\nlll l\nMozillaFirefox\n#3#2#1\nabcd\nabcde\nEntrada Valida\nJava\njava\nhsXseaj#313{xas} 1la-1\n1024.py\nfl.GhexaAy,oKlxyYzd}s;\n').split('\n');

const qtdTestes = lines[0];

for (let i = 1; i <= qtdTestes; i++) {
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

