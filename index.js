var scores;
scores = (localStorage.scores && localStorage.scores !== '') ? JSON.parse(localStorage.scores) : [];

scores.sort(function(a, b) {
    return (a.score < b.score ? 1 : (a.score > b.score ? -1 : 0));
});

var scoreBoard = $('#scores span');
$('#scores span').html('');
for (var i = 0; i < scores.length; i++) {
    scoreBoard.append('<p>' + scores[i].name + ' - ' + scores[i].score + '</p>');
}