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
  b: "curly brackets",
  c: "quotes",
  d: "parenthesis",
  correctAnswer: "quotes",
  },
  {
  question: "A very useful tool for used during development and debugging for printing content to the debugger is:",
  a: "Javascript", 
  b: "terminal / bash",
  c: "for loops",
  d: "console log",
  correctAnswer: "console log",
  },
];

// Global variables
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
var radioBtnA = document.getElementById('radioBtn-a');
var radioBtnB = document.getElementById('radioBtn-b');
var radioBtnC = document.getElementById('radioBtn-c');
var radioBtnD = document.getElementById('radioBtn-d');
var finalScore = document.getElementById('highscores');
var endScreen = document.getElementById('end-screen');
var initials = document.getElementById('initials');
var results = document.getElementsByClassName('final-score');
var initialsBtn = document.getElementsByClassName('initialsBtn');

// empty variables
var questionIndex = 0;
var score = 0;
var timeLeft = 75;

// hide displays on start screen
questions.style.display = "none";
endScreen.style.display = "none";

//function to start timer
function time() {

  var timeInterval = setInterval(function () {
      timeLeft--;
      timerEl.textContent = timeLeft + " seconds left.";

      if(timeLeft === 0) {
          clearInterval(timeInterval);
  }
}, 1000)}

// function to start quiz
function startQuestions() {
  startScreen.style.display = "none";
  questions.style.display = "block";
  time();
  questionDisplay();
}

// function to display questions
function questionDisplay() {
  questionTitle.textContent = quizQuestions[questionIndex].question;
  choiceA.textContent = quizQuestions[questionIndex].a;
  radioBtnA.value = quizQuestions[questionIndex].a;
  choiceB.textContent = quizQuestions[questionIndex].b;
  radioBtnB.value = quizQuestions[questionIndex].b;
  choiceC.textContent = quizQuestions[questionIndex].c;
  radioBtnC.value = quizQuestions[questionIndex].c;
  choiceD.textContent = quizQuestions[questionIndex].d;
  radioBtnD.value = quizQuestions[questionIndex].d;
}

// functions to check answers if answers are correct
function checkAnswer() {
  var selectedAnswer = document.querySelector('input[type=radio]:checked');
  var answer = selectedAnswer.value;
  console.log(answer);
  console.log(quizQuestions[questionIndex].correctAnswer);

  // if statement to deduct time if answer is wrong
  if (quizQuestions[questionIndex].correctAnswer !== answer) {
    timeLeft -= 15;
  }
  console.log("score: " + timeLeft);
  // call function to change question
  changeQuestion();
}

// function to change question
function changeQuestion() {
  questionIndex++;

  // if else statement to either display next question or go to screen to add initials
  if (questionIndex < quizQuestions.length) {
    questionDisplay();
  } else {
    userAddInitials();
  }
}

// function to add initials
function userAddInitials() {
  questions.style.display = "none";
  endScreen.style.display = "block";
  results.innerText = timeLeft;
  console.log("score: " + timeLeft);
}

// function to end quiz
function endQuiz() {
  window.location.href = "highscores.html";
}

// event listeners to call functions when buttons are clicked
startBtn.onclick = startQuestions;
submitBtn.onclick = checkAnswer;
initialsBtn.onclick = endQuiz;