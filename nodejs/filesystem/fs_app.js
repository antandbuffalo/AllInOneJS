const fs = require('fs');
const greet = fs.readFileSync(`${__dirname}/greet.txt`, 'utf8');
console.log(greet);

fs.readFile(`${__dirname}/greet.txt`,'utf8', function(err, data) {
    if(err === null) {
        console.log(data);
    }
    else {
        console.log(err);
    }
});

console.log('eof');