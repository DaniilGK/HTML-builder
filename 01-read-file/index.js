const fs = require('fs');
const path = require('path');
const { stdout } = process;
const stream = fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf-8');

stream.on('data', (ch) => stdout.write(ch));
stream.on('error', (err) => console.log(err.message));