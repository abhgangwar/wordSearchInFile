const generateInput = require('./lib/inputGenerator');
generateInput(process.argv[2], (err) => {
    if(err) {
        console.log('Error while creating input file');
    } else {
    	console.log('Create a sample input file');
    }
});