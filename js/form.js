
const card = document.querySelector(".card-container");
const form = document.querySelector('[data-js="addCards"]');

const addQuestion = document.querySelector('[data-js="addQuestion"]');
const addAnswer = document.querySelector('[data-js="addAnswer"]');


const charsQuestion = document.querySelector('[data-js="questionCharsLeft"]');
const charsAnswer = document.querySelector('[data-js="answerCharsLeft"]');




form.addEventListener("submit", (e) => {
  e.preventDefault();
  const section = document.createElement("section");
  section.classList.add("card-container");


  const newQuestion = document.createElement("p");
  newArticle.append(newQuestion);
  newQuestion.textContent = addQuestion.value;

  const newAnswerText = document.createElement("p");
  newAnswerText.classList.add("solution");
  newAnswerText.setAttribute("hidden", "");
  newAnswerText.setAttribute("data-js", "answerText");
  newAnswerText.textContent = addAnswer.value;
  newArticle.append(newAnswerText);


  //======-=====answer toggle activate==============

  const answerButton = document.querySelector('[data-js="answerButton"]');
  const answer = document.querySelector('[data-js="answerText"]');

  let aCounter = 1;
  answerButton.addEventListener("click", (e) => {
    if (aCounter % 2 != 0) {
      answer.removeAttribute("hidden");
      answerButton.textContent = "Hide answer";
      aCounter++;
    } else {
      answer.setAttribute("hidden", "");
      answerButton.textContent = "Show answer";
      aCounter--;
    }
  });

  charsAnswer.textContent = "";
  charsQuestion.textContent = "";
  form.reset();
});
// ==========Character Counts to textfields===============//

function countChars(inputField, output) {
  inputField.addEventListener("input", () => {
    output.textContent = 150 - inputField.value.length + " characters left";
    inputField.value.length === 150
      ? output.classList.add("red")
      : output.classList.remove("red");
  });
}

countChars(addQuestion, charsQuestion);
countChars(addAnswer, charsAnswer);
