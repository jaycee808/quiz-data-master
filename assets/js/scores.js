var scoreboard = document.getElementById('highscores');
var clear = document.getElementById('clear');
var submit = document.getElementById('submit');

var name = document.getElementById('name');
var highScores = JSON.parse(localStorage.getItem('highscores')) || [];


for (var i = 0; i < highScores.length; i++) {
    var score = highScores[i];
    var li = document.createElement('li');
    li.innerHTML = `${score.initials} + ${score.timeLeft}`;
}

