const path = require('path');
const fs = require('fs');
const expect = require('chai').expect;
const search = require('../lib/search');
const generateInput = require('../lib/inputGenerator');

describe('Search a word in file', () => {
    const fileName = path.join(__dirname, './input.txt');
    before((done) => {
        generateInput(fileName, done);
    });
    it('should search for "17" in the input file', (done) => {
        search('17', fileName, (err, matchedLines) => {
            const expected = '16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 17 17 17 17 \n' + 
                '17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 \n' +
                '17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 \n' +
                '17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 \n' +
                '17 17 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 ';
            expect(expected).to.equal(matchedLines.join('\n'));
            done(err);
        });
    });
    after((done) => {
        fs.unlink(fileName, done);
    })
})