var EndScene = Class.create(Scene, {
	initialize: function(status) {
		Scene.apply(this);

		var inEnd = true;
		var survived = new Sprite(656, 656);
		survived.image = Game.instance.assets['assets/survived.png'];
		var gameOver = new Sprite(656, 656);
		gameOver.image = Game.instance.assets['assets/gameover.png'];
		if (status)
			this.addChild(survived);
		else
			this.addChild(gameOver);
		document.addEventListener('keyup', function(e) {
			if (e.keyCode == 82 && inEnd) {
				inEnd = false;
				location.reload();
			}
		});
	}
});