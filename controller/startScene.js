var StartScene=Class.create(Scene,{
	initialize:function(){
		Scene.apply(this);
		var inStart = true;
		var background =new Sprite(656,656);
		background.image=Game.instance.assets['assets/start.png'];
		this.addChild(background);
		document.addEventListener('keyup', function(e) {
			if (e.keyCode == 83 && inStart) {
				inStart=false;
				gameIsRunning = true;
				Game.instance.replaceScene(new GameScene());
				console.info("GAME Started");
			} else if (e.keyCode == 72 && inStart) {
				$.jAlert('How to play', '');
			}
		});
	}
});
