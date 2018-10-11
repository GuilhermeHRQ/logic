let lines = ('0 0 5 6').split('\n');

let soma = 0;
lines[0].split(' ').forEach((c, i) => {
    if(i < 2) {
        soma -= (+c); 
    } else {
        soma += (+c);
    }
});

console.log(soma);