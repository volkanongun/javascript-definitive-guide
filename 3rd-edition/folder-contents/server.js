const fs = require('fs');
const path = require('path');

fs.readdir('data', function(err, files) { if(err) {
	console.error("Fatal error: couldn't read data directory.");
	process.exit(1); 
}

const txtFiles = files.filter(f => /\.txt$/i.test(f)); 
	if(txtFiles.length === 0) {
		console.log("No .txt files to process.");
		process.exit(0); 
	}

	for (var i = 0; i < files.length; i++) {

		fs.readFile(path.join(__dirname, 'data/' + files[i]), { encoding: 'utf8' }, function(err, data) {
				if(err) return console.error('Error reading file.'); 
				console.log('File contents:');
				console.log(data);
			}
		);

	}
});