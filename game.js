enchant();
var gameIsRunning = false;
window.onload = function() {
	var game = new Game(41 * 16, 41 * 16);
	game.preload('assets/map1.png',
		'assets/chara7.png',
		'assets/chara6.png',
		'assets/chara5.png',
		'assets/chara0.png',
		'assets/icon0.png',
		'assets/effect0.png',
		'assets/sot.mp3'
	);
	game.fps = 30;
	game.scale = 1;
	game.onload = function() {
		var scene = new GameScene();
		game.pushScene(scene);



		/*var sound = new Audio('assets/sot.mp3');
		sound.play();
		setInterval(function() {
			if (sound.currentTime >= 29)
				sound.currentTime = 0;
		}, 1000);*/


	};
	game.start();
	gameIsRunning = true;
};