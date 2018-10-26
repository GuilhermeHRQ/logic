let lines = 'You _should_ see the new walrus at the zoo!\nMove it from *Accounts Payable* to *Receiving*.\nI saw _Chelydra serpentina_ in *Centennial Park*.\n_ _ __ _ yabba dabba _ * dooooo * ****\n_now_I_know_*my*_ABC_next_time_*sing*it_with_me\n'.split('\n');

for(let i = 0; i < lines.length - 1; i++) {
    let frase = lines[i].split('');
    let abrir_ = true;
    let abrirO = true;
    for(let j = 0; j < frase.length; j++) {
        if(frase[j] === '_') {
            frase[j] = abrir_ ? '<i>' : '</i>';
            abrir_ = !abrir_;
        } else if(frase[j] === '*') {
            frase[j] = abrirO ? '<b>' : '</b>';
            abrirO = !abrirO;
        }
    }

    frase = frase.join('');
    console.log(frase);
}