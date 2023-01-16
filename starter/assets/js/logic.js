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
var startBtn = document.getElementById('start');
var quiz = document.getElementById('quiz');
var questionTitle = document.getElementById('question-title');
var questions = document.getElementById('questions');
var choices = document.getElementById('choices');
var choiceA = document.getElementById('choice-a');
var choiceB = document.getElementById('choice-b');
var choiceC = document.getElementById('choice-c');
var choiceD = document.getElementById('choice-d');
var submitBtn = document.getElementById('submit');
var startScreen = document.getElementById('start-screen');

var questionIndex = 0;
var score = 0;

questions.style.display = "none";


function time() {
  var timeLeft = 75;
  var timeInterval = setInterval(function () {
      timeLeft--;
      timerEl.textContent = timeLeft + " seconds left.";

      if(timeLeft === 0) {
          clearInterval(timeInterval);
  }
}, 1000)}

function startQuestions() {
  startScreen.style.display = "none";
  questions.style.display = "block";
  time();
  questionDisplay();
}

function questionDisplay() {
  questionTitle.textContent = quizQuestions[questionIndex].question;
  // choices.innerHTML = "";
  choiceA.textContent = quizQuestions[questionIndex].a;
  choiceB.textContent = quizQuestions[questionIndex].b;
  choiceC.textContent = quizQuestions[questionIndex].c;
  choiceD.textContent = quizQuestions[questionIndex].d;
}

function changeQuestion() {
  questionIndex++;
  questionDisplay();
}

startBtn.onclick = startQuestions;
submitBtn.onclick = changeQuestion;