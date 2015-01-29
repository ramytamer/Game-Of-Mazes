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
				swal({
					title:"How To Play",
					text:'move up : up arrow\n'+
					'move down : down arrow\n'+
					'move right : right arrow\n'+
					'move left : left arrow\n'+
					'turn up : up arrow + shift\n'+
					'turn down : down arrow + shift\n'+
					'turn right : right arrow + shift\n'+
					'turn left : left arrow + shift\n'+
					'shoot : space\n'+
					'pause : p\n'+
					'Bombs : \nA- grenade :exploid if Arya touches it\n'+
					'B- Land mine exploid if arya stand on it for 0.5 second/n'
				});
			}
		});
	}
});

