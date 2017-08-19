console.log('Your JavaScript is connected');

document.getElementById('cool_button').addEventListener('click',function(){
	document.getElementById('welcome_message').textContent= 'You pressed the button!';
});