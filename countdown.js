const EventEmitter = require('events').EventEmitter;

class Countdown extends EventEmitter { 
	constructor(seconds, superstitious) {
		super();
		this.seconds = seconds; 
		this.superstitious = !!superstitious;
	} 

	go() {
		const countdown = this;
		const timeoutIds = [];
		return new Promise(function(resolve, reject) {
			for(let i=countdown.seconds; i>=0; i--) {
				timeoutIds.push(setTimeout(function() {
					countdown.emit('tick', i);
					if(i===0) resolve();
				}, (countdown.seconds-i)*1000))
			} 
		});
	} 
}

const c = new Countdown(5);

c.on('tick', function(i) { 
	if(i>0) console.log(i + '...');
});

c.go()
	.then(launch)
	.then(function(msg) {
		console.log(msg); 
	})
	.catch(function(err) {
		console.error("Houston, we have a problem....");
	})

function launch() {
	return new Promise(function(resolve, reject) {
		console.log("Lift off!"); 
		setTimeout(function() {
			resolve("In orbit!");
		}, 2*1000); // a very fast rocket indeed
	}); 
}

