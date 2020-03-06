const fs = require('fs');
const path = require('path');

try {
	fs.writeFileSync(path.join(__dirname, 'hello.txt'), 'hello from Node!');
} catch(err) {
	console.error('Error writing file.');
}

fs.readFile(path.join(__dirname, 'hello.txt'), { encoding: 'utf8' }, function(err, data) {
		if(err) return console.error('Error reading file.'); 
		console.log('File contents:');
		console.log(data);
	}
);