var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

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
	});
});







http.listen(PORT, function(){
	console.log('Server Started');
})