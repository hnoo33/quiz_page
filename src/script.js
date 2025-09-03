let questionsDB = [
  { question: "Do you like coding?", answer: "yes" },
  { question: "Is the earth flat?", answer: "no" },
  { question: "Is JavaScript fun?", answer: "yes" },
  { question: "Do cats bark?", answer: "no" }
];

let currentQuestion = {};

function loadQuestion() {
  const randomIndex = Math.floor(Math.random() * questionsDB.length);
  currentQuestion = questionsDB[randomIndex];
  document.getElementById("question-text").innerText = currentQuestion.question;
  document.getElementById("feedback").innerText = "";
}

function checkAnswer(userAnswer) {
  if (userAnswer === currentQuestion.answer) {
    document.getElementById("feedback").innerText = "✅ Correct!";
  } else {
    document.getElementById("feedback").innerText = "❌ Wrong!";
  }
  setTimeout(loadQuestion, 1500);
}

loadQuestion();
