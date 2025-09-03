let questionsDB = [
  { question: "Python is a type of snake?", answer: "yes" },
  { question: "Is the earth flat?", answer: "no" },
  { question: "2 + 2 equal 5?", answer: "no" }
];

let currentIndex = 0;

function loadQuestion() {
  if (currentIndex >= questionsDB.length) {
    document.getElementById("question-text").innerText = "All questions finished!";
    document.getElementById("feedback").innerText = "";
    document.querySelector("button.yes").style.display = "none";
    document.querySelector("button.no").style.display = "none";
    document.getElementById("retry-btn").style.display = "inline-block";
    return;
  }

  document.getElementById("question-text").innerText = questionsDB[currentIndex].question;
  document.getElementById("feedback").innerText = "";
}

function checkAnswer(userAnswer) {
  if (userAnswer === questionsDB[currentIndex].answer) {
    document.getElementById("feedback").innerText = "✅ Correct!";
  } else {
    document.getElementById("feedback").innerText = "❌ Wrong!";
  }
  currentIndex++;
  setTimeout(loadQuestion, 1500);
}

function retryQuiz() {
  currentIndex = 0;
  document.querySelector("button.yes").style.display = "inline-block";
  document.querySelector("button.no").style.display = "inline-block";
  document.getElementById("retry-btn").style.display = "none";
  loadQuestion();
}

loadQuestion();
