enchant();
var gameIsRunning = false;
var soundIsPlaying = false;
window.onload = function() {
	var game = new Game(41 * 16, 41 * 16);
	game.preload('assets/map1.png',
		'assets/chara7.png',
		'assets/chara6.png',
		'assets/chara5.png',
		'assets/chara0.png',
		'assets/icon0.png',
		'assets/effect0.png',
		'assets/start.png',
		'assets/gameover.png',
		'assets/survived.png',
		'assets/sot.mp3',
		'assets/bullet.png',
		'assets/Explosion.wav',
		'assets/Explosion2.wav',
		'assets/Explosion3.wav',
		'assets/Explosion5.wav',
		'assets/Laser_Shoot.wav',
		'assets/Pickup_Coin.wav',
		'assets/Pickup_Coin2.wav',
		'assets/Explosion8.wav'
	);
	game.fps = 30;
	game.scale = 1;
	game.onload = function() {

		var startScene = new StartScene();
		game.pushScene(startScene);
		var sound = new Audio('assets/sot.mp3');
		sound.volume = 0.45;
		setInterval(function() {
			if (sound.currentTime >= 24)
				sound.currentTime = 0;
		}, 1000);

		document.addEventListener('keyup', function(e) {
			if (e.keyCode == 77) {
				sound.volume = sound.volume == 0.45 ? 0 : 0.45;
			} else if (e.keyCode == 83 && !soundIsPlaying) {
				soundIsPlaying = true;
				sound.play();
			}
		});
	};
	game.start();
};