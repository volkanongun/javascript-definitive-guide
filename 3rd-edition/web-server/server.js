const http = require('http');
const fs = require('fs'); 

const server = http.createServer(function(req, res) { 
	if(req.method === 'GET' && req.url === '/favicon.ico') {
		fs.createReadStream('favicon.ico');
		fs.pipe(res); // this replaces the call to 'end'
	}else{
		console.log(`${req.method} ${req.url}`); 
		res.end('Hello world!');
	}
});

const port = 8080; 
server.listen(port, function() {
	console.log(`server startd on port ${port}`);
});