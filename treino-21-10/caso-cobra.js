let lines = ('class user\ncurrentUser\nclass amazing_pencil_sharpener\ngrandma\ntheStruggleIsReal\n').split('\n');

const saidas = [];
for (let i = 0; i < lines.length - 1; i++) {
    if (lines[i].split(' ')[0] === 'class') {
        let variavel = lines[i].split(' ')[1];

        variavel = variavel.split('_');
        for (let j = 0; j < variavel.length; j++) {
            variavel[j] = variavel[j].substring(0, 1).toUpperCase() + variavel[j].substring(1, variavel[j].length);
        }
        saidas.push('class ' + variavel.join(''));

    } else {
        let variavel = lines[i].split('');

        for (let j = 0; j < variavel.length; j++) {
            if (variavel[j].charCodeAt() > 64 && variavel[j].charCodeAt() < 91) {
                variavel[j] = variavel[j].toLowerCase();
                variavel.splice(j, 0, '_');
            }
        }
        saidas.push(variavel.join(''));
    }
}

for(let i = 0; i < saidas.length; i++) {
    console.log(saidas[i]);
}