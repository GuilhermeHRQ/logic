let lines = 'He has four fanatic fantastic fans\nThere may be no alliteration in a sequence\nRound the rugged rock the ragged rascal ran\narea artic Soul Silly subway ant artic none\n'.split('\n')

for(let i = 0; i < lines.length - 1; i++) {
    const words = lines[i].split(' ');
    let total = 0;
    let pula = 0;
    let pulaCasos = 0;
    for(let i = 0; i < words.length; i++) {
        const firstLetter = words[i].substring(0, 1).toLowerCase();
        let equals = 0;
        
        for(let j = pulaCasos; j < words.length; j++) {
            if(words[j].substring(0, 1).toLowerCase() != firstLetter) {
                break;
            }
            equals++;
        }
        i += equals >= 2 ? equals - 1 : 0;
        pulaCasos += equals || 1;
        if(equals >= 2) {
            total++;
        }
    }
    console.log(total);
}