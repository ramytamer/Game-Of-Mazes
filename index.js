window.myFirebaseRef = new Firebase("https://game-of-mazes.firebaseio.com/");

window.myFirebaseRef.child('scores').on('value', function(snapshot) {
    var scoresObj = snapshot.val();
    window.scores = [];
    if (Object.keys(scoresObj).length) {
        $.each(scoresObj, function(index, val) { scores.push(val); });
    }
    scores.sort(function(a, b){ return (a.score > b.score ? -1 : (a.score < b.score ? 1 : 0)); });

    var scoreBoard = $('#scores span');
    $('#scores span').html('');
    for (var i = 0; i < scores.length; i++) {
        scoreBoard.append('<p>' + scores[i].name + ' - ' + scores[i].score + '</p>');
    }
}); 