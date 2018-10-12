// const lines = ('2002\n560\n560\n882').split('\n');
const lines = ('416\n8\n200\n208').split('\n');
const lines = ('326\n123\n40\n163').split('\n');
// const lines = ('12\n3\n3\n6').split('\n');

if(+lines[0] == ((+lines[1]) + (+lines[2]) + (+lines[3]))) {
    if(+lines[3] == ((+lines[1]) + (+lines[2]))) {
        console.log('S')
    } else {
        console.log('N')
    }
} else {
    console.log('N')
}