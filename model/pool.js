var ObjectPool = Class({

  pool: [],
  pool2: [],

  constructor: function() {
    for (j = 0; j < 20; j++) {
      this.pool.push(new (this.randomize())());
      this.pool.push(new Coin());
      this.pool2.push(new (this.randomize2())());
    }
  },

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
  },
  popPool:function(){
    return this.pool.pop();
  },
  pushPool:function(x){
    this.pool.push(x);
  },
  popPool2:function(){
    return this.pool2.pop();
  },
  pushPool2:function(x){
    this.pool2.push(x);
  }

});
