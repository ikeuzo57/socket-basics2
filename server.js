var PORT = process.env.PORT || 3000;
var moment = require('moment');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);



app.use(express.static(__dirname + '/public'));

<<<<<<< HEAD
io.on('connection', function(socket){
	console.log('User Connected via socket.io!!');

// browser communication
	socket.on('message', function(message){
		console.log('Message received: ' + message.text);
		
		message.timestamp = moment().valueOf();
		io.emit('message', message);
	});


	socket.emit('message', {
		text: 'Welcome to the Chat Application!',
		timestamp: moment().valueOf()
=======
// let's us know when user is connected on backend
io.on('connection', function(socket){
	console.log('User Connected via socket.io!!');

// lets the browsers communicate
	socket.on('message', function(message){
		console.log('Message received: ' + message.text)
// sends the message to every single client and the client
		io.emit('message', message);
	});

	
// Individual sockets emits message object
	socket.emit('message', {
		text: 'Welcome to the chat Application How have you been? '
>>>>>>> efe83ec397a3c9c44620b402fbe092869001d7f4
	});
});


<<<<<<< HEAD
=======





>>>>>>> efe83ec397a3c9c44620b402fbe092869001d7f4
http.listen(PORT, function(){
	console.log('Server Started');
})