/**
 * EXPLAIN
 * Linha com as respectivas quantidades de tomada na régua (4 réguas)
 * Somar tudo e subtrair 3
 */
console.time();
const lines = ('2 4 3 2');
const qtdTomadas = lines.split(' ').reduceRight((a,b) => (+a) + (+b)) - 3;
console.log(qtdTomadas);
console.timeEnd();