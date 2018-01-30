#!/usr/bin/env node
const fs = require('fs');

const search = (searchWord, fileName, cb) => {
    if(!searchWord) {
        console.log('Error: Wrong input for word to be searched');
    } else {
        fileName = fileName || './sample.txt';
        const stream = fs.createReadStream(fileName);
        let data = '';
        stream.on('data', (d) => {
            data += d.toString();
        });

        stream.on('error',function(err){
            console.log('Error reading file', err);
        });

        stream.on('close',function(err){
            startSearch(searchWord, data, cb);
        });
    }
}

const startSearch = (searchWord, data, cb) => {
    let matchedLines = [];
    let finished = 0;
    let lines = data.split('.');
    lines.forEach((line) => {
        process.nextTick(() => {
            const match = findWord(searchWord, line);
            if(match) {
                matchedLines.push(match);
            }
            ++finished;
            if(finished == lines.length) {
                cb(null, matchedLines);
            }
        });
    });
}

const findWord = (word, line) => {
    let words = line.split(' ');
    if(words.indexOf(word) >= 0) {
        return line;
    }
}

module.exports = search;
