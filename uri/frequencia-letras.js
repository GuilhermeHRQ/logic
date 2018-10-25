let lines = '3\nComputers account for only 5% of the country\'s commercial electricity consumption.\nInput\nfrequency letters\n'.split('\n');
// let lines = '9\nProgramming is just awesome. It\'s a different planet.ALl SHould LeaRn This :) ...\nAt the Begi*nning you can start with any programming language.That DoesnT matter.Matter is your starT......\nKeep Solving OJ proBlem On A Daily basis.That\'s really helpful for Developping BASICS of anyone.\nYou can start With anY OJ.That doesn\'t matter.\nRegularly PrtiCipate in OnliNe Contest,776i85..That\'s really helPFul..\nI presoNally prefer URI online Judge.URI is really NIce OJ.Easy to Hard every kind of Problem you can find in URI Online Judge\nURi is one the fantastic siDe.. I also prefer UVA.But for finding easy Problem It can be tireSome.:)\nAt My opinion URI is 100% good OJ.Many people Say that URI is a easy Judge.Ignore those people talk\'s.. Just Keep :*() Gooing..\nBest Of luck.Happy coding :)\n'.split('\n');
const qtdCasos = lines[0];
for (let i = 1; i <= qtdCasos; i++) {
    let objLetras = {};
    let letras = lines[i].split('');

    for (let j = 0; j < letras.length; j++) {
        const letra = letras[j].toLowerCase();
        if (letra.charCodeAt() >= 97 && letra.charCodeAt() <= 122) {
            if (objLetras[letra]) {
                objLetras[letra]++;
            }  else {
                objLetras[letra] = 1;
            }
        }
    }

    let arrayLetras = [];
    Object.keys(objLetras).forEach(item => {
        arrayLetras.push({ letra: item, quantidade: objLetras[item] });
    });

    arrayLetras.sort((a, b) => b.quantidade - a.quantidade);
    arrayLetras = arrayLetras.filter(item => item.quantidade == arrayLetras[0].quantidade).map(item => item.letra);
    arrayLetras.sort();

    console.log(arrayLetras.join(''));
}
