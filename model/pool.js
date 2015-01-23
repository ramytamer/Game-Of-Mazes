var ObjectPool = Class({

	pool: [],
	pool2: [],

	constructor: function() {
		var factory = new Factory();
		for (j = 0; j < 20; j++) {
			this.pool.push(new(factory.randomize())());
			this.pool.push(new Coin());
			this.pool2.push(new(factory.randomize2())());
		}
	},
	popPool: function() {
		return this.pool.pop();
	},
	pushPool: function(x) {
		this.pool.push(x);
	},
	popPool2: function() {
		return this.pool2.pop();
	},
	pushPool2: function(x) {
		this.pool2.push(x);
	}

});