const fs = require('fs');
const readStream = fs.createReadStream(`${__dirname}/content.txt`);
const writeStream = fs.createWriteStream(`${__dirname}/contentCopy.txt`);
readStream.on('data', function(chunk) {
    console.log(chunk.length);
    writeStream.write(chunk);
});

