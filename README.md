# WordSearch
> Search for a word in a file and print the lines that contain that word.

## Description

### Search a word in a file
* `performSearch.js` file allows you to search for a particular word a file.
Example usage: 
```sh
$ node  performSearch.js /path/to/fileToBeSearched
```
* `lib/search.js` file contains the logic implemented for searching the word in the file.
* `lib/inputGenerator.js` file contains the logic used to generate the sample input file.

### Create a sample input file
#### `populateInputFile.js` file allows you to create a sample input file to test the script.
Example usage: 
```sh
$ node  populateInputFile.js /path/to/outputFile
```
## Unit tests
#### I have used mocha/chai to write unit tests. The tests can be found in `tests` directory in source root.
### Run tests
```sh
npm run test
```