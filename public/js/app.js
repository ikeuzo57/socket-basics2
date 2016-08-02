
var socket = io();



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
var $form = jQuery('#message-form');

$form.on('submit', function(event){
	event.preventDefault();

	var $message = $form.find('input[name=message]')
	// sends the message to the server and to any other client
	socket.emit('message', {
		text: $message.val()
	});

	$message.val('');

});