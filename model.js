var Wall = Class.create(Sprite, {
	initialize: function() {
		Sprite.apply(this, [16, 16]);
	}
});

var MudWall = Class.create(Wall, {
	initialize: function() {
		Wall.apply(this);
		this.image = Game.instance.assets['assets/map1.png'];
		this.frame = 6;
	}
});

var StoneWall = Class.create(Wall, {
	initialize: function() {
		Wall.apply(this);
		this.image = Game.instance.assets['assets/map1.png'];
		this.frame = 7;
	}
});

var BoundaryWall = Class.create(Wall, {
	initialize: function() {
		Wall.apply(this);
		this.image = Game.instance.assets['assets/map1.png'];
		this.frame = 96;
	}
});

var Road = Class.create(Sprite, {
	initialize: function() {
		Sprite.apply(this, [16, 16]);
		this.image = Game.instance.assets['assets/map1.png'];
		this.frame = 1;
	}
});


var EndPoint = Class.create(Sprite, {
	initialize: function() {
		Sprite.apply(this, [16, 16]);
		this.image = Game.instance.assets['assets/map1.png'];
		this.frame = 29;
	}
});



var Item = Class.create(Sprite, {
	initialize: function() {
		Sprite.apply(this, [16, 16]);
	}
});

var Collectable = Class.create(Item, {
	initialize: function() {
		Item.apply(this);
	}
});

var Coin = Class.create(Collectable, {
	initialize: function() {
		Collectable.apply(this);
		this.image = Game.instance.assets['assets/icon0.png'];
		this.frame = 14;
		this.tl.scaleTo(-1, 1, 10)
			.delay(10)
			.scaleTo(1, 1, 10)
			.loop();
	}
});

var Ammo = Class.create(Collectable, {
	initialize: function() {
		Collectable.apply(this);
		this.image = Game.instance.assets['assets/map1.png'];
		this.frame = 27;
	}
});

var Bomb = Class.create(Item, {
	initialize: function() {
		Item.apply(this);
	}
});

var BombA = Class.create(Bomb, {
	initialize: function() {
		Bomb.apply(this);
		this.image = Game.instance.assets['assets/icon0.png'];
		this.frame = 24;
	}
});

var BombB = Class.create(Bomb, {
	initialize: function() {
		Bomb.apply(this);
		this.image = Game.instance.assets['assets/icon0.png'];
		this.frame = 26;
	}
});

var Character = Class.create(Sprite, {
	initialize: function() {
		Sprite.apply(this, [16, 16]);
		// Every character is created has the property of isAlive
		// To check later if it's destroyed or not
		// So on Destory we set this value to false
		this.isAlive = true;
	}
});

var Hero = Class.create(Character, {
	initialize: function() {
		Character.apply(this);

		var game = Game.instance;

		this.image = Game.instance.assets['assets/chara0.png'];
		this.animationDuration = 0;
		this.frame = 1;
		// this.scaleY = 1.5;
		// this.scaleX = 1.5;

		this.isMoving = false;
		this.direction = 0; /* 0->down, 1->up, 2->left, 3->right */

	},
	turnUp: function() {
		this.animationArray = [28, 29, 27];
		this.frame = 28;
		this.direction = 1;
	},
	turnDown: function() {
		this.animationArray = [1, 2, 0];
		this.frame = 1;
		this.direction = 0;
	},
	turnRight: function() {
		this.animationArray = [19, 20, 18];
		this.frame = 19;
		this.direction = 3;
	},
	turnLeft: function() {
		this.animationArray = [10, 11, 9];
		this.frame = 10;
		this.direction = 2;
	}
});

var Oger = Class.create(Character, {
	initialize: function() {
		Character.apply(this);
		this.image = Game.instance.assets['assets/chara5.png'];
		this.animationDuration = 0;
	}
});

var Orc = Class.create(Character, {
	initialize: function() {
		Character.apply(this);
		this.image = Game.instance.assets['assets/chara7.png'];
		this.animationDuration = 0;
	}
});

var Projectile = Class.create(Sprite, {
	initialize: function() {
		Sprite.apply(this, [32, 32]);
		this.image = Game.instance.assets['assets/chara6.png'];
		this.frame = 2;
		this.scaleX = 0.75;
		this.scaleY = 0.75;
	}
});

var Animation = Class.create(Sprite, {
	initialize: function() {
		Sprite.apply(this, [16, 16]);
		this.image = Game.instance.assets['assets/effect0.png'];
		this.frame = [0, 1, 2, 3, 4];
	}
});