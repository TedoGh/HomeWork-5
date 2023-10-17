const btnEl = document.querySelector("#btn");
const divEl = document.querySelector("#text");

btn.addEventListener("click", () => {
  divEl.style.display = "none";
});

const body = document.body;
const divElement = document.createElement("div");
divElement.setAttribute("id", "card");
const h2Element = document.createElement("h2");
h2Element.innerText = "Gandalf";
const aElement = document.createElement("a");
aElement.setAttribute("href", "#");
aElement.innerText = "Go to profile";
divElement.append(h2Element, aElement);
body.append(divElement);

const questions = [
  {
    question: "What is the capital of France?",
    answers: {
      a: "Miami",
      b: "Rome",
      c: "Paris",
      d: "Berlin",
    },
    correctAnswer: "c",
  },
  {
    question: "What is 49 Divided by 7?",
    answers: {
      a: "8",
      b: "7",
      c: "4",
      d: "9",
    },
    correctAnswer: "b",
  },
  {
    question: "Who wasn’t the US president?",
    answers: {
      a: "Donald John Trump",
      b: "Harry S. Truman",
      c: "Ronald Reagan",
      d: "Elon Musk",
    },
    correctAnswer: "d",
  },
  {
    question: "Which  famous musician was deaf?",
    answers: {
      a: "Beethoven",
      b: "Mozart",
      c: "Shostakovich",
      d: "Schopen",
    },
    correctAnswer: "a",
  },
];

const quiz = document.querySelector("#quiz");
const results = document.querySelector("#results");
const submitBtn = document.querySelector("#submit");

const quizGame = () => {
  const output = [];

  questions.forEach((question, questionIndex) => {
    const answers = [];

    for (const letter in question.answers) {
      answers.push(
        `<label>
          <input type="radio" name="question${questionIndex}" value="${letter}">
          ${letter}: ${question.answers[letter]}
        </label>`
      );
    }

    output.push(
      `<div class="question">${question.question}</div>
       <div class="answers">${answers.join("")}</div>`
    );
  });

  quiz.innerHTML = output.join("");
};

submitBtn.addEventListener("click", () => {
  const answerContainers = quiz.querySelectorAll(".answers");
  let numCorrect = 0;
  questions.forEach((question, questionIndex) => {
    const answerContainer = answerContainers[questionIndex];
    const selector = `input[name=question${questionIndex}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;
    if (userAnswer === question.correctAnswer) {
      numCorrect++;
      answerContainer.style.color = "green";
    } else {
      answerContainer.style.color = "red";
    }
  });
  results.innerHTML = `${numCorrect} out of ${questions.length} answers are correct`;
});

quizGame();
