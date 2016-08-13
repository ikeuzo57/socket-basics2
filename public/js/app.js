
var socket = io();


<<<<<<< HEAD
socket.on('connect', function(){
		console.log("Connected to socket.io Server!!");
});

socket.on('message', function(message){
	var momentTimestamp = moment.utc(message.timestamp); 
	console.log('New message');
	console.log(message.text);

	jQuery('.messages').append('<p><strong>' +  momentTimestamp.local().format('h:mm a') + '</strong>: ' + ' '  + message.text + '</p>')
});

// Handles submitting of new message
=======

// informs the client of successfully connect
socket.on('connect', function(){
	console.log('Connected to socket.io server!');
});

// listens for the emit message from server to client
socket.on('message', function(message){
	console.log('New Message: ');
	console.log(message.text);

	jQuery('.messages').append('<p>' + message.text +'</p>')

});
// Handles submitting of new messages
>>>>>>> efe83ec397a3c9c44620b402fbe092869001d7f4
var $form = jQuery('#message-form');

$form.on('submit', function(event){
	event.preventDefault();

<<<<<<< HEAD
	var $message = $form.find('input[name=message]');
	socket.emit('message', {
		text: $message.val()
	});
	$message.val('');
=======
	var $message = $form.find('input[name=message]')
	// sends the message to the server and to any other client
	socket.emit('message', {
		text: $message.val()
	});

	$message.val('');

>>>>>>> efe83ec397a3c9c44620b402fbe092869001d7f4
});