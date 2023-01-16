var quizQuestions = [
  {
  question: "Commonly used data types DO NOT include:",
  a: "strings", 
  b: "booleans",
  c: "alerts",
  d: "numbers",
  correctAnswer: "alerts",
  },
  {
  question: "The condition in an if / else statement is enclosed within ____.",
  a: "quotes",
  b: "curly brackets",
  c: "parentheses",
  d: "square brackets",
  correctAnswer: "parentheses",
  },
  {
  question: "Arrays in Javascript can be used to store ____.",
  a: "numbers and strings",
  b: "other arrays",
  c: "booleans",
  d: "all of the above",
  correctAnswer: "all of the above",
  },
  {
  question: "String values must be enclosed within ____ when being assigned to variables.",
  a: "commas",
  b:  "curly brackets",
  c: "quotes",
  d: "parenthesis",
  correctAnswer: "quotes",
  },
  {
  question: "A very useful tool for used during development and debugging for printing content to the debugger is:",
  a: "Javascript", 
  b: "terminal / bash",
  c:  "for loops",
  d: "console log",
  correctAnswer: "console log",
  },
];

var timerEl = document.getElementById('time');
var startQuiz = document.getElementById('start');
var questions = document.getElementById('questions');
var startScreen = document.getElementById('start-screen');
var questionTitle = document.getElementById('question-title');
var optionOne = document.getElementById('optionOne');
var optionTwo = document.getElementById('optionTwo');
var optionThree = document.getElementById('optionThree');
var submitBtn = document.getElementById('submit');
var quiz = document.getElementById('quiz');
var options = document.getElementById('options');

startQuiz.addEventListener('click',
function time() {
  var timeLeft = 75;
  var timeInterval = setInterval(function () {
      timeLeft--;
      timerEl.textContent = timeLeft + " seconds left.";

      if(timeLeft === 0) {
          clearInterval(timeInterval);
  }
}, 1000)},
);

startQuiz.addEventListener('click',
  function display() {
  startScreen.style.display = 'none';
  quiz.appendChild(questionTitle);
  quiz.appendChild(optionOne);
  quiz.appendChild(optionTwo);
  quiz.appendChild(optionThree);
  quiz.appendChild(submitBtn);
    time();
});



