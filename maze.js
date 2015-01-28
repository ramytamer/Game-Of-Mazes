var Maze = Class({
	$statics: {
		N: 1,
		S: 2,
		E: 4,
		W: 8,
		DX: {
			E: 1,
			W: -1,
			N: 0,
			S: 0
		},
		DY: {
			E: 0,
			W: 0,
			N: -1,
			S: 1
		},
		OPPOSITE: {
			E: 8,
			W: 4,
			N: 2,
			S: 1
		},
		directions: ['N', 'S', 'E', 'W'],
		dirVal: {
			E: 4,
			W: 8,
			N: 1,
			S: 2
		},
		shuffle: function(o) {
			for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
			return o;
		},
		create2DArray: function(h, w) {
			var arr = [];
			for (i = 0; i < h; i++)
				arr[i] = [];
			for (i = 0; i < h; i++)
				for (j = 0; j < w; j++)
					arr[i][j] = 0;
			return arr;
		},
		carve_pass: function(cx, cy) {
			var dir = this.shuffle(this.directions);
			for (var i = 0; i < 4; i++) {
				var direction = dir[i];
				var nx = cx + this.DX[direction],
					ny = cy + this.DY[direction];
				if (ny >= 0 && ny <= ((this.grid).length - 1) && nx >= 0 && nx <= ((this.grid).length - 1) && this.grid[ny][nx] === 0) {
					this.grid[cy][cx] |= this.dirVal[direction];
					this.grid[ny][nx] |= this.OPPOSITE[direction];
					this.carve_pass(nx, ny);
				}
			}
		},
		toBlocks: function() {
			for (var i = 0; i < 2 * this.width + 1; i++) {
				this.mazeArray[0][i] = 1;
				this.mazeArray[2 * this.height][i] = 1;
				this.mazeArray[i][0] = 1;
				this.mazeArray[i][this.width * 2] = 1;
			}
			var x, y;
			for (i = 0; i < this.height; i++) {
				for (var j = 0; j < this.width; j++) {
					x = i * 2 + 1;
					y = j * 2 + 1;
					this.mazeArray[x + 1][y] = (this.grid[i][j] & this.S) === 0;
					if (this.grid[i][j] & this.E)
						this.mazeArray[x + 1][y + 1] = ((this.grid[i][j] | this.grid[i][j + 1]) & this.S) === 0;
					else
						this.mazeArray[x][y + 1] = this.mazeArray[x + 1][y + 1] = 1;
				}
			}
		}
	},
	mazeArray: [],
	grid: [],
	constructor: function(width, height) {
		this.width = width;
		this.height = height;

		this.grid = this.create2DArray(this.height, this.width);
		this.mazeArray = this.create2DArray(2 * this.height + 1, 2 * this.width + 1);

		this.carve_pass(0, 0);

		this.toBlocks();
		this.toArray();
	},
	getMazeArray: function() {
		return this.mazeArray;
	},
	toArray: function() {
		var i, j;
		for (i = 0; i < 2 * this.height + 1; i++) {
			for (j = 0; j < 2 * this.width + 1; j++) {
				this.mazeArray[i][j] = ((this.mazeArray[i][j]) ? 1 : 0);
			}
		}
	}
});