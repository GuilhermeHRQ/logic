let lines = ('4 5 6').split('\n');

console.log(lines[0].split(' ').sort((a, b) => b - a)[1]);