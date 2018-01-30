#!/usr/bin/env node
const fs = require('fs');

const generateSampleInput = (fileName, cb) => {
    fileName = fileName || './sample.txt';
    let cnt = 1;
    let str = '';
    for(let i=0; i<700000; ++i) {
        str += cnt + ' ';
        if((i+1) % 66 == 0) {
            ++cnt;
        }

        if((i+1) % 20 == 0) {
            str += '.';
        }
    }
    fs.writeFile(fileName, str, cb);
}
module.exports = generateSampleInput;