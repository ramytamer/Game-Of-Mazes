var EndScene = Class.create(Scene, {
	initialize: function(status) {
		var self = this;
		Scene.apply(this);

		self.inEnd = true;
		var survived = new Sprite(656, 656);
		survived.image = Game.instance.assets['assets/survived.png'];
		var gameOver = new Sprite(656, 656);
		gameOver.image = Game.instance.assets['assets/gameover.png'];


		var score = parseInt($('#score').text());

		/** if user finished alive, add 1000 point to the score */
		if (status) { score += 1000; $('#score').text(score); }

		var highScore = window.scores.length ? parseInt(window.scores[0].score) : 0;

		swal({
			title: (score > highScore ? 'New High Score (Y)' : 'Not so good :('),
			text: 'What is your name ?',
			type: 'input',
			showCancelButton: false,
			closeOnConfirm: true,
			animation: 'slide-from-bottom',
			inputPlaceholder: 'your name'
		}, function(name) {
			if (!name || $.trim(name).length < 3) name = "GOM";

			document.addEventListener('keyup', function(e) {
				if (e.keyCode == 82 && self.inEnd) {
					self.inEnd = false;
					location.reload();
				}
			});

			self.addScore(name, score);

			if (status) {
				self.addChild(survived);
			} else {
				self.addChild(gameOver);
			}
		});

		
	},

	addScore: function(name, score) {
		window.myFirebaseRef.child('scores').push({
			name: name,
			score: score
		});
	},

	fetchScores: function() {
		if (!localStorage || !localStorage.scores || localStorage.scores === '') return [];

		var scores = JSON.parse(localStorage.scores);

		scores.sort(function(a, b) {
			return (a.score < b.score ? 1 : (a.score > b.score ? -1 : 0));
		});
		return scores;
	}
});