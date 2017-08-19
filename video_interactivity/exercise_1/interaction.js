console.log('Your JavaScript is connected');
document.getElementById('play').addEventListener('click',function(){
	document.getElementById('video').play();
});
document.getElementById('pause').addEventListener('click',function(){
	document.getElementById('video').pause();
});
document.getElementById('switch').addEventListener('click',function(){
	document.getElementById('video').setAttribute('src', 'assets/snail.mp4');
});

document.getElementById('video').addEventListener('ended', function(){
	this.setAttribute('src', 'assets/snail.mp4');
	this.play();
	document.getElementById('welcome_message').textContent = 'You pressed the button!';
	document.getElementById('welcome_message').style.color = 'white';
});

setTimeout(function(){
	document.getElementById('video').play();
}, 5000);