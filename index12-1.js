var fs = require('fs')

function fileCopy(filename1, filename2, done) {
	var input = fs.createReadStream(filename1); 
	var output = fs.createWriteStream(filename2);

	input.on("data", function(d) { output.write(d); }); 
	input.on("error", function(err) { throw err; }); 
	input.on("end", function() {
		output.end();
		if (done) done();
	}); 
}

fileCopy("logo.png", "logo2.png", function(){
	console.log("done!")
})