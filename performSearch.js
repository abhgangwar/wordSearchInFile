#!/usr/bin/env node
const readline = require('readline');
const search = require('./lib/search');
const stdio = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

stdio.question('Enter the word you want to search ? ', (answer) => {
    stdio.close();
    search(answer, process.argv[2] || './sample.txt', (err, matchedLines) => {
        if(err) {
            console.log('Error while searching', err);
        } else {
            console.log(matchedLines.join('\n'));
        }
    });
});
