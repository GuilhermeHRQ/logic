let lines = '10\n3\n5\n8\n3\n'.split('\n');
// let lines = '5\n6\n3\n3\n2\n3\n3\n3\n'.split('\n');

const totalAlbum = +lines[0];
const compradas = +lines[1];
const figurinhas = [];

for(let i = 2; i < lines.length-1; i++) {
    if(!figurinhas.includes(lines[i])) {
        figurinhas.push(lines[i]);
    }
}

console.log(totalAlbum - figurinhas.length);