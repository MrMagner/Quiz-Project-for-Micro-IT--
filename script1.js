const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Tech Machine Language", "Hyperlink Text Machine Language"],
    answer: 0
  },
  {
    question: "Which tag is used for JavaScript in HTML?",
    options: ["<js>", "<script>", "<javascript>"],
    answer: 1
  },
  {
    question: "What CSS property sets the background color?",
    options: ["background", "bgcolor", "background-color"],
    answer: 2
  },
  {
    question: "Which of these is a JavaScript data type?",
    options: ["Boolean", "Integer", "Float"],
    answer: 0
  },
  {
    question: "Which tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>"],
    answer: 1
  },
  {
    question: "What is the default display of a <div>?",
    options: ["inline", "block", "flex"],
    answer: 1
  },
  {
    question: "How do you declare a variable in JavaScript?",
    options: ["var name = value", "let name value", "define name = value"],
    answer: 0
  },
  {
    question: "Which of the following is a front-end framework?",
    options: ["Django", "Laravel", "React"],
    answer: 2
  },
  {
    question: "How do you write a comment in CSS?",
    options: ["// comment", "<!-- comment -->", "/* comment */"],
    answer: 2
  },
  {
    question: "What is the output of 2 + '2' in JS?",
    options: ["4", "22", "undefined"],
    answer: 1
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultBox = document.getElementById("result-box");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.addEventListener("click", () => checkAnswer(index));
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = questions[currentQuestion].answer;
  if (selected === correct) score++;

  nextBtn.style.display = "inline-block";
  [...optionsEl.children].forEach((btn, i) => {
    btn.disabled = true;
    btn.style.backgroundColor = i === correct ? "#00ff88" : "#333";
  });
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
    nextBtn.style.display = "none";
  } else {
    showResult();
  }
});

function showResult() {
  document.getElementById("quiz-box").classList.add("hidden");
  resultBox.classList.remove("hidden");
  scoreEl.textContent = `${score} / ${questions.length}`;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  resultBox.classList.add("hidden");
  document.getElementById("quiz-box").classList.remove("hidden");
  nextBtn.style.display = "none";
  loadQuestion();
}

loadQuestion();
