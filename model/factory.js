var Factory = Class({
	randomize: function() {
		var rand = Math.random();
		var opt = [Ammo, BombA, BombB, Oger, Orc];
		rand *= 5;
		rand = Math.floor(rand);
		return opt[rand];
	},
	randomize2: function() {
		var rand = Math.random();
		var opt = [BombA, BombB, Oger, Orc];
		rand *= 4;
		rand = Math.floor(rand);
		return opt[rand];
	}
});